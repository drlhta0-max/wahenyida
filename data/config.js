var SITE_CONFIG = {
  // 公司基本信息
  company: {
    shortName: "华恒鑫达",
    fullName: "北京华恒鑫达科技发展有限公司",
    enName: "Beijing Wahenyida Science & Technology Development Co., Ltd.",
    slogan: "核工业探测设备与元器件专业供应商",
    founded: "2006-06-21",
    capital: "1251万元人民币",
    legalPerson: "林秋",
    regAddress: "北京市石景山区石景山路乙18号院D写字楼9层1011号",
    icp: "京ICP备XXXXXXXX号"
  },

  // 联系方式
  contact: {
    address: "北京市石景山区万达广场D座1015室",
    zip: "100043",
    phone: "010-88258670 / 010-88258671",
    mobile: "18911834780",
    fax: "010-88696193",
    email: "sales@wahenyida.com",
    email2: "weiwei@wahenyida.com",
    contactPerson: "舒女士 / 魏小姐",
    workHours: "周一至周五 9:00 - 18:00"
  },

  // 公司简介（首页短版）
  introShort: "北京华恒鑫达科技发展有限公司致力于为核工业研究及生产领域提供高品质元器件和相关产品设备，代理多家国际知名品牌，以真诚、守信、服务周到赢得客户信任。",

  // 公司简介（关于我们完整版）
  introFull: [
    "北京华恒鑫达科技发展有限公司（Beijing Wahenyida Science & Technology Development Co., Ltd.）成立于2006年6月，注册资本1251万元人民币，是一家专注于核工业研究及生产领域的元器件和设备供应商。",
    "公司总部位于北京市石景山区万达广场D座1015室，客户遍布全国各地。公司以真诚、守信、服务周到为宗旨，赢得了核工业领域广大客户的信任与支持。",
    "我们着力引进国际知名品牌产品，满足国内核工业研究和生产领域对元器件和设备在品质和性能上的高要求。公司与法国Photonis、美国Cremat、美国ELJEN、英国Micron、德国Mesytec、德国Wissel-instruments等国际知名企业建立了长期稳定的合作关系。",
    "公司客户涵盖核工业、环保监测、疾控中心、科研院所、高等院校等多个领域，为中国的核科学研究与核技术应用提供了大量优质产品和技术支持。"
  ],

  // 核心价值
  values: [
    { icon: "🎯", title: "品质保障", desc: "代理国际一线品牌，所有产品均经过严格质量认证，确保满足核工业高标准要求" },
    { icon: "🤝", title: "诚信经营", desc: "以真诚和守信为经营原则，建立长期稳定的客户合作关系，赢得业界口碑" },
    { icon: "💡", title: "专业技术", desc: "拥有专业的技术团队，为客户提供产品选型、技术咨询和售后支持服务" },
    { icon: "🌍", title: "全球视野", desc: "紧跟国际核探测技术发展前沿，持续引进全球最先进的核探测产品与技术" }
  ],

  // API 配置（部署函数计算后填入地址）
  api: {
    formUrl: ""  // 填入函数计算 HTTP 触发器地址，如 https://xxx.cn-hangzhou.fc.aliyuncs.com/xxx
  },

  // 地图链接（高德地图搜索地址，点击跳转）
  mapUrl: "https://uri.amap.com/search?keyword=北京市石景山区万达广场D座1015室",

  // 首页统计数字
  stats: [
    { number: "18+", label: "年行业经验" },
    { number: "6+", label: "国际品牌代理" },
    { number: "500+", label: "服务客户" }
  ]
};
