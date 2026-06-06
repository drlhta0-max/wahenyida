var PRODUCTS_DATA = [

  // ================================================================
  // 闪烁体探测器
  // ================================================================
  {
    id: "cat1",
    name: "闪烁体探测器",
    en: "Scintillator Detectors",
    desc: "闪烁体探测器是核辐射探测中应用最广泛的探测器类型之一，涵盖塑料闪烁体、液体闪烁体、无机晶体等多种类型。",
    items: [

      {
        name: "EJ-232Q 快时间塑料闪烁体",
        link: "product-detail.html?id=ej232q",
        brief: {
          img: "images/prod/ej232q.png",
          desc: "超快衰减时间，适用于高计数率应用"
        },
        detail: {
          images: [
            "images/prod/ej232q.png",
            "images/prod/ej254.png",
            "images/prod/ej276.png"
          ],
          text:
            "<p>EJ-232Q是一种超快时间响应的塑料闪烁体，衰减时间仅为0.35ns，是ELJEN公司最快的闪烁体产品之一。" +
            "适用于高计数率、高时间分辨率的核物理实验和辐射探测应用。</p>" +
            "<p>该产品采用特殊的基质材料和荧光染料配方，在保持快时间响应的同时，仍具有较高的光输出。" +
            "可根据客户需求定制不同形状和尺寸。</p>" +
            "<h4>主要参数</h4>" +
            "<table>" +
            "<tr><td>衰减时间</td><td>0.35 ns</td></tr>" +
            "<tr><td>光输出</td><td>相对蒽晶体约15%</td></tr>" +
            "<tr><td>最大发射波长</td><td>370 nm</td></tr>" +
            "<tr><td>密度</td><td>1.02 g/cm³</td></tr>" +
            "</table>"
        }
      },

      {
        name: "EJ-254 载硼塑闪",
        link: "product-detail.html?id=ej254",
        brief: {
          img: "images/prod/ej254.png",
          desc: "载硼塑料闪烁体，热中子探测"
        }
      },

      {
        name: "EJ-276 n、γ甄别探测器",
        link: "product-detail.html?id=ej276",
        brief: {
          img: "images/prod/ej276.png",
          desc: "中子/伽马甄别，PSD能力强"
        }
      },

      {
        name: "EJ-301/EJ-309 液闪探测器",
        link: "product-detail.html?id=ej309",
        brief: {
          img: "images/prod/ej309.png",
          desc: "液体闪烁体，中子/伽马甄别"
        }
      },

      {
        name: "EJ-309B 载硼液闪",
        link: "product-detail.html?id=ej309b",
        brief: {
          img: "images/prod/ej309b.png",
          desc: "载硼液体闪烁体"
        }
      },

      {
        name: "EJ-410 快中子探测器",
        link: "product-detail.html?id=ej410",
        brief: {
          img: "images/prod/ej410.png",
          desc: "快中子探测专用"
        }
      },

      {
        name: "EJ-420 热中子探测器",
        link: "product-detail.html?id=ej420",
        brief: {
          img: "images/prod/ej420.png",
          desc: "热中子探测专用"
        }
      },

      {
        name: "EJ-426 热中子闪烁屏",
        link: "product-detail.html?id=ej426",
        brief: {
          img: "images/prod/ej426.png",
          desc: "大面积热中子成像"
        }
      },

      {
        name: "NaI(Tl) 晶体探测器",
        link: "product-detail.html?id=nai",
        brief: {
          img: "images/prod/nai.png",
          desc: "高光输出，伽马能谱测量"
        }
      },

      {
        name: "BGO 晶体探测器",
        link: "product-detail.html?id=bgo",
        brief: {
          img: "images/prod/bgo.png",
          desc: "高密度高Z，探测效率高"
        }
      },

      {
        name: "CsI 晶体探测器",
        link: "product-detail.html?id=csi",
        brief: {
          img: "images/prod/csi.png",
          desc: "高光输出，不潮解"
        }
      },

      {
        name: "蒽晶体/芪晶体/锂玻璃",
        link: "product-detail.html?id=organic",
        brief: {
          img: "images/prod/organic.png",
          desc: "有机闪烁晶体及特种闪烁材料"
        }
      }

    ]
  },

  // ================================================================
  // 半导体探测器
  // ================================================================
  {
    id: "cat2",
    name: "半导体探测器",
    en: "Semiconductor Detectors",
    desc: "半导体探测器具有优越的能量分辨率，广泛应用于核物理实验、辐射监测和核安全领域。",
    items: [

      {
        name: "硅微条探测器",
        link: "product-detail.html?id=sistrip",
        brief: {
          img: "images/prod/sistrip.png",
          desc: "高位置分辨率，多通道可选"
        },
        detail: {
          images: [
            "images/prod/sistrip.png",
            "images/prod/sipixel.png",
            "images/prod/hpge.png"
          ],
          text:
            "<p>硅微条探测器是位置灵敏半导体探测器的代表产品，由Micron Semiconductor公司制造。" +
            "通过微电子工艺在硅片上制作间距极小的条状电极，实现了高精度的粒子位置测量。</p>" +
            "<p>广泛应用于核物理实验中的带电粒子径迹探测、X射线成像和同步辐射实验等领域。" +
            "可根据实验需求定制条间距、条数和有效面积。</p>" +
            "<h4>典型参数</h4>" +
            "<table>" +
            "<tr><td>条间距</td><td>25μm - 200μm</td></tr>" +
            "<tr><td>有效面积</td><td>最高 100mm × 100mm</td></tr>" +
            "<tr><td>厚度</td><td>300μm - 1000μm</td></tr>" +
            "<tr><td>漏电流</td><td>&lt; 10nA/cm²</td></tr>" +
            "</table>"
        }
      },

      {
        name: "硅像素探测器",
        link: "product-detail.html?id=sipixel",
        brief: {
          img: "images/prod/sipixel.png",
          desc: "高空间分辨率，粒子径迹探测"
        }
      },

      {
        name: "高纯锗(HPGe)探测器",
        link: "product-detail.html?id=hpge",
        brief: {
          img: "images/prod/hpge.png",
          desc: "超高能量分辨率"
        }
      },

      {
        name: "CZT探测器",
        link: "product-detail.html?id=czt",
        brief: {
          img: "images/prod/czt.png",
          desc: "室温半导体探测器"
        }
      },

      {
        name: "硅漂移探测器(SDD)",
        link: "product-detail.html?id=sdd",
        brief: {
          img: "images/prod/sdd.png",
          desc: "高计数率，X射线探测"
        }
      },

      {
        name: "金刚石探测器",
        link: "product-detail.html?id=diamond",
        brief: {
          img: "images/prod/diamond.png",
          desc: "耐高温、抗辐照"
        }
      }

    ]
  },

  // ================================================================
  // 金刚石探测器
  // ================================================================
  {
    id: "cat3",
    name: "金刚石探测器",
    en: "Diamond Detectors",
    desc: "金刚石探测器具有耐高温、抗辐照、响应速度快等优异特性。",
    items: [

      {
        name: "单晶金刚石探测器",
        link: "product-detail.html?id=scdiamond",
        brief: {
          img: "images/prod/scdiamond.png",
          desc: "超高辐射硬度，快时间响应"
        }
      },

      {
        name: "多晶金刚石探测器",
        link: "product-detail.html?id=pcdiamond",
        brief: {
          img: "images/prod/pcdiamond.png",
          desc: "大面积探测，成本优势"
        }
      },

      {
        name: "金刚石束流监测器",
        link: "product-detail.html?id=beammon",
        brief: {
          img: "images/prod/beammon.png",
          desc: "粒子加速器束流监测"
        }
      },

      {
        name: "金刚石α探测器",
        link: "product-detail.html?id=diaalpha",
        brief: {
          img: "images/prod/diaalpha.png",
          desc: "α粒子探测"
        }
      }

    ]
  },

  // ================================================================
  // 气体探测器
  // ================================================================
  {
    id: "cat4",
    name: "气体探测器",
    en: "Gas Detectors",
    desc: "气体探测器是中子探测和辐射监测的重要探测器类型。",
    items: [

      {
        name: "He3中子正比计数管",
        link: "product-detail.html?id=he3",
        brief: {
          img: "images/prod/he3.png",
          desc: "高中子探测效率"
        }
      },

      {
        name: "BF3中子正比计数管",
        link: "product-detail.html?id=bf3",
        brief: {
          img: "images/prod/bf3.png",
          desc: "替代He3方案，经济实用"
        }
      },

      {
        name: "裂变室",
        link: "product-detail.html?id=fission",
        brief: {
          img: "images/prod/fission.png",
          desc: "耐高温、抗γ干扰"
        }
      },

      {
        name: "流气式正比计数器",
        link: "product-detail.html?id=gasflow",
        brief: {
          img: "images/prod/gasflow.png",
          desc: "α/β粒子测量"
        }
      },

      {
        name: "电离室",
        link: "product-detail.html?id=ionchamber",
        brief: {
          img: "images/prod/ionchamber.png",
          desc: "辐射剂量测量"
        }
      },

      {
        name: "G-M计数管",
        link: "product-detail.html?id=gm",
        brief: {
          img: "images/prod/gm.png",
          desc: "通用辐射探测"
        }
      }

    ]
  },

  // ================================================================
  // 电源/电子学
  // ================================================================
  {
    id: "cat5",
    name: "电源/电子学",
    en: "Power Supply & Electronics",
    desc: "核电子学设备是探测器信号读出和数据处理的核心。",
    items: [

      {
        name: "台式高压电源",
        link: "product-detail.html?id=hvps",
        brief: {
          img: "images/prod/hvps.png",
          desc: "ISEG、ORTEC品牌，多通道可选"
        }
      },

      {
        name: "机架式高压电源",
        link: "product-detail.html?id=rackhv",
        brief: {
          img: "images/prod/rackhv.png",
          desc: "EHR系列，高稳定性"
        }
      },

      {
        name: "电荷灵敏前置放大器",
        link: "product-detail.html?id=cspa",
        brief: {
          img: "images/prod/cspa.png",
          desc: "Cremat CR-110/CR-111系列"
        }
      },

      {
        name: "多道分析器(MCA)",
        link: "product-detail.html?id=mca",
        brief: {
          img: "images/prod/mca.png",
          desc: "16K道，USB接口"
        }
      },

      {
        name: "NIM机箱及插件",
        link: "product-detail.html?id=nim",
        brief: {
          img: "images/prod/nim.png",
          desc: "标准NIM核电子学模块"
        }
      },

      {
        name: "数字化谱仪 Pixie",
        link: "product-detail.html?id=pixie",
        brief: {
          img: "images/prod/pixie.png",
          desc: "XIA品牌，多通道"
        }
      },

      {
        name: "穆斯堡尔谱仪",
        link: "product-detail.html?id=mossbauer",
        brief: {
          img: "images/prod/mossbauer.png",
          desc: "Wissel-instruments品牌"
        }
      },

      {
        name: "成形放大器",
        link: "product-detail.html?id=shaper",
        brief: {
          img: "images/prod/shaper.png",
          desc: "核脉冲信号成形"
        }
      }

    ]
  },

  // ================================================================
  // 辐射检测设备
  // ================================================================
  {
    id: "cat6",
    name: "辐射检测设备",
    en: "Radiation Detection Equipment",
    desc: "辐射检测设备广泛应用于核设施、环保、疾控、海关等领域。",
    items: [

      {
        name: "环境辐射监测系统",
        link: "product-detail.html?id=erms",
        brief: {
          img: "images/prod/erms.png",
          desc: "γ剂量率、气溶胶监测"
        }
      },

      {
        name: "便携式辐射巡测仪",
        link: "product-detail.html?id=surveymeter",
        brief: {
          img: "images/prod/surveymeter.png",
          desc: "多种型号，各场景适用"
        }
      },

      {
        name: "热释光剂量读出系统",
        link: "product-detail.html?id=tld",
        brief: {
          img: "images/prod/tld.png",
          desc: "个人剂量监测"
        }
      },

      {
        name: "α/β表面污染测量仪",
        link: "product-detail.html?id=abmeter",
        brief: {
          img: "images/prod/abmeter.png",
          desc: "表面污染测量"
        }
      },

      {
        name: "便携式核素识别仪",
        link: "product-detail.html?id=isotopeid",
        brief: {
          img: "images/prod/isotopeid.png",
          desc: "现场γ能谱核素识别"
        }
      },

      {
        name: "个人剂量报警仪",
        link: "product-detail.html?id=dosimeter",
        brief: {
          img: "images/prod/dosimeter.png",
          desc: "实时γ/X射线监测"
        }
      },

      {
        name: "通道式辐射监测系统",
        link: "product-detail.html?id=portal",
        brief: {
          img: "images/prod/portal.png",
          desc: "移动物体放射性安检"
        }
      },

      {
        name: "UltraLo-1800 α计数器",
        link: "product-detail.html?id=ultralo",
        brief: {
          img: "images/prod/ultralo.png",
          desc: "超低本底α粒子计数"
        }
      }

    ]
  },

  // ================================================================
  // 加速器相关设备
  // ================================================================
  {
    id: "cat7",
    name: "加速器相关设备",
    en: "Accelerator Related Equipment",
    desc: "为粒子加速器和离子注入设备提供相关探测器、离子源和束流诊断设备。",
    items: [

      {
        name: "ECR离子源",
        link: "product-detail.html?id=ecr",
        brief: {
          img: "images/prod/ecr.png",
          desc: "Pantechnik品牌"
        }
      },

      {
        name: "束流监测器",
        link: "product-detail.html?id=beammon2",
        brief: {
          img: "images/prod/beammon2.png",
          desc: "法拉第杯、束流剖面"
        }
      },

      {
        name: "多球中子谱仪",
        link: "product-detail.html?id=bonner",
        brief: {
          img: "images/prod/bonner.png",
          desc: "中子能谱测量"
        }
      },

      {
        name: "束流诊断系统",
        link: "product-detail.html?id=beamdiag",
        brief: {
          img: "images/prod/beamdiag.png",
          desc: "束流位置、强度监测"
        }
      }

    ]
  },

  // ================================================================
  // 测试与服务
  // ================================================================
  {
    id: "cat8",
    name: "测试与服务",
    en: "Testing & Services",
    desc: "提供专业的探测器性能测试、核电子学系统集成和仪器校准服务。",
    items: [

      {
        name: "探测器性能测试",
        link: "product-detail.html?id=testdet",
        brief: {
          img: "images/prod/testdet.png",
          desc: "能量分辨率、效率测试"
        }
      },

      {
        name: "系统集成服务",
        link: "product-detail.html?id=integration",
        brief: {
          img: "images/prod/integration.png",
          desc: "探测系统设计搭建联调"
        }
      },

      {
        name: "仪器校准服务",
        link: "product-detail.html?id=calibration",
        brief: {
          img: "images/prod/calibration.png",
          desc: "能量刻度、效率刻度"
        }
      },

      {
        name: "维修维护服务",
        link: "product-detail.html?id=repair",
        brief: {
          img: "images/prod/repair.png",
          desc: "探测器及电子学维修"
        }
      }

    ]
  },

  // ================================================================
  // 光学探测器
  // ================================================================
  {
    id: "cat9",
    name: "光学探测器",
    en: "Optical Detectors",
    desc: "光学探测器是闪烁体探测器和光学测量系统的核心器件。",
    items: [

      {
        name: "光电倍增管(PMT)",
        link: "product-detail.html?id=pmt",
        brief: {
          img: "images/prod/pmt.png",
          desc: "Photonis品牌，多型号可选"
        },
        detail: {
          images: [
            "images/prod/pmt.png",
            "images/prod/sipm.png",
            "images/prod/mcp.png",
            "images/prod/apd.png"
          ],
          text:
            "<p>光电倍增管(PMT)是应用最广泛的高灵敏度光探测器，由法国Photonis公司生产。" +
            "PMT利用光电效应和二次电子倍增原理，将微弱光信号转换为可测量的电信号，增益可达10⁶-10⁸。</p>" +
            "<p>广泛应用于闪烁体探测器读出、核物理实验、医疗成像(PET/SPECT)、石油测井、高能物理实验等领域。" +
            "Photonis提供多种尺寸和结构的PMT，包括端窗型、侧窗型、多阳极型等。</p>" +
            "<h4>典型产品系列</h4>" +
            "<table>" +
            "<tr><td>XP系列</td><td>经典端窗PMT，直径19-130mm</td></tr>" +
            "<tr><td>XP20系列</td><td>快时间响应PMT</td></tr>" +
            "<tr><td>Planacon系列</td><td>MCP-PMT，超快时间响应</td></tr>" +
            "</table>"
        }
      },

      {
        name: "硅光电倍增管(SiPM)",
        link: "product-detail.html?id=sipm",
        brief: {
          img: "images/prod/sipm.png",
          desc: "高增益，紧凑型"
        }
      },

      {
        name: "微通道板(MCP)",
        link: "product-detail.html?id=mcp",
        brief: {
          img: "images/prod/mcp.png",
          desc: "高增益快速响应"
        }
      },

      {
        name: "光电二极管",
        link: "product-detail.html?id=photodiode",
        brief: {
          img: "images/prod/photodiode.png",
          desc: "大动态范围"
        }
      },

      {
        name: "APD雪崩光电二极管",
        link: "product-detail.html?id=apd",
        brief: {
          img: "images/prod/apd.png",
          desc: "高灵敏度"
        }
      },

      {
        name: "电子倍增器(CEM/SCEM)",
        link: "product-detail.html?id=cem",
        brief: {
          img: "images/prod/cem.png",
          desc: "单通道电子放大器"
        }
      }

    ]
  }

];
