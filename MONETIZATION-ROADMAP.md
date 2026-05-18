# Subnautica 2 Tools 变现路线图

> 目标：把这个站从“上线窗口工具站”升级成一个长期可更新、可收录、可变现的英文游戏攻略资产。

## 核心判断

这个站的机会不在于做一个完整百科，而在于快速、可信地回答玩家正在搜索的具体问题：

- 能不能玩：配置、平台、Game Pass、价格、Early Access 状态。
- 怎么顺利玩：crash、黑屏、低 FPS、安装、存档、co-op。
- 怎么玩得更好：新手路线、资源、蓝图、基地、地图、biomes。

站点必须坚持一个原则：**宁可慢一点，也不要编游戏内数据。** 编错物品、地图、蓝图会伤害玩家信任，也会伤害搜索表现。

## 阶段路线

| 阶段 | 目标 | 判断标准 | 主要动作 | 变现动作 |
|---|---|---|---|---|
| Stage 1: Trust | 让 Google 和玩家相信站点是活的 | 页面被发现，sitemap 正常，核心页有真实来源 | 修 GSC、补 About/Contact/Privacy、更新已上线口径 | 不上广告 |
| Stage 2: Useful | 每个核心页真的能解决一个问题 | GSC 开始出现 impressions；玩家问题能被页面回答 | 扩 system/game-pass/co-op/crash/beginner | 只保留轻量广告位占位 |
| Stage 3: Revenue | 低干扰试变现 | 500+ visits/month 或稳定 impressions | 申请 AdSense；加 1-2 个广告位 | AdSense |
| Stage 4: Affiliate | 高意图页面加购买路径 | 5,000+ visits/month 或硬件相关 query 增长 | 配置页加 SSD/GPU/controller/handheld 建议 | Affiliate + ads |
| Stage 5: Moat | 做成长期攻略资产 | 有自然外链、回访、持续 query | 地图/蓝图/资源数据库化 | 更高广告网络/赞助 |

## 页面优先级

### P0: 立刻做厚

| 页面 | 搜索意图 | 当前问题 | 下一步 |
|---|---|---|---|
| `tools/system-requirements.html` | can I run it / specs / best settings | 只有配置 checker，缺画质建议 | 增加 GPU tier、设置建议、Steam Deck/handheld 观察区 |
| `guides/game-pass.html` | is it on Game Pass / Xbox / PC Game Pass | 有状态，但缺决策对比 | 增加 Steam vs PC Game Pass vs Xbox 表 |
| `guides/co-op.html` | co-op / crossplay / save progress | 还有大量未测问题 | 做测试表：host save、guest progress、invite、reconnect |
| `guides/crash-fix.html` | crash fix / black screen / low FPS | 还是通用排查 | 做按症状分流的 troubleshooting tree |
| `guides/beginner-guide.html` | beginner guide / first things to do | 还偏原则 | 增加 first 2 hours route，但只用已验证内容 |

### P1: 有数据后做厚

| 页面 | 搜索意图 | 条件 |
|---|---|---|
| `tools/resource-tracker.html` | resources / materials / crafting | 需要真实物品名和用途 |
| `guides/blueprints.html` | blueprints / scanner / fragments | 需要直接测试或可靠来源 |
| `guides/map-biomes.html` | map / biomes / locations | 需要可靠区域名、深度、路线 |
| `tools/base-planner.html` | base building / best base location | 需要房间、材料、能源、位置数据 |

### P2: 后续可新增

| 页面 | 价值 | 备注 |
|---|---|---|
| `guides/best-settings.html` | 高变现，硬件相关 | Done: conservative settings starting points, no fake FPS claims |
| `guides/steam-deck.html` | 高搜索潜力 | Done: report template only, waits for current-build tests |
| `guides/save-backup.html` | 工具型长尾 | Done: save safety checklist, no unverified paths |
| `guides/roadmap.html` | 持续更新 | Done: official-first watchlist, no unsourced roadmap claims |

## 14 天执行计划

| 天数 | 重点 | 产出 |
|---|---|---|
| Day 1 | 修 GSC sitemap；确认 Google 已发现核心页 | GSC 状态记录 |
| Day 2 | 做厚 Early Access、Game Pass、Availability | 完成官方信息页 |
| Day 3 | 扩 System Requirements | Done: GPU tier + settings table + upgrade priority |
| Day 4 | 扩 Crash Fix | 症状分流表 + 安全排查步骤 |
| Day 5 | 扩 Co-op | 测试矩阵 + 待验证清单 |
| Day 6 | 扩 Beginner Guide | First 2 hours route |
| Day 7 | 看 GSC query，按 impressions 调整标题和首段 | 查询日志 |
| Day 8-10 | 根据社区高频问题补 1-2 个新页 | 长尾页 |
| Day 11-12 | 补资源/蓝图/地图的可信数据 | 数据表 |
| Day 13 | 检查 AdSense 申请条件 | 法务页、联系页、内容厚度 |
| Day 14 | 决定是否申请 AdSense | 申请或继续补内容 |

## 每日运营节奏

### Morning

- 检查 GSC：Sitemaps、Pages、Performance。
- 记录 impressions/clicks/query。
- 检查 Steam Discussions：crash、co-op、performance、Game Pass。
- 检查 Steam/Xbox store 是否有页面变化。

### Evening

- 更新 `guides/updates.html`。
- 扩一个最有搜索潜力的页面。
- 把新增事实写进 `LAUNCH-DATA-CHECKLIST.md`。
- 对重要更新请求 URL Inspection。

## 变现策略

### 广告

先不急。等页面有稳定 impressions 或 500+ visits/month 再申请 AdSense。广告位应优先放在：

- 侧栏 `ad-slot`
- FAQ 后方
- 长表格之间

不要在页面顶部堆广告，尤其是 crash 和 beginner 页，玩家急着解决问题，广告太早会伤害体验。

### Affiliate

优先放在高意图页面，而不是全站乱放：

| 页面 | 可放产品 |
|---|---|
| System requirements | SSD、GPU、RAM、handheld PC、controller |
| Crash fix | SSD、driver工具不建议随便推；以硬件升级为主 |
| Game Pass | Xbox/PC Game Pass、controller |
| Base planner / beginner | 低优先级，不强行卖 |

Affiliate 必须有清楚 disclosure，不要伪装成纯攻略推荐。

## 内容质量规则

1. 每个页面必须回答一个明确搜索问题。
2. 页面首屏要直接给答案，不绕。
3. 不写“complete guide”除非真的完整。
4. 游戏内数据必须有来源：官方、直接测试、或标注 community report。
5. 每次 patch 后，优先检查 crash/co-op/system/beginner。
6. 页面变厚优先于继续铺空页面。

## 成功指标

| 指标 | 早期目标 | 说明 |
|---|---:|---|
| Indexed pages | 10+ | GSC Pages 或公开 site 查询 |
| Impressions | 100+/day | 先看趋势，不急点击 |
| CTR | 2%+ | 标题和首段影响大 |
| Average position | 30 内 | 有潜力继续优化 |
| Returning pages | 3+ | 说明不只是首页被抓 |
| Revenue | $0 起步 | 前期不要为了几分钱牺牲信任 |

## 当前下一步

1. 先优化 `guides/crash-fix.html`：GSC 目前主要流量集中在 crash / crashing / crash on launch / crash on startup query。
2. 等 GSC sitemap 状态从 `Couldn't fetch` 刷新；公开 sitemap URL 已确认 200，并已在 GSC 重新提交。
3. 继续每天记录 GSC query、landing page、impressions、CTR、position 到 `GSC-QUERY-LOG.md`。
4. 用 `ADSENSE-READINESS.md` 检查申请条件；在 sitemap 状态、联系邮箱、隐私披露准备好前不申请。
5. 继续只发布官方、直接测试、或清楚标注 community report 的游戏内数据。
6. 变现继续等待：AdSense 先准备不申请；affiliate 只在 specs / Game Pass / hardware-adjacent 页面有稳定 query 后做清楚披露。
