var PRODUCTS_DATA = [
  {
    id:"cat1", name:"闪烁体探测器", en:"Scintillator Detectors",
    desc:"闪烁体探测器是核辐射探测中应用最广泛的探测器类型之一，涵盖塑料闪烁体、液体闪烁体、无机晶体等多种类型。",
    items:[
      {name:"EJ-232Q 快时间塑料闪烁体",img:"images/prod/ej232q.png",images:["images/prod/ej232q.png","images/prod/ej254.png","images/prod/ej276.png"],link:"product-detail.html?id=ej232q",desc:"超快衰减时间，适用于高计数率应用"},
      {name:"EJ-254 载硼塑闪",img:"images/prod/ej254.png",link:"product-detail.html?id=ej254",desc:"载硼塑料闪烁体，热中子探测"},
      {name:"EJ-276 n、γ甄别探测器",img:"images/prod/ej276.png",link:"product-detail.html?id=ej276",desc:"中子/伽马甄别，PSD能力强"},
      {name:"EJ-301/EJ-309 液闪探测器",img:"images/prod/ej309.png",link:"product-detail.html?id=ej309",desc:"液体闪烁体，中子/伽马甄别"},
      {name:"EJ-309B 载硼液闪",img:"images/prod/ej309b.png",link:"product-detail.html?id=ej309b",desc:"载硼液体闪烁体"},
      {name:"EJ-410 快中子探测器",img:"images/prod/ej410.png",link:"product-detail.html?id=ej410",desc:"快中子探测专用"},
      {name:"EJ-420 热中子探测器",img:"images/prod/ej420.png",link:"product-detail.html?id=ej420",desc:"热中子探测专用"},
      {name:"EJ-426 热中子闪烁屏",img:"images/prod/ej426.png",link:"product-detail.html?id=ej426",desc:"大面积热中子成像"},
      {name:"NaI(Tl) 晶体探测器",img:"images/prod/nai.png",link:"product-detail.html?id=nai",desc:"高光输出，伽马能谱测量"},
      {name:"BGO 晶体探测器",img:"images/prod/bgo.png",link:"product-detail.html?id=bgo",desc:"高密度高Z，探测效率高"},
      {name:"CsI 晶体探测器",img:"images/prod/csi.png",link:"product-detail.html?id=csi",desc:"高光输出，不潮解"},
      {name:"蒽晶体/芪晶体/锂玻璃",img:"images/prod/organic.png",link:"product-detail.html?id=organic",desc:"有机闪烁晶体及特种闪烁材料"}
    ]
  },
  {
    id:"cat2", name:"半导体探测器", en:"Semiconductor Detectors",
    desc:"半导体探测器具有优越的能量分辨率，广泛应用于核物理实验、辐射监测和核安全领域。",
    items:[
      {name:"硅微条探测器",img:"images/prod/sistrip.png",images:["images/prod/sistrip.png","images/prod/sipixel.png","images/prod/hpge.png"],link:"product-detail.html?id=sistrip",desc:"高位置分辨率，多通道可选"},
      {name:"硅像素探测器",img:"images/prod/sipixel.png",link:"product-detail.html?id=sipixel",desc:"高空间分辨率，粒子径迹探测"},
      {name:"高纯锗(HPGe)探测器",img:"images/prod/hpge.png",link:"product-detail.html?id=hpge",desc:"超高能量分辨率"},
      {name:"CZT探测器",img:"images/prod/czt.png",link:"product-detail.html?id=czt",desc:"室温半导体探测器"},
      {name:"硅漂移探测器(SDD)",img:"images/prod/sdd.png",link:"product-detail.html?id=sdd",desc:"高计数率，X射线探测"},
      {name:"金刚石探测器",img:"images/prod/diamond.png",link:"product-detail.html?id=diamond",desc:"耐高温、抗辐照"}
    ]
  },
  {
    id:"cat3", name:"金刚石探测器", en:"Diamond Detectors",
    desc:"金刚石探测器具有耐高温、抗辐照、响应速度快等优异特性。",
    items:[
      {name:"单晶金刚石探测器",img:"images/prod/scdiamond.png",link:"product-detail.html?id=scdiamond",desc:"超高辐射硬度，快时间响应"},
      {name:"多晶金刚石探测器",img:"images/prod/pcdiamond.png",link:"product-detail.html?id=pcdiamond",desc:"大面积探测，成本优势"},
      {name:"金刚石束流监测器",img:"images/prod/beammon.png",link:"product-detail.html?id=beammon",desc:"粒子加速器束流监测"},
      {name:"金刚石α探测器",img:"images/prod/diaalpha.png",link:"product-detail.html?id=diaalpha",desc:"α粒子探测"}
    ]
  },
  {
    id:"cat4", name:"气体探测器", en:"Gas Detectors",
    desc:"气体探测器是中子探测和辐射监测的重要探测器类型。",
    items:[
      {name:"He3中子正比计数管",img:"images/prod/he3.png",link:"product-detail.html?id=he3",desc:"高中子探测效率"},
      {name:"BF3中子正比计数管",img:"images/prod/bf3.png",link:"product-detail.html?id=bf3",desc:"替代He3方案，经济实用"},
      {name:"裂变室",img:"images/prod/fission.png",link:"product-detail.html?id=fission",desc:"耐高温、抗γ干扰"},
      {name:"流气式正比计数器",img:"images/prod/gasflow.png",link:"product-detail.html?id=gasflow",desc:"α/β粒子测量"},
      {name:"电离室",img:"images/prod/ionchamber.png",link:"product-detail.html?id=ionchamber",desc:"辐射剂量测量"},
      {name:"G-M计数管",img:"images/prod/gm.png",link:"product-detail.html?id=gm",desc:"通用辐射探测"}
    ]
  },
  {
    id:"cat5", name:"电源/电子学", en:"Power Supply & Electronics",
    desc:"核电子学设备是探测器信号读出和数据处理的核心。",
    items:[
      {name:"台式高压电源",img:"images/prod/hvps.png",link:"product-detail.html?id=hvps",desc:"ISEG、ORTEC品牌，多通道可选"},
      {name:"机架式高压电源",img:"images/prod/rackhv.png",link:"product-detail.html?id=rackhv",desc:"EHR系列，高稳定性"},
      {name:"电荷灵敏前置放大器",img:"images/prod/cspa.png",link:"product-detail.html?id=cspa",desc:"Cremat CR-110/CR-111系列"},
      {name:"多道分析器(MCA)",img:"images/prod/mca.png",link:"product-detail.html?id=mca",desc:"16K道，USB接口"},
      {name:"NIM机箱及插件",img:"images/prod/nim.png",link:"product-detail.html?id=nim",desc:"标准NIM核电子学模块"},
      {name:"数字化谱仪 Pixie",img:"images/prod/pixie.png",link:"product-detail.html?id=pixie",desc:"XIA品牌，多通道"},
      {name:"穆斯堡尔谱仪",img:"images/prod/mossbauer.png",link:"product-detail.html?id=mossbauer",desc:"Wissel-instruments品牌"},
      {name:"成形放大器",img:"images/prod/shaper.png",link:"product-detail.html?id=shaper",desc:"核脉冲信号成形"}
    ]
  },
  {
    id:"cat6", name:"辐射检测设备", en:"Radiation Detection Equipment",
    desc:"辐射检测设备广泛应用于核设施、环保、疾控、海关等领域。",
    items:[
      {name:"环境辐射监测系统",img:"images/prod/erms.png",link:"product-detail.html?id=erms",desc:"γ剂量率、气溶胶监测"},
      {name:"便携式辐射巡测仪",img:"images/prod/surveymeter.png",link:"product-detail.html?id=surveymeter",desc:"多种型号，各场景适用"},
      {name:"热释光剂量读出系统",img:"images/prod/tld.png",link:"product-detail.html?id=tld",desc:"个人剂量监测"},
      {name:"α/β表面污染测量仪",img:"images/prod/abmeter.png",link:"product-detail.html?id=abmeter",desc:"表面污染测量"},
      {name:"便携式核素识别仪",img:"images/prod/isotopeid.png",link:"product-detail.html?id=isotopeid",desc:"现场γ能谱核素识别"},
      {name:"个人剂量报警仪",img:"images/prod/dosimeter.png",link:"product-detail.html?id=dosimeter",desc:"实时γ/X射线监测"},
      {name:"通道式辐射监测系统",img:"images/prod/portal.png",link:"product-detail.html?id=portal",desc:"移动物体放射性安检"},
      {name:"UltraLo-1800 α计数器",img:"images/prod/ultralo.png",link:"product-detail.html?id=ultralo",desc:"超低本底α粒子计数"}
    ]
  },
  {
    id:"cat7", name:"加速器相关设备", en:"Accelerator Related Equipment",
    desc:"为粒子加速器和离子注入设备提供相关探测器、离子源和束流诊断设备。",
    items:[
      {name:"ECR离子源",img:"images/prod/ecr.png",link:"product-detail.html?id=ecr",desc:"Pantechnik品牌"},
      {name:"束流监测器",img:"images/prod/beammon2.png",link:"product-detail.html?id=beammon2",desc:"法拉第杯、束流剖面"},
      {name:"多球中子谱仪",img:"images/prod/bonner.png",link:"product-detail.html?id=bonner",desc:"中子能谱测量"},
      {name:"束流诊断系统",img:"images/prod/beamdiag.png",link:"product-detail.html?id=beamdiag",desc:"束流位置、强度监测"}
    ]
  },
  {
    id:"cat8", name:"测试与服务", en:"Testing & Services",
    desc:"提供专业的探测器性能测试、核电子学系统集成和仪器校准服务。",
    items:[
      {name:"探测器性能测试",img:"images/prod/testdet.png",link:"product-detail.html?id=testdet",desc:"能量分辨率、效率测试"},
      {name:"系统集成服务",img:"images/prod/integration.png",link:"product-detail.html?id=integration",desc:"探测系统设计搭建联调"},
      {name:"仪器校准服务",img:"images/prod/calibration.png",link:"product-detail.html?id=calibration",desc:"能量刻度、效率刻度"},
      {name:"维修维护服务",img:"images/prod/repair.png",link:"product-detail.html?id=repair",desc:"探测器及电子学维修"}
    ]
  },
  {
    id:"cat9", name:"光学探测器", en:"Optical Detectors",
    desc:"光学探测器是闪烁体探测器和光学测量系统的核心器件。",
    items:[
      {name:"光电倍增管(PMT)",img:"images/prod/pmt.png",images:["images/prod/pmt.png","images/prod/sipm.png","images/prod/mcp.png","images/prod/apd.png"],link:"product-detail.html?id=pmt",desc:"Photonis品牌，多型号可选"},
      {name:"硅光电倍增管(SiPM)",img:"images/prod/sipm.png",link:"product-detail.html?id=sipm",desc:"高增益，紧凑型"},
      {name:"微通道板(MCP)",img:"images/prod/mcp.png",link:"product-detail.html?id=mcp",desc:"高增益快速响应"},
      {name:"光电二极管",img:"images/prod/photodiode.png",link:"product-detail.html?id=photodiode",desc:"大动态范围"},
      {name:"APD雪崩光电二极管",img:"images/prod/apd.png",link:"product-detail.html?id=apd",desc:"高灵敏度"},
      {name:"电子倍增器(CEM/SCEM)",img:"images/prod/cem.png",link:"product-detail.html?id=cem",desc:"单通道电子放大器"}
    ]
  }
];
