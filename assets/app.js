const RELEASE_TARGET = new Date("2026-05-14T15:00:00Z");

const requirements = {
  min: {
    cpu: 2,
    gpu: 2,
    ram: 12,
    label: "Minimum match",
    note: "Your machine is around the listed minimum spec. Start with Low settings and keep background apps closed."
  },
  rec: {
    cpu: 4,
    gpu: 4,
    ram: 16,
    label: "Recommended match",
    note: "Your machine is near the recommended spec. Medium to High settings should be realistic after Early Access performance patches settle."
  }
};

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function initCountdown() {
  const root = $("[data-countdown]");
  if (!root) return;

  const update = () => {
    const diff = RELEASE_TARGET - new Date();
    const remaining = Math.max(0, diff);
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const mins = Math.floor((remaining % 3600000) / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    const values = { days, hours, mins, secs };
    for (const key of Object.keys(values)) {
      const node = root.querySelector(`[data-time="${key}"]`);
      if (node) node.textContent = String(values[key]).padStart(2, "0");
    }
  };

  update();
  setInterval(update, 1000);
}

function initRequirements() {
  const form = $("#requirements-form");
  const result = $("#requirements-result");
  if (!form || !result) return;

  const calculate = () => {
    const ram = Number(form.ram.value);
    const cpu = Number(form.cpu.value);
    const gpu = Number(form.gpu.value);
    const storage = Number(form.storage.value);
    let headline = "Needs upgrades";
    let note = "This setup is below the listed minimum spec. Upgrade the weakest part before buying, or wait for cloud/Game Pass options.";
    let accent = "var(--danger)";

    if (ram >= requirements.rec.ram && cpu >= requirements.rec.cpu && gpu >= requirements.rec.gpu && storage >= 50) {
      headline = requirements.rec.label;
      note = requirements.rec.note;
      accent = "var(--kelp)";
    } else if (ram >= requirements.min.ram && cpu >= requirements.min.cpu && gpu >= requirements.min.gpu && storage >= 50) {
      headline = requirements.min.label;
      note = requirements.min.note;
      accent = "var(--gold)";
    }

    result.innerHTML = `<strong style="color:${accent}">${headline}</strong><p>${note}</p>`;
  };

  form.addEventListener("input", calculate);
  calculate();
}

function initChecklist() {
  const list = $("[data-checklist]");
  if (!list) return;
  const key = list.dataset.checklist;
  const stored = JSON.parse(localStorage.getItem(key) || "{}");
  const boxes = $all("input[type='checkbox']", list);
  const meter = $("[data-progress]");
  const label = $("[data-progress-label]");

  boxes.forEach((box) => {
    box.checked = Boolean(stored[box.name]);
    box.addEventListener("change", () => {
      stored[box.name] = box.checked;
      localStorage.setItem(key, JSON.stringify(stored));
      renderProgress();
    });
  });

  function renderProgress() {
    const done = boxes.filter((box) => box.checked).length;
    const pct = boxes.length ? Math.round((done / boxes.length) * 100) : 0;
    if (meter) meter.style.width = `${pct}%`;
    if (label) label.textContent = `${done}/${boxes.length} complete`;
  }

  renderProgress();
}

function initPlanner() {
  const form = $("#planner-form");
  const output = $("#planner-output");
  if (!form || !output) return;

  const rooms = {
    scanner: ["Scanner Room", "Extra power source", "Beacon", "Camera drone names"],
    storage: ["Multipurpose Room", "Wall lockers", "Fabricator", "Labeling plan"],
    farm: ["Exterior growbed", "Interior growbed", "Water source", "Food route"],
    vehicle: ["Moonpool area", "Upgrade station", "Charging plan", "Safe approach path"]
  };

  const render = () => {
    const mode = form.baseType.value;
    const depth = form.depth.value;
    const focus = form.focus.value;
    const picks = rooms[focus] || rooms.storage;
    output.innerHTML = `
      <strong>${mode} base at ${depth}</strong>
      <p>Start with ${picks[0].toLowerCase()}, then add ${picks.slice(1).join(", ").toLowerCase()}.</p>
      <ul>${picks.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
  };

  form.addEventListener("input", render);
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initRequirements();
  initChecklist();
  initPlanner();
});
