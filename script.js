const categories = [
  {
    id: "world",
    title: "现代世界诊断",
    subtitle: "默认路径 / NPC / 信息时代",
    thesis: "现代人最大的问题不是缺少信息，而是被学校、平台、工作和文化默认目标接管了注意力。",
    keywords: ["默认路径", "NPC", "社会矩阵", "注意力"],
    tone: "red"
  },
  {
    id: "focus",
    title: "专注与意义",
    subtitle: "愿景 / 目的 / 深度工作",
    thesis: "用自我生成的目标给意识建立秩序，再用每天的优先级行动把未来拉到现在。",
    keywords: ["Anti-vision", "Purpose", "Path", "Priority"],
    tone: "green"
  },
  {
    id: "self",
    title: "自我架构",
    subtitle: "身份 / Human 3.0 / 四象限",
    thesis: "自我不是固定实体，而是由目标、价值、经验和观点组成的操作系统，可以被重新设计。",
    keywords: ["身份", "Human 3.0", "Mind", "Body", "Spirit", "Vocation"],
    tone: "blue"
  },
  {
    id: "skill",
    title: "技能堆叠",
    subtitle: "通才 / 写作 / 结果技能",
    thesis: "互联网时代的高价值个体，不靠单一专业赢，而靠多技能组合解决真实问题。",
    keywords: ["通才", "营销", "销售", "写作", "AI"],
    tone: "brass"
  },
  {
    id: "creator",
    title: "创作者分发",
    subtitle: "观点 / 个人分发 / 心智地产",
    thesis: "内容不是信息搬运，而是用你的世界观折射旧想法，占据受众的心智空间。",
    keywords: ["Point of view", "Anti-niche", "Mental monopoly"],
    tone: "green"
  },
  {
    id: "business",
    title: "一个人公司",
    subtitle: "微教育 / 产品化 / 杠杆",
    thesis: "从解决自己的问题开始，把经验包装成产品，用分发与系统换取时间、金钱和选择权。",
    keywords: ["One-person business", "Micro product", "MVO", "Leverage"],
    tone: "red"
  },
  {
    id: "writing",
    title: "写作与思想生产",
    subtitle: "猎取想法 / 长短内容循环",
    thesis: "写作是思考、学习、销售和创造的元技能；长文让思想变深，短内容让思想扩散。",
    keywords: ["Idea hunting", "Newsletter", "Tweets", "Mental monetization"],
    tone: "blue"
  },
  {
    id: "life",
    title: "生活方式设计",
    subtitle: "少工作 / 高杠杆 / 主动休息",
    thesis: "目标不是忙，而是设计一个能支撑创造、健康、关系和自由的日常系统。",
    keywords: ["4-hour workday", "Fill Empty Use", "Lifestyle iteration"],
    tone: "brass"
  }
];

const sources = [
  ["The Art Of Focus 官方摘要", "https://thedankoe.com/letters/the-art-of-focus-official-book-summary-by-the-author-dan-koe/"],
  ["HUMAN 3.0 地图", "https://thedankoe.com/letters/human-3-0-a-map-to-reach-the-top-1/"],
  ["HUMAN 3.0 完整知识库", "https://thedankoe.com/letters/a-complete-knowledge-base-of-human-3-0/"],
  ["你不需要 niche，你需要观点", "https://thedankoe.com/letters/you-dont-need-a-niche-you-need-a-point-of-view/"],
  ["The Anti-Niche", "https://thedankoe.com/letters/the-anti-niche-why-being-nicheless-makes-you-irreplaceable/"],
  ["一个人公司模型", "https://thedankoe.com/the-one-person-business-model-how-to-monetize-yourself/"],
  ["一个人公司路线图", "https://thedankoe.com/letters/the-one-person-business-roadmap-99-of-creators-make-this-mistake/"],
  ["微产品：最简单的开始方式", "https://thedankoe.com/letters/the-simplest-way-to-start-a-one-person-business-micro-products/"],
  ["解决自己的问题并出售方案", "https://thedankoe.com/letters/the-self-reliant-career-path-how-to-generate-independent-income/"],
  ["价值创造", "https://thedankoe.com/letters/value-creation-the-skill-that-built-my-one-person-business/"],
  ["三阶段变现", "https://thedankoe.com/letters/the-3-stages-of-monetization-why-most-creators-are-actually-broke/"],
  ["四小时工作日框架", "https://thedankoe.com/letters/my-1-million-productivity-framework-the-4-hour-workday/"],
  ["四小时工作日哲学", "https://thedankoe.com/letters/the-4-hour-workday-focused-work-changed-my-life/"],
  ["少工作反而赚更多", "https://thedankoe.com/letters/working-less-helps-you-make-more-money-the-4-hour-workday/"],
  ["6 个月改变生活：深度工作", "https://thedankoe.com/letters/change-your-life-in-6-months-my-deep-work-routine/"],
  ["Focus Is A Superpower", "https://thedankoe.com/letters/focus-is-a-superpower-how-to-succeed-in-the-information-age/"],
  ["自我架构", "https://thedankoe.com/letters/the-art-of-self-architecture-how-to-change-who-you-are/"],
  ["NPC 之路", "https://thedankoe.com/letters/the-path-of-the-npc-how-to-not-end-up-mediocre/"],
  ["通才正在接管世界", "https://thedankoe.com/letters/generalists-are-taking-over-the-world-in-the-digital-golden-ages/"],
  ["百万美元技能堆叠", "https://thedankoe.com/letters/the-1-million-dollar-skill-stack-learn-in-this-order/"],
  ["猎取病毒想法", "https://thedankoe.com/letters/how-i-read-books-for-maximum-intelligence-5-minute-habit/"],
  ["用知识建立生意", "https://thedankoe.com/letters/make-millions-with-your-mind-turn-your-knowledge-into-a-business/"],
  ["2026 从零开始一个人公司", "https://glasp.co/youtube/VyR8nqD3sQ8"],
  ["普通人从 $0 到 $10K", "https://ytscribe.com/es/v/hRgG8omhOJ0"],
  ["一个人公司播客摘要", "https://podwise.ai/episodes/1343829"],
  ["AI 一个公司转录摘要", "https://lilys.ai/en/notes/one-person-business-20251112/start-one-person-ai-business-million"],
  ["Purpose & Profit", "https://letters.thedankoe.com/p/purpose-and-profit-a-guide-to-discovering"],
  ["Letters Archive", "https://thedankoe.com/letters/"]
];

const cards = [
  {
    id: "default-path",
    category: "world",
    title: "默认路径制造默认人生",
    quote: "Principles are timeless, tactics are with the times.",
    idea: "他反复把现代生活描述成一条被社会预设的路径：上学、找工作、被安排目标、在娱乐里麻痹。问题不是上班本身，而是一个人从未主动生成自己的目标。",
    explanation: "Dan Koe 的底层判断是：没有自我生成目标的人，注意力会被外界目标填满。现代系统会奖励服从和重复，但创造性收入、自由和意义来自主动选择问题并解决。",
    example: "你每天刷招聘软件、投简历、等公司给方向，这就是外部目标；你每天研究一个自己想解决的具体问题，并公开记录进展，就是自我生成目标。",
    practice: "写下两列：我正在追随谁给我的目标；我愿意主动承担的一个问题。今天用 45 分钟推进后者。",
    sources: [0, 16, 17]
  },
  {
    id: "npc-main",
    category: "world",
    title: "NPC 与主角的区别是视角",
    quote: "Life is a game and your character determines the outcome.",
    idea: "NPC 是被旧信念、环境和社会脚本驱动的人；主角有清晰未来愿景、自己设定的目标和每日不可谈判的行动。",
    explanation: "他用“游戏”隐喻解释人生：不是鸡汤式地把自己当主角，而是意识到角色属性、地图、任务和反馈都可以被调整。",
    example: "同样是下班后两小时，NPC 会自动打开短视频；主角会把它视为升级窗口，用来写内容、训练身体或学习高价值技能。",
    practice: "找一个你觉得“我就是这样的人”的标签，改写成“我正在训练成这样的人”。",
    sources: [17, 16]
  },
  {
    id: "matrix",
    category: "world",
    title: "互联网既是牢笼也是逃生工具",
    quote: "The internet must be used and it must not use you.",
    idea: "互联网可以让人沉迷于算法、比较和消费，也可以让人学习技能、建立分发、找到同频者并创造收入。",
    explanation: "Dan Koe 的关键不是反互联网，而是反被动使用互联网。你要从消费者切到建设者，把信息流变成研究、表达和产品反馈系统。",
    example: "刷 30 条健身内容是消费；把其中 3 条拆成笔记，形成自己的训练计划，再发一条复盘，是建设。",
    practice: "今天打开任何平台前先写一个任务：找 3 个想法、评论 10 个潜在同频者、发布 1 条观点。",
    sources: [18, 6]
  },
  {
    id: "anti-vision",
    category: "focus",
    title: "先写 Anti-Vision，再写 Vision",
    quote: "First, become brutally aware of what you don’t want.",
    idea: "他认为很多人不知道自己想要什么，但很清楚自己厌恶什么。反愿景能先制造清晰边界，再反推出理想生活。",
    explanation: "Anti-vision 是负面样本库：你不想拥有的身体状态、工作日、人际关系、收入结构、居住环境。Vision 是从这些反面中迭代出来的方向。",
    example: "反愿景：每天通勤 2 小时、身体疲惫、靠会议证明价值。愿景：上午深度创作，下午训练和学习，收入来自可复用产品。",
    practice: "写 10 句“我拒绝过这样的日子”，再把每句翻译成一个想要的生活标准。",
    sources: [0, 14, 26]
  },
  {
    id: "purpose-path-priority",
    category: "focus",
    title: "Purpose / Path / Priority",
    quote: "Your purpose is the most pressing problem in your life right now.",
    idea: "目的不是天降使命，而是你现在最该解决、却一直逃避的问题。路径是解决它所需的目标层级，优先级是今天必须推进的最小动作。",
    explanation: "这个框架让“人生意义”变得可操作：先解决健康、财富、关系里的燃眉问题，再逐渐发展到更大的创造和贡献。",
    example: "如果你最大痛点是收入不稳定，目的就是建立可卖技能；路径是学习写作、销售、交付；今天的优先级是写一个服务页面。",
    practice: "用一句话写出当前最痛的问题，再写出 1 年目标、30 天目标、今天 1 个动作。",
    sources: [0, 14]
  },
  {
    id: "focus-muscle",
    category: "focus",
    title: "专注是信息时代的超能力",
    quote: "Focus is a muscle that can be trained.",
    idea: "专注不是靠意志硬扛，而是由目标、路径和眼前问题构成的注意力框架。你关注什么，你的生活质量就被什么塑形。",
    explanation: "他把分心看成意识无序。自我生成目标能让大脑过滤噪声，自动捕捉与目标相关的资源、机会和问题。",
    example: "决定做英语口语产品后，你会突然注意到口语焦虑、练习工具、短视频脚本、社群反馈，这些以前都只是背景噪音。",
    practice: "今天只开一个 60 分钟窗口，手机离身，只处理一个能推动愿景的项目。",
    sources: [0, 15, 14]
  },
  {
    id: "four-hour",
    category: "focus",
    title: "4 小时工作日是约束，不是懒惰",
    quote: "You don’t need more time, you need more focus.",
    idea: "他把 3-4 小时高强度创造视为多数知识工作者的甜点区。少工作不是少产出，而是倒逼你消除、系统化或产品化低杠杆任务。",
    explanation: "4 小时框架区分 building 和 maintenance：搭建新系统时需要更多投入，系统成型后应逐步减少维护时间。",
    example: "自由职业者一开始接客户是 building；后来把交付方法做成课程、模板和社群，是把维护时间降下来。",
    practice: "列出你本周工作中 3 个低杠杆任务：删除一个、模板化一个、延后一个。",
    sources: [11, 12, 13]
  },
  {
    id: "priority-ladder",
    category: "focus",
    title: "优先级阶梯：先创造，再维护",
    quote: "If you can spend 8 hours building someone else’s dreams, you can spend 1 hour building your own.",
    idea: "深度工作日应从最高优先项目开始，再做高杠杆创作、意义任务，最后才处理维护类消息和事务。",
    explanation: "他反对一醒来就被邮件、消息和客户需求拉走。第一块时间决定你是在建自己的未来，还是维护别人的系统。",
    example: "上午 7:00-8:30 写长文或产品；8:30-9:30 拆短内容；之后再回复微信、邮件和客户。",
    practice: "明早把第一小时命名为 Vision Building，并提前写好唯一任务。",
    sources: [14]
  },
  {
    id: "self-os",
    category: "self",
    title: "身份是可编辑的操作系统",
    quote: "Your character is malleable.",
    idea: "他把自我看成由观念、信念、经验和信息组成的系统。改变人生不是装新人设，而是持续改变输入、目标、行动和反馈。",
    explanation: "身份不是一句 affirmation，而是每天重复处理的信息与行动形成的自动化视角。要改变身份，就要改变你让大脑反复生存的概念。",
    example: "你不是“拖延的人”，你是还没有把写作变成身份存活机制的人。每天发布让写作者身份获得反馈。",
    practice: "写一句新身份：我是一个每天公开解决 X 问题的人。今天做一次公开证据。",
    sources: [16, 0]
  },
  {
    id: "human-30",
    category: "self",
    title: "Human 3.0：从服从到整合",
    quote: "Human 3.0 is able to adopt multiple perspectives.",
    idea: "Human 1.0 是遵循权威的 conformist，2.0 是追求独立和地位的 individualist，3.0 是能整合多视角、看见系统并创造新路径的 synthesist。",
    explanation: "这不是单线排名，而是四象限发展模型：Mind、Body、Spirit、Vocation 都可能处在不同水平。真正成熟来自均衡整合。",
    example: "一个高收入创作者可能 Vocation 2.8，但 Body 1.4、Spirit 1.6；系统会在最弱象限处反噬。",
    practice: "用页面下方自测给四象限打分，只选最低的一项做 14 天微习惯。",
    sources: [1, 2]
  },
  {
    id: "metacrisis",
    category: "self",
    title: "个人发展要回应更大的系统危机",
    quote: "We cannot build anti-rivalrous systems with rivalrous minds.",
    idea: "在 HUMAN 3.0 扩展中，他把个人成长放进 metacrisis：竞争性结构、资源消耗和指数技术，让人必须发展系统思考、主权与智慧。",
    explanation: "这让他的自我提升不只是赚钱和效率，而是个体能否发展出足够复杂的意识，参与更正和的系统建设。",
    example: "做内容不是为了收割注意力，而是帮助人形成判断力；做产品不是制造依赖，而是让用户能力提高。",
    practice: "审视你的项目：它让别人更自主，还是更依赖你？改一个交付设计。",
    sources: [2, 1]
  },
  {
    id: "quadrants",
    category: "self",
    title: "Mind / Body / Spirit / Vocation 必须并行",
    quote: "The four quadrants provide a complete map.",
    idea: "Mind 是思考与情绪，Body 是能量与身体，Spirit 是意义与关系，Vocation 是工作、技能和影响力。",
    explanation: "单点优化会制造脆弱：只学赚钱但没有身体，无法长期执行；只讲精神但没有职业结构，会停留在空想。",
    example: "想做一人公司：Mind 负责判断市场，Body 提供精力，Spirit 决定价值观，Vocation 输出产品和收入。",
    practice: "给四象限各写一个 7 天行动，保持小到不会失败。",
    sources: [1, 2]
  },
  {
    id: "skill-stack",
    category: "skill",
    title: "技能堆叠胜过单点专业化",
    quote: "Skill stacking allows you to build a creative solution.",
    idea: "他主张把 evergreen skills 与个人兴趣叠加：信息表达、分发媒介、结果技能，组合后能解决市场中的真实问题。",
    explanation: "专业化能让你完成一个环节，技能堆叠让你看懂 A 如何影响 B、C、D，从而设计完整解决方案。",
    example: "会健身只是一项技能；健身 + 写作 + 销售 + 社群运营，就能做减脂教育产品。",
    practice: "写出你的 1 个兴趣、1 个表达技能、1 个结果技能，把它们组合成一个可卖小项目。",
    sources: [19]
  },
  {
    id: "message-medium-result",
    category: "skill",
    title: "高价值技能三件套：Message / Medium / Result",
    quote: "Message, medium, and applicability.",
    idea: "Message 是有价值的信息，Medium 是分发媒介，Result 是能交付转变的技能。缺一项，就难以形成收入。",
    explanation: "只会表达没有结果，会变成空内容；只会技能没有分发，会没人知道；只会平台技巧没有信息，会被算法淘汰。",
    example: "职业转型顾问：message 是清晰转型叙事，medium 是小红书/公众号/邮件，result 是帮客户拿到面试。",
    practice: "把你的项目拆成三栏，找出最弱一栏，本周只补它。",
    sources: [19]
  },
  {
    id: "learn-by-building",
    category: "skill",
    title: "先建造，再按需学习",
    quote: "Learn as you build.",
    idea: "他反对无限囤课。选择一个项目开始搭建，撞墙后再学习具体知识，这样能过滤掉大量无关信息。",
    explanation: "真实项目会暴露你不知道什么。教学和公开记录会进一步暴露知识漏洞，让学习有即时反馈。",
    example: "不要先学完整营销学；先卖一个 99 元模板，发现没人买，再补定位、标题、落地页和转化。",
    practice: "选一个 7 天内能上线的最小作品，今天只做公开预告。",
    sources: [19, 9]
  },
  {
    id: "ai-amplifier",
    category: "skill",
    title: "AI 是放大器，不是替代人生经验",
    quote: "AI can regurgitate any idea.",
    idea: "他近期观点强调 AI 会商品化大量技术动作，但不能替代一个人有目标、有经历、有观点地折射想法。",
    explanation: "AI 最适合加速研究、结构化、草稿、市场分析和系统执行；不可外包的是你的品味、判断、体验和观点。",
    example: "让 AI 生成 20 个标题是放大器；你根据自己真实经历选择最有张力的角度，是不可替代部分。",
    practice: "用 AI 帮你列出产品大纲，但最终加入 3 个只有你经历过的案例。",
    sources: [3, 25, 22]
  },
  {
    id: "pov-not-niche",
    category: "creator",
    title: "不需要 niche，需要 point of view",
    quote: "People don’t follow dictionaries, they follow humans.",
    idea: "他认为传统“垂直细分”在 AI 时代变弱。真正稀缺的是你如何看世界，以及你能否把多个兴趣整合成一个观点体系。",
    explanation: "niche 是你讲什么主题；point of view 是你为什么这样讲、如何筛选信息、想把人带向哪里。",
    example: "不是“我讲效率”，而是“我讲如何用创作和系统摆脱被安排的人生”。这就是观点。",
    practice: "把账号简介从主题名词改成一个立场句：我帮助 X 从 A 走向 B。",
    sources: [3, 4]
  },
  {
    id: "mental-real-estate",
    category: "creator",
    title: "内容是在争夺心智地产",
    quote: "It’s about valuable ideas.",
    idea: "内容不是追求点赞，而是传播相关、易懂、可行动、能改变视角的想法。想法越能自传播，你占据的心智地产越大。",
    explanation: "他称创作者经济像 mental monopoly：长期让某个概念和你的名字绑定。不是垄断市场，而是拥有一个独特解释框架。",
    example: "James Clear 与 1% 变好绑定；Dan Koe 与 one-person business、focus、anti-niche 绑定。",
    practice: "为你的领域写 5 个你想长期占据的词组，并连续 30 天围绕它们发内容。",
    sources: [6, 18]
  },
  {
    id: "personal-distribution",
    category: "creator",
    title: "个人分发是现代杠杆",
    quote: "Personal distribution is the new way of life.",
    idea: "他把受众、读者、邮件列表和社交网络视为个人分发。没有分发，再好的产品和想法都缺少反馈和机会。",
    explanation: "分发不是虚荣指标，而是绕过平台、出版社、雇主和地理限制的个人基础设施。",
    example: "同样写一本电子书，有 0 读者靠运气，有 5000 邮件读者靠系统。",
    practice: "今天建立一个邮件订阅入口，哪怕只有一个 Notion 表单或简单落地页。",
    sources: [18, 6, 23]
  },
  {
    id: "care-economy",
    category: "creator",
    title: "从注意力经济到关心经济",
    quote: "They want clarity more than information.",
    idea: "他的近期文章强调，人们不只是要更多信息，而是要故事、清晰、立场和能改变生活的作品。长期信任比短期抓眼球更重要。",
    explanation: "制造新奇可以带来点击，但持续分享与你理想生活相关的真实问题与思考，才能让人关心你。",
    example: "标题党让人停留 5 秒；连续一年公开解决同一个人生问题，会让人愿意买你的产品。",
    practice: "把一条内容从“技巧清单”改成“我为何相信这件事 + 我怎么验证它”。",
    sources: [3]
  },
  {
    id: "solve-sell",
    category: "business",
    title: "解决自己的问题，然后出售方案",
    quote: "All I did was build for myself, write to myself, and sell to myself.",
    idea: "Dan Koe 的商业原型是：识别自己的问题，设目标，实验方案，找到有效方法，公开记录，再把方案定价。",
    explanation: "这避免了凭空找赛道。你就是第一位用户，解决过程天然产生内容、证据、产品和同类人群。",
    example: "你从社恐到能稳定做销售电话，把过程做成脚本、复盘表和四周训练营。",
    practice: "列一个你已经解决 30% 的问题，写下“我可以把哪一步模板化给别人”。",
    sources: [8, 9]
  },
  {
    id: "micro-education",
    category: "business",
    title: "微教育是低成本起点",
    quote: "Start as a micro education business.",
    idea: "一人公司最适合从教育、模板、指南、咨询、小课程等微产品开始，因为启动成本低、利润率高、能围绕技能和经验迭代。",
    explanation: "微教育不是贩卖空知识，而是把一个具体转变压缩成可执行材料，帮助别人少走弯路。",
    example: "不是“人生效率课”，而是“7 天搭建你的第一套晨间深度工作系统”。",
    practice: "设计一个 99-299 元微产品：承诺一个结果、限制一个人群、控制在 7 天内可交付。",
    sources: [7, 24, 8]
  },
  {
    id: "mvo",
    category: "business",
    title: "Minimum Viable Offer 先于完美产品",
    quote: "The worst thing you can do is go viral and not have anywhere to send that audience.",
    idea: "他主张尽早有一个最小可行报价。内容带来注意力，如果没有承接路径，就浪费了流量和学习机会。",
    explanation: "MVO 可以是咨询、模板、训练营、服务包或迷你课程。先获得真实购买和反馈，再升级成规模化产品。",
    example: "300 个粉丝也可以卖一个简历改写服务；不必等到 10 万粉丝再开始商业化。",
    practice: "今天写一个 6 行报价：对象、痛点、结果、形式、周期、价格。",
    sources: [10, 23]
  },
  {
    id: "monetization-stages",
    category: "business",
    title: "创作者变现三阶段",
    quote: "Everyone wants to be a creator, nobody wants to accept that it’s a business.",
    idea: "阶段 1 靠平台分成、赞助、联盟；阶段 2 做自由职业/服务但容易变第二份工作；阶段 3 用产品、课程、社区等获得更高控制权。",
    explanation: "他不是说服务无用，而是提醒：如果目标是时间、收入和选择权，最终要把服务经验产品化。",
    example: "先做 1 对 1 简历咨询拿案例，再把流程做成模板和小课，最后建求职社群。",
    practice: "标记你现在的变现阶段，写下进入下一阶段需要的一个产品化动作。",
    sources: [10]
  },
  {
    id: "distribution-first",
    category: "business",
    title: "2026 版本：先想分发，再想产品",
    quote: "Start with distribution, not product.",
    idea: "在近期视频摘要中，他更强调单人业务从注意力来源开始：你如何持续触达具体人群，再决定卖什么。",
    explanation: "产品优先容易闭门造车；分发优先让你每天接触市场语言、问题和购买信号。",
    example: "先连续 30 天写 AI 自动化案例，观察谁私信、问什么、愿意为何付费，再做模板或服务。",
    practice: "选一个主平台和一个私域入口，写下 30 天内容实验主题。",
    sources: [22, 25]
  },
  {
    id: "idea-hunting",
    category: "writing",
    title: "阅读是猎取想法，不是完成书单",
    quote: "Great and memorable humans hunt for ideas.",
    idea: "他不鼓励为了读完而读完，而是带着目标，在未知边缘寻找能改变思考的想法。",
    explanation: "有意义的阅读是让外部思想穿过你的当前目标，发生折射，再变成你自己的表达和作品。",
    example: "你读心理学不是为了记概念，而是寻找能解释“用户为什么拖延购买”的洞察。",
    practice: "今天读 5 分钟，只摘一个让你兴奋的想法，然后写 150 字自己的解释。",
    sources: [20]
  },
  {
    id: "long-short-loop",
    category: "writing",
    title: "长文挖深，短内容扩散",
    quote: "Deconstruct your own writing into a plethora of ideas.",
    idea: "他的内容系统常见循环是：长 newsletter 形成深度论证，再拆成推文、短视频、帖子；短内容反馈再反哺长文。",
    explanation: "这让写作成为思想复利系统：一次深度思考产生多次分发，多次分发又产生市场反馈。",
    example: "写一篇 2000 字“如何克服拖延”，拆成 10 条短帖、1 个脚本、1 封邮件和 1 个产品模块。",
    practice: "把你最近一篇长文拆成 7 条短内容，每条只表达一个观点。",
    sources: [20, 19]
  },
  {
    id: "writing-meta-skill",
    category: "writing",
    title: "写作是元技能",
    quote: "Writing is how you explore idea space.",
    idea: "在 Human 3.0 语境里，写作训练清晰思考、元认知、学习、销售和叙事。AI 时代越能生成内容，越需要人类的判断和框架。",
    explanation: "写作把模糊思想外化，暴露逻辑漏洞，也让你的世界观可被别人理解、传播和购买。",
    example: "不会写的人只能说“我会做增长”；会写的人能把增长问题拆成诊断、实验、指标和复盘。",
    practice: "每天写一个“我观察到 X，因为 Y，所以可以 Z”的三段式观点。",
    sources: [2, 19]
  },
  {
    id: "fill-empty-use",
    category: "life",
    title: "Fill / Empty / Use 日常节律",
    quote: "Fill, empty, use your brain.",
    idea: "他的生活节律是：输入新想法、清空混乱思绪、用大脑进行创造。通常下午学习社交，晚上反思计划，早上输出。",
    explanation: "这是把创作和休息整合成循环，而不是把休息视为偷懒。空白和散步能给思想重组空间。",
    example: "下午读书和聊天收集材料；睡前 journaling 整理；早上写文章和做产品。",
    practice: "今天安排 20 分钟 Fill、10 分钟 Empty、45 分钟 Use。",
    sources: [13, 14]
  },
  {
    id: "active-rest",
    category: "life",
    title: "主动休息是创造力的一部分",
    quote: "Creativity is the balance to productivity.",
    idea: "他引用大量创造者短时高强度工作、长时间散步和休息的模式，说明持续紧绷会降低深度与创造力。",
    explanation: "休息不是停止成长，而是让大脑整合材料、恢复能量、产生新连接。尤其对写作和产品设计，空白是生产系统的一部分。",
    example: "写不出销售页时，不是再坐 3 小时，而是去散步，回来只改一个核心承诺。",
    practice: "在深度工作后安排一次无耳机散步，只思考一个问题。",
    sources: [13]
  },
  {
    id: "lifestyle-iteration",
    category: "life",
    title: "把理想未来缩小到今天试运行",
    quote: "Bring your ideal future into the now.",
    idea: "他认为你不会凭空知道自己想要什么，要把理想生活中的关键动作缩小到现在试验，通过反馈迭代愿景。",
    explanation: "这让愿景脱离幻想：如果你说未来想每天写作，那今天就写 30 分钟，观察你是否真的想要这种生活。",
    example: "想成为自由创作者，不必先辞职；先连续 60 天早起写作、发布、销售一个小产品。",
    practice: "选一个未来生活动作，今天做 20 分钟，把感受写下来。",
    sources: [14]
  },
  {
    id: "freedom-resources",
    category: "life",
    title: "自由来自对时间、金钱、选择权的控制",
    quote: "Work Less. Earn More. Enjoy Life.",
    idea: "他的商业与生活方式主线不是无限扩张公司，而是用技能、分发、产品和系统换取更高控制权。",
    explanation: "这也是他偏好一人公司的原因：少管理、少会议、少复杂组织，用高利润数字产品和个人品牌支持生活设计。",
    example: "你可以不追求 50 人团队，而追求每周 20 小时、稳定产品收入、可迁移的技能和健康关系。",
    practice: "给时间、金钱、选择权各打 1-10 分，最低分决定本月目标。",
    sources: [5, 11, 13]
  }
];

let activeCategory = "all";
let activeView = "all";
const completed = new Set(JSON.parse(localStorage.getItem("danKoeDone") || "[]"));

const byId = (id) => document.getElementById(id);
const categoryMap = Object.fromEntries(categories.map((category) => [category.id, category]));

function sourceLink(index) {
  const [label, url] = sources[index];
  return `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderFilters() {
  const filters = byId("filters");
  filters.innerHTML = [
    `<button class="active" data-category="all">全部</button>`,
    ...categories.map((category) => `<button data-category="${category.id}">${category.title}</button>`)
  ].join("");
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    activeCategory = button.dataset.category;
    filters.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    renderCards();
  });
}

function visibleSections(card) {
  const sections = {
    idea: `<div class="card__section"><strong>原观点转述</strong><p>${card.idea}</p><p>${card.explanation}</p></div>`,
    example: `<div class="card__section"><strong>例子</strong><p>${card.example}</p></div>`,
    practice: `<div class="card__section"><strong>行动练习</strong><p>${card.practice}</p></div>`
  };
  if (activeView === "all") return sections.idea + sections.example + sections.practice;
  return sections[activeView];
}

function renderCards() {
  const query = byId("searchInput").value.trim().toLowerCase();
  const cardsGrid = byId("cardsGrid");
  const filtered = cards.filter((card) => {
    const categoryMatch = activeCategory === "all" || card.category === activeCategory;
    const text = `${card.title} ${card.idea} ${card.explanation} ${card.example} ${card.practice} ${categoryMap[card.category].title}`.toLowerCase();
    return categoryMatch && (!query || text.includes(query));
  });

  cardsGrid.innerHTML = filtered
    .map((card) => {
      const category = categoryMap[card.category];
      const done = completed.has(card.id);
      return `
        <article class="card" data-tone="${category.tone}">
          <div class="card__meta">
            <span class="pill">${category.title}</span>
            <button class="mark ${done ? "done" : ""}" data-card="${card.id}">${done ? "已掌握" : "标记掌握"}</button>
          </div>
          <h3>${card.title}</h3>
          <blockquote>${card.quote}</blockquote>
          ${visibleSections(card)}
          <div class="card__sources">${card.sources.map(sourceLink).join("")}</div>
        </article>
      `;
    })
    .join("");

  if (!filtered.length) {
    cardsGrid.innerHTML = `<article class="card"><h3>没有匹配结果</h3><p>换一个关键词，或切回“全部”分类。</p></article>`;
  }
}

function renderMap() {
  const map = byId("mapNodes");
  const positions = [
    [47, 8], [71, 19], [78, 45], [68, 71], [43, 78], [18, 68], [8, 42], [18, 16]
  ];
  map.innerHTML = categories
    .map((category, index) => {
      const [left, top] = positions[index];
      return `
        <button class="map-node" style="left:${left}%; top:${top}%;" data-map="${category.id}">
          <strong>${category.title}</strong>
          <span>${category.subtitle}</span>
        </button>
      `;
    })
    .join("");
  map.addEventListener("click", (event) => {
    const node = event.target.closest(".map-node");
    if (!node) return;
    const category = categoryMap[node.dataset.map];
    map.querySelectorAll(".map-node").forEach((item) => item.classList.toggle("active", item === node));
    byId("mapPanel").innerHTML = `
      <p class="eyebrow">当前节点</p>
      <h3>${category.title}</h3>
      <p>${category.thesis}</p>
      <ul>${category.keywords.map((keyword) => `<li>${keyword}</li>`).join("")}</ul>
      <p><strong>相关观点卡：</strong>${cards.filter((card) => card.category === category.id).map((card) => card.title).join(" / ")}</p>
    `;
    activeCategory = category.id;
    document.querySelectorAll("#filters button").forEach((button) => {
      button.classList.toggle("active", button.dataset.category === category.id);
    });
    renderCards();
  });
}

function renderSources() {
  byId("sourceList").innerHTML = sources
    .map(([label, url], index) => `<a href="${url}" target="_blank" rel="noreferrer">${label}<span>Source ${index + 1}</span></a>`)
    .join("");
}

function bindToolbar() {
  byId("searchInput").addEventListener("input", renderCards);
  document.querySelector(".segmented").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    activeView = button.dataset.view;
    document.querySelectorAll(".segmented button").forEach((item) => item.classList.toggle("active", item === button));
    renderCards();
  });
  byId("cardsGrid").addEventListener("click", (event) => {
    const button = event.target.closest(".mark");
    if (!button) return;
    const id = button.dataset.card;
    if (completed.has(id)) completed.delete(id);
    else completed.add(id);
    localStorage.setItem("danKoeDone", JSON.stringify([...completed]));
    renderCards();
  });
}

function bindAssessment() {
  const form = byId("assessment");
  const result = byId("assessmentResult");
  const update = () => {
    const values = [...new FormData(form).values()].map(Number);
    const average = values.reduce((sum, value) => sum + value, 0) / values.length;
    const weakestIndex = values.indexOf(Math.min(...values));
    const labels = ["Mind", "Body", "Spirit", "Vocation"];
    let level = "Human 1.0 倾向";
    let text = "当前更容易被外部安排牵引。先建立一个自我生成目标和稳定日常。";
    if (average >= 4.5) {
      level = "Human 2.0 倾向";
      text = "你有自主目标，但还需要把目标、技能、能量和关系整合成一个系统。";
    }
    if (average >= 7.5) {
      level = "Human 3.0 倾向";
      text = "你已经具备较强整合能力。下一步是把个人发展转化为能帮助他人发展的作品和系统。";
    }
    result.innerHTML = `
      <p class="eyebrow">Metatype</p>
      <h3>${level}</h3>
      <p>${text}</p>
      <p><strong>最低象限：</strong>${labels[weakestIndex]}。未来 14 天只优化这一项。</p>
    `;
  };
  form.addEventListener("input", update);
  update();
}

renderFilters();
renderMap();
renderCards();
renderSources();
bindToolbar();
bindAssessment();
