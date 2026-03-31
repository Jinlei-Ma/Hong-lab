export type NavigationItem = {
  href: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
};

export type LinkItem = {
  labelZh: string;
  labelEn: string;
  href?: string;
  noteZh?: string;
  noteEn?: string;
};

export type HomeHero = {
  imageUrl: string;
  imageAltZh: string;
  imageAltEn: string;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  ctaLabelZh: string;
  ctaLabelEn: string;
  ctaHref: string;
};

export type StatItem = {
  labelZh: string;
  labelEn: string;
  valueZh: string;
  valueEn: string;
};

export type HighlightItem = {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
};

export type PageHero = {
  titleZh: string;
  titleEn: string;
  eyebrowZh: string;
  eyebrowEn: string;
  summaryZh: string;
  summaryEn: string;
};

export type SectionCopy = {
  titleZh: string;
  titleEn: string;
  paragraphsZh: string[];
  paragraphsEn: string[];
};

export type InfoItem = {
  labelZh: string;
  labelEn: string;
  valueZh: string;
  valueEn: string;
};

export type ResearchItem = {
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  keywordsZh: string[];
  keywordsEn: string[];
};

export type TeachingBlock = {
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  itemsZh: string[];
  itemsEn: string[];
};

export type Member = {
  nameZh: string;
  nameEn: string;
  roleZh: string;
  roleEn: string;
  photoUrl?: string;
  schoolZh?: string;
  schoolEn?: string;
  academyZh?: string;
  academyEn?: string;
  affiliationZh: string;
  affiliationEn?: string;
  educationZh?: string;
  educationEn?: string;
  focusZh?: string;
  focusEn?: string;
  email?: string;
  destinationZh?: string;
  destinationEn?: string;
};

export type TeamGroup = {
  id: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  members: Member[];
};

export type NewsItem = {
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  date: string;
  categoryZh: string;
  categoryEn: string;
  imageUrl?: string;
};

export type AdmissionRequirement = {
  labelZh: string;
  labelEn: string;
  valueZh: string;
  valueEn: string;
};

export type AdmissionSection = {
  degreeZh: string;
  degreeEn: string;
  summaryZh: string;
  summaryEn: string;
  requirements: AdmissionRequirement[];
};

export type FacultyListItem = {
  nameZh: string;
  titleZh: string;
  summaryZh: string;
  href?: string;
};

export type ResearchTextSection = {
  titleZh: string;
  itemsZh: string[];
};

const splitLines = (value: string) =>
  value
    .trim()
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

const surnameInitialMap: Record<string, string> = {
  洪: "H",
  陶: "T",
  王: "W",
  唐: "T",
  刘: "L",
  曹: "C",
  国: "G",
  李: "L",
  宋: "S",
  赵: "Z",
  江: "J",
  马: "M",
  吴: "W",
  邵: "S",
  张: "Z",
  任: "R",
  郭: "G",
  付: "F",
  董: "D",
  向: "X",
  仇: "Q",
  丁: "D",
  代: "D",
  赖: "L",
  孙: "S"
};

const extractYear = (value?: string) => {
  const match = value?.match(/(20\d{2})/);
  return match ? Number(match[1]) : 9999;
};

const sortMembersByGrade = <T extends Member>(members: T[]) =>
  [...members].sort((a, b) => {
    const yearDiff = extractYear(a.educationZh) - extractYear(b.educationZh);
    if (yearDiff !== 0) return yearDiff;
    const aInitial = surnameInitialMap[a.nameZh[0]] ?? a.nameZh[0];
    const bInitial = surnameInitialMap[b.nameZh[0]] ?? b.nameZh[0];
    if (aInitial !== bInitial) return aInitial.localeCompare(bInitial);
    return a.nameZh.localeCompare(b.nameZh, "zh-CN");
  });

export const siteConfig = {
  brand: {
    primaryNameZh: "HONG Lab",
    primaryNameEn: "HONG Lab",
    schoolNameZh: "",
    schoolNameEn: "School Name TBD",
    academyNameZh: "",
    academyNameEn: "Department Name TBD",
    taglineZh: "科研、教学、团队与合作交流",
    taglineEn: "Research, teaching, team, and collaboration."
  },
  locale: {
    default: "zh-CN",
    available: ["zh-CN", "en-US"],
    englishEnabled: false
  },
  contact: {
    email: "lab@example.edu.cn",
    phone: "+86 000-0000-0000",
    addressZh: "重庆大学管理科学与房地产学院",
    addressEn: "Office address placeholder. Replace later with building, room, and postal code.",
    officeHoursZh: "周一至周五 09:00 - 17:30",
    officeHoursEn: "Mon-Fri 09:00 - 17:30"
  },
  updatedAtZh: "2026 年 3 月 20 日",
  updatedAtEn: "March 20, 2026"
} as const;

export const navigationItems: NavigationItem[] = [
  {
    href: "/",
    titleZh: "首页",
    titleEn: "Home",
    descriptionZh: "轮播封面、简介、快捷入口与重点通知。",
    descriptionEn: "Hero carousel, intro, quick links, and featured notices."
  },
  {
    href: "/profile",
    titleZh: "教师主页",
    titleEn: "Profile",
    descriptionZh: "教师简介、教育背景、工作履历与学术链接。",
    descriptionEn: "Faculty profile, education, experience, and academic links."
  },
  {
    href: "/research",
    titleZh: "科学研究",
    titleEn: "Research",
    descriptionZh: "研究方向、论文成果、科研项目与著作占位。",
    descriptionEn: "Research themes, publications, projects, and books."
  },
  {
    href: "/teaching",
    titleZh: "教学研究",
    titleEn: "Teaching",
    descriptionZh: "教学资源、授课信息与教学成果。",
    descriptionEn: "Teaching resources, course information, and achievements."
  },
  {
    href: "/team",
    titleZh: "研究团队",
    titleEn: "Team",
    descriptionZh: "教师、学生、毕业生与合作教师分组展示。",
    descriptionEn: "Faculty, students, alumni, and collaborators."
  },
  {
    href: "/news",
    titleZh: "研究动态",
    titleEn: "News",
    descriptionZh: "最新新闻、团队荣誉与会议动态。",
    descriptionEn: "Latest news, honors, and conference updates."
  },
  {
    href: "/admissions",
    titleZh: "招生信息",
    titleEn: "Admissions",
    descriptionZh: "博士、硕士招生条件与说明占位。",
    descriptionEn: "Doctoral and master's admissions information."
  },
  {
    href: "/collaboration",
    titleZh: "合作交流",
    titleEn: "Collaboration",
    descriptionZh: "合作方向、对外交流与联系表单。",
    descriptionEn: "Collaboration areas, outreach, and contact form."
  }
];

export const homeContent = {
  hero: {
    imageUrl: "/media/home-hero.jpg",
    imageAltZh: "课题组合照",
    imageAltEn: "Research group photo",
    titleZh: "HONG Lab",
    titleEn: "HONG Lab",
    summaryZh: "科研、教学、团队与合作交流",
    summaryEn: "Research, teaching, team, and collaboration.",
    ctaLabelZh: "了解更多",
    ctaLabelEn: "Learn More",
    ctaHref: "#home-intro"
  } satisfies HomeHero,
  intro: {
    eyebrowZh: "课题组概览",
    eyebrowEn: "Overview",
    titleZh: "课题组简介",
    titleEn: "About the Group",
    paragraphsZh: [
      "这里建议概括课题组的研究定位、主要研究问题、学术特色以及与所在学院或学科方向的关系，作为访客进入网站后看到的第一段正式介绍。",
      "后续可以继续补充团队建设、学生培养、合作交流与代表性成果等信息，使首页在整体风格上更接近高校课题组官网。"
    ],
    paragraphsEn: [
      "Use this area for a concise overview of the group’s mission, focus, and academic identity.",
      "You can later enrich it with team photos, activity photos, update time, and contact details."
    ],
    featureImageUrl: "/media/home-hero.jpg"
  },
  highlights: [
    {
      titleZh: "研究方向",
      titleEn: "Research Themes",
      descriptionZh: "可概括课题组的主要研究方向、理论方法与应用场景。",
      descriptionEn: "Summarize the group’s major research themes, methods, and application areas."
    },
    {
      titleZh: "人才培养",
      titleEn: "Student Training",
      descriptionZh: "可展示博士、硕士与访问学生的培养方向、课程与成果。",
      descriptionEn: "Show doctoral, master’s, and visiting student training, courses, and outcomes."
    },
    {
      titleZh: "合作交流",
      titleEn: "Collaboration",
      descriptionZh: "可用于发布合作方向、访问邀请、联合培养与对外联系渠道。",
      descriptionEn: "Use this area for partnership topics, visits, joint programs, and contact channels."
    }
  ] satisfies HighlightItem[],
  stats: [
    {
      labelZh: "研究方向",
      labelEn: "Themes",
      valueZh: "3 个重点方向",
      valueEn: "3 key themes"
    },
    {
      labelZh: "团队规模",
      labelEn: "Team Size",
      valueZh: "教师与学生待补充",
      valueEn: "Team size TBD"
    },
    {
      labelZh: "最近更新",
      labelEn: "Last Updated",
      valueZh: siteConfig.updatedAtZh,
      valueEn: siteConfig.updatedAtEn
    }
  ] satisfies StatItem[],
  ctaCards: [
    {
      titleZh: "招生信息",
      titleEn: "Admissions",
      descriptionZh: "集中展示博士与硕士招生要求、申请方式、人数和年份等信息。",
      descriptionEn: "Show doctoral and master’s admissions requirements, process, quota, and year.",
      href: "/admissions",
      actionZh: "查看招生页",
      actionEn: "Open admissions"
    },
    {
      titleZh: "合作交流",
      titleEn: "Collaboration",
      descriptionZh: "用于介绍合作方向、交流方式与课题组对外联系渠道。",
      descriptionEn: "Introduce collaboration areas, communication channels, and outreach information.",
      href: "/collaboration",
      actionZh: "发起联系",
      actionEn: "Start a conversation"
    }
  ],
  featuredNewsTitleZh: "最新动态预览",
  featuredNewsTitleEn: "News Preview"
};

export const profileContent = {
  nameZh: "洪竞科",
  nameEn: "Jingke Hong",
  photoUrl: "/media/profile-photo.jpg",
  basicInfo: [
    { labelZh: "职称", labelEn: "Title", valueZh: "教授、硕士生导师、博士生导师", valueEn: "Professor, Master's Supervisor, PhD Supervisor" },
    { labelZh: "职务", labelEn: "Position", valueZh: "副院长", valueEn: "Vice Dean" },
    { labelZh: "在职信息", labelEn: "Status", valueZh: "在职", valueEn: "Active" },
    { labelZh: "所在单位", labelEn: "Affiliation", valueZh: "管理科学与房地产学院", valueEn: "School of Management Science and Real Estate" },
    { labelZh: "办公地点", labelEn: "Office", valueZh: "管理科学与房地产学院318", valueEn: "MSRE 318" },
    { labelZh: "电子邮件", labelEn: "Email", valueZh: "hongjingke@cqu.edu.cn", valueEn: "hongjingke@cqu.edu.cn" },
    { labelZh: "邮政编码", labelEn: "Postal Code", valueZh: "400044", valueEn: "400044" },
    { labelZh: "通讯地址", labelEn: "Address", valueZh: "重庆市沙坪坝区沙正街174号", valueEn: "174 Shazheng Street, Shapingba District, Chongqing" }
  ] satisfies InfoItem[],
  sections: [
    {
      titleZh: "个人简介",
      titleEn: "Biography",
      paragraphsZh: [
        "洪竞科，现任重庆大学管理科学与房地产学院副院长、教授、博士生导师，兼任《第五次气候变化国家评估报告》第四章首席作者、《中国碳中和技术发展路线图》编写委员会专家。",
        "长期致力于气候变化特别是极端天气的评估、适应和政策研究，构建了适用于高不确定性情景的气候变化风险评估、因果推断以及协同治理体系，为政府实现气候精准治理提供了新的理论范式和技术手段。",
        "代表性学术成果包括：",
        "（1）执笔的气候安全相关资政报告获中央领导批示3篇，部长批示5篇，中办、国办采纳2篇。",
        "（2）主持国家重点研发计划课题、国家自然科学基金面上项目（2项）、青年项目及重庆市社科重大项目。",
        "（3）以第一/通讯作者在风险管理顶刊 Risk Analysis（ABS4，2篇）、EJOR（ABS4）、TRD、TRE、Nature 子刊 Humanities & Social Sciences Communications、Scientific Data、Cell 子刊 Cell Reports Sustainability 以及《系统工程理论与实践》《管理评论》等期刊发表论文90余篇，Web of Science 引用量6000余次，H 指数36。",
        "（4）入选重庆市青年拔尖人才、“重庆市学术技术带头人”后备人选，连续5年入选爱思唯尔中国高被引学者、斯坦福大学全球前2%顶尖科学家榜单。",
        "（5）获国家级教学成果二等奖1项、省级教学成果特等奖2项；作为第一完成人获住建部华夏建设科学技术奖二等奖、辽宁省建设科学技术奖二等奖、香港环保建筑大奖特等奖（全球仅12项）等教学科研奖项。"
      ],
      paragraphsEn: [
        "Use this area for a concise faculty biography, research agenda, representative contributions, and institutional affiliation.",
        "An English version can be filled in later without changing the layout."
      ]
    },
    {
      titleZh: "教育经历",
      titleEn: "Education",
      paragraphsZh: [
        "2012.09-2016.09   香港理工大学，哲学博士学位（建筑与房地产学系）。",
        "2010.09-2012.07   哈尔滨工业大学管理学院，管理学硕士学位（管理科学与工程专业）。",
        "2006.09-2010.07   重庆大学建设管理与房地产学院，工学学士学位（工程管理专业）。"
      ],
      paragraphsEn: [
        "List bachelor's, master's, doctoral, and visiting experiences in reverse chronological order."
      ]
    },
    {
      titleZh: "工作经历",
      titleEn: "Experience",
      paragraphsZh: [
        "2021年至今，重庆大学管理科学与房地产学院，教授、博导。",
        "2017年至2021年，重庆大学管理科学与房地产学院，研究员、博导。",
        "2017年至2017年，中国绿色建筑与节能香港委员会，秘书长。",
        "2016年至2017年，香港理工大学建筑与房地产学系，博士后。",
        "2014年至2015年，美国加州大学伯克利分校，访问学者。",
        "2013年至2014年，CIB香港理工大学学生分会，主席。"
      ],
      paragraphsEn: [
        "Reserve this section for appointments, visiting positions, and professional services."
      ]
    },
    {
      titleZh: "研究领域",
      titleEn: "Research & Honors",
      paragraphsZh: [
        "基础设施安全与气候韧性。",
        "基础设施驱动区域可持续发展。",
        "基础设施数字运维。"
      ],
      paragraphsEn: [
        "You can split this area into research interests, courses taught, service, and honors."
      ]
    },
    {
      titleZh: "兼任职务",
      titleEn: "Service",
      paragraphsZh: [
        "2021~至今，科技部《碳中和技术发展路线图》编写专家。",
        "2021~2021，十四五国家重点研发计划重点专项乡村产业共性关键技术研发与集成应用指南编制组专家。",
        "2017~至今，工程管理学报专栏副主编。",
        "2022~至今，中国城市经济学会城市可持续建设与管理专业委员会委员。",
        "2022~至今，中国建筑学会工程诊治与运维分会理事。",
        "2021~至今，中国工程建设标准化协会智慧建筑与智慧城市分会理事。"
      ],
      paragraphsEn: [
        "Professional service and social appointments."
      ]
    },
    {
      titleZh: "开设课程",
      titleEn: "Courses",
      paragraphsZh: [
        "建设法规。",
        "智能运维与管理。",
        "绿色建筑与可持续建设。",
        "新生研讨课。"
      ],
      paragraphsEn: [
        "Courses taught."
      ]
    },
    {
      titleZh: "获奖情况",
      titleEn: "Honors",
      paragraphsZh: [
        "2025 获重庆市教育委员会“重庆市教学成果奖特等奖”。",
        "2025 获重庆大学“新时代青年先锋”。",
        "2025 爱思唯尔中国高被引学者（其余入选年份：2024、2023、2022、2021）。",
        "2025 斯坦福大学全球前2%科学家榜单（其余入选年份：2023、2022）。",
        "2024 获重庆市教育委员会“‘重庆市学术技术带头人’后备人选”。",
        "2024 获重庆大学“教书育人奖（最受学生欢迎的老师）”。",
        "2023 获住建部“华夏建设科学技术奖二等奖”。",
        "2023 获教育部“国家级教学成果奖二等奖”。",
        "2022 中国管理现代化研究会工程管理专业委员会优秀青年教师。",
        "2022 获重庆市人民政府“重庆市高校思政教学名师和团队”。",
        "2022 获重庆市教育委员会“重庆市教学成果奖特等奖”。",
        "2020 获重庆市人民政府“重庆市发展研究奖三等奖”。",
        "2020 获重庆大学“优秀青年教师”。",
        "2019 重庆大学教书育人奖。",
        "2018 获重庆市委组织部“青年拔尖人才”。",
        "2016 香港环保建筑大奖。"
      ],
      paragraphsEn: [
        "Honors and awards."
      ]
    }
  ] satisfies SectionCopy[],
  relatedLinks: [] satisfies LinkItem[]
};

export const profileActionLinks = [
  {
    labelZh: "同专业博导",
    href: "/profile/phd-supervisors",
    tone: "primary"
  },
  {
    labelZh: "同专业硕导",
    href: "/profile/master-supervisors",
    tone: "secondary"
  },
  {
    labelZh: "学院主页",
    href: "http://www.msre.cqu.edu.cn/index.htm",
    tone: "secondary"
  }
] as const;

export const phdSupervisors: FacultyListItem[] = [
  {
    nameZh: "洪竞科",
    titleZh: "教授、博士生导师、硕士生导师",
    summaryZh: "工程造价系教师，研究方向涵盖基础设施安全与气候韧性、基础设施驱动区域可持续发展、基础设施数字运维。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/hjk.htm"
  },
  {
    nameZh: "毛超",
    titleZh: "教授、博士生导师",
    summaryZh: "工程造价系教师，导师类别以学院官网公布信息为准，详情与研究方向请见官方教师主页。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/mc.htm"
  },
  {
    nameZh: "叶堃晖",
    titleZh: "教授、博士生导师、硕士生导师",
    summaryZh: "工程造价系教师，导师类别以学院官网公布信息为准，详情与研究方向请见官方教师主页。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/ykh.htm"
  },
  {
    nameZh: "叶贵",
    titleZh: "教授、博士生导师",
    summaryZh: "工程造价系教师，导师类别以学院官网公布信息为准，详情与研究方向请见官方教师主页。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/yg.htm"
  },
  {
    nameZh: "周佳",
    titleZh: "教授、博士生导师",
    summaryZh: "工程造价系教师，导师类别以学院官网公布信息为准，详情与研究方向请见官方教师主页。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/zj.htm"
  },
  {
    nameZh: "温沛涵",
    titleZh: "副教授、博士生导师",
    summaryZh: "工程造价系教师，导师类别以学院官网公布信息为准，详情与研究方向请见官方教师主页。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/wph.htm"
  }
];

export const masterSupervisors: FacultyListItem[] = [
  {
    nameZh: "洪竞科",
    titleZh: "教授、硕士生导师、博士生导师",
    summaryZh: "工程造价系教师，研究方向涵盖基础设施安全与气候韧性、基础设施驱动区域可持续发展、基础设施数字运维。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/hjk.htm"
  },
  {
    nameZh: "叶堃晖",
    titleZh: "教授、硕士生导师、博士生导师",
    summaryZh: "工程造价系教师，导师类别以学院官网公布信息为准，详情与研究方向请见官方教师主页。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/ykh.htm"
  },
  {
    nameZh: "曹轲",
    titleZh: "副教授、硕士生导师",
    summaryZh: "工程造价系教师，导师类别以学院官网公布信息为准，详情与研究方向请见官方教师主页。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/ck.htm"
  },
  {
    nameZh: "傅晏",
    titleZh: "副教授、硕士生导师",
    summaryZh: "工程造价系教师，导师类别以学院官网公布信息为准，详情与研究方向请见官方教师主页。",
    href: "http://www.msre.cqu.edu.cn/szdw/jslb/fy.htm"
  }
];

export const researchPage = {
  hero: {
    titleZh: "科学研究",
    titleEn: "Research",
    eyebrowZh: "Research",
    eyebrowEn: "Research themes and outputs",
    summaryZh: "本页用于展示课题组的学术成果、著作成果和科研项目。",
    summaryEn: "This page covers research themes, publications, working papers, books, and projects."
  } satisfies PageHero,
  relatedLinks: [
    { labelZh: "教师主页", labelEn: "Faculty Page", href: "https://www.msre.cqu.edu.cn/szdw/jslb/hjk.htm", noteZh: "重庆大学教师主页", noteEn: "Official faculty page" },
    { labelZh: "学院主页", labelEn: "School", href: "http://www.msre.cqu.edu.cn/index.htm", noteZh: "管理科学与房地产学院官网", noteEn: "Official school website" }
  ] satisfies LinkItem[]
};

export const researchSections: ResearchTextSection[] = [
  {
    titleZh: "中文论文",
    itemsZh: splitLines(`
[1]洪竞科,唐琢,刘炳胜.新型基础设施对共同富裕的影响机制研究[J].工程管理科技前沿,2025,44(04):19-27.
[2]洪竞科,赖恬心,刘炳胜.数字经济能否跨越“伪包容性增长”陷阱？——来自中国的经验证据[J].管理学刊,2025,38(03):85-102.DOI:10.19808/j.cnki.41-1408/F.2025.0028.
[3]王先柱,邵金,洪竞科,等.融合多源异构信息和数据特征的住房价格短期预测方法[J].系统工程理论与实践,2025,45(11):3795-3812.
[4]李张苗,洪竞科,赵青悦.全过程视角下BIM技术在新型建筑工业化中的创新应用研究[J].项目管理技术,2025,23(01):119-126.
[5]洪竞科,王露,刘炳胜.新型基础设施投资的经济效应——基于动态随机一般均衡框架的分析[J].系统工程理论与实践,2025,45(10):3186-3204.
[6]洪竞科,唐琢,刘炳胜.新型基础设施存量规模测算与实证研究[J].管理评论,2024,36(12):72-83.DOI:10.14120/j.cnki.cn11-5057/f.2024.12.003.
[7]李张苗,王锐,洪竞科,等.工业固废预制结构构件碳减排潜力研究[J].建筑节能(中英文),2024,52(12):165-170.
[8]李张苗,洪竞科,孙占琦,等.绿色建筑视角下施工阶段BIM技术应用价值主体要素分析[J].住宅与房地产,2024,(35):78-82.
[9]唐靖媛,曹威,洪竞科.地铁域地下车站应急疏散影响因素研究[J].地下空间与工程学报,2024,20(05):1738-1750.DOI:10.20174/j.JUSE.2024.05.30.
[10]罗丹,张沂珊,洪竞科.基于在线地图路径循迹的山地城市绿色开放空间步行可达性衰减[J].风景园林,2024,31(07):100-107.
[12]洪竞科,蒋静雅,刘炳胜.区域平衡性干预政策对共同富裕影响机制研究——兼论要素投入与效率的“得”与“失”[J].财经研究,2023,49(12):48-61.（CSSCI检索）
[13]洪竞科,黄河,王先柱.经济结构转型的碳减排效应[J].资源科学,2023,45(11):2103-2116.（CSSCI/CSCD检索）
[14]洪竞科,郑琪,刘炳胜.国家可持续发展实验区能否促进社会公平？——基于多时点双重差分模型的政策效应评估[J].财经问题研究,2023,(11):15-30.（CSSCI检索）
[15]洪竞科,刘禹彤,陈雨欣.中国省域建筑业碳锁定效应时空演进[J].资源科学,2022,44(07):1388-1404.（CSSCI/CSCD检索）
[16]洪竞科,李沅潮,郭偲悦.全产业链视角下建筑碳排放路径模拟:基于RICE-LEAP模型[J].中国环境科学,2022,42(09):4389-4398.（CSCD检索）
[17]洪竞科,苏妍,傅晏.城市更新项目对周边住宅价格的影响研究——以深圳市为例[J].现代城市研究,2022(02):112-117.（北大核心期刊）
[18]洪竞科,王小苑.新冠肺炎疫情冲击下中国经济波动与减排效益研究——基于可计算一般均衡模型[J].工业技术经济,2022,41(01):132-141.（北大核心期刊）
[19]洪竞科,李沅潮,蔡伟光.多情景视角下的中国碳达峰路径模拟——基于RICE-LEAP模型[J].资源科学,2021,43(04):639-651.（CSSCI/CSCD检索）
[20]洪竞科,张天翼.时空分异视角下工业污染影响机制研究[J].工业技术经济,2021,40(05):89-98.（北大核心期刊）
[21]洪竞科，苏妍。城市更新项目对周边住宅价格的影响研究——以深圳市为例，现代城市研究，已接收待刊发（CSSCI来源期刊扩展版）。
[22]洪竞科,黄志金,姚佳黛,王晨宇.长江经济带建筑业集聚及其空间溢出效应研究[J].建筑经济,2020,41(12):21-25（北大核心期刊）.
[23]刘贵文,王倩,汪熹子,洪竞科,庄勇,彭博.基于事故树分析法的城中村改造中土地权属变更风险研究——以T市城中村改造为例[J].中国土地科学,2020,34(07):52-60.
[24]刘贵文,谢芳芸,洪竞科,陈春江.基于人口经济数据分析我国城市收缩现状[J].经济地理,2019,39(07):50-57.
`)
  },
  {
    titleZh: "英文论文",
    itemsZh: splitLines(`
Tao X, Li J, Hong J. Regional variations in green transformation of European ports: A robust quantile stochastic frontier analysis[J]. Transportation Research Part E: Logistics and Transportation Review, 2026, 207:104602.
Chen Y, Yi W, Hong J, et al. Vulnerability and pathways of global renewable energy transition under climate exposure[J]. Environmental Impact Assessment Review, 2026, 117:108174.
Zheng Y, Guan D, Hong J, et al. Asymmetrical resource behaviors shape key leverage points for sustainability synergies and trade-offs across China’s food supply chain[J]. Cell Reports Sustainability, 2026.
Liu B, Wu H, Tang J, et al. Multidimensional Flood Risk Analysis of High-Speed Rail Systems Under Future Climate Change[J]. Risk Analysis, 2026, 46(2):e70184.
Zheng Q, Hong J, Liu B, et al. Fostering equity in carbon emission mitigation through national sustainable development pilot zones: Evidence from China[J]. Habitat International, 2026, 168:103698.
Tao X, Hong J. Super-efficiency in Piecewise Cobb-Douglas Technology with Flexible Endogenous Direction[J]. European Journal of Operational Research, 2025.
Liu B, Wei R, Tang J, et al. Human-Centric Disaster Resilience: Uncovering Social Inequity in Climate Change[J]. Risk Analysis, 2025.
Wang M, Shao J, Zhang S, et al. Deep learning-based long-medium prediction of Chinese new energy vehicle sales and air quality towards 2035[J]. Transportation Research Part D: Transport and Environment, 2025, 148:105002.
Huang H, Ma J, Liu H, et al. Peaking in pieces? Decoding the carbon peak dynamics of Chinese cities[J]. Sustainable Production and Consumption, 2025.
Tang M, Hong J, Shan Y, et al. Urban metabolism and emergy of China's cities[J]. Habitat International, 2025, 163:103494.
Wang M, Zhang S, Shao J, et al. Spatiotemporal evolution and regional heterogeneity of carbon emissions in municipal-level building sector in China[C]//Building Simulation. Beijing: Tsinghua University Press, 2025, 18(8):2093-2114.
Shao J, Hong J, Wang X. News sentiment and housing market dynamics: Evidence from wavelet analysis[J]. Habitat International, 2025, 162:103441.
Guo C, Tang J, Hong J, et al. Resilience assessment of urban bus-metro system to floods under future climate change[J]. Transportation Research Part D: Transport and Environment, 2025:104925.
Chen Y, Guo X, Yi W, et al. Synergistic pollution and carbon reductions from the China National sustainable communities pilot policy[J]. Energy, 2025, 321:135100.
Shao J, Hong J, Wang M, et al. New energy vehicles sales forecasting using machine learning: The role of media sentiment[J]. Computers & Industrial Engineering, 2025, 201:110928.
Hong J, Wu H, Wu H, et al. How technology convergence drives the invention of carbon-neutral building technologies? Investigation through the lens of binary innovation theory[J]. Building and Environment, 2025, 271:112623.
Shao J, Yu L, Zeng N, et al. A multi-scale analysis method with multi-feature selection for house prices forecasting[J]. Applied Soft Computing, 2025, 171:112779.
Tang M, Liu G, Hong J, et al. City-level emergy metabolism accounts for China’s 281 cities from 2000 to 2020[J]. Scientific Data, 2025, 12(1):55.
Zheng S, Chen Y, Hong J, et al. Global climate policy effectiveness analysis: Evidence from 49 countries, 1951–2018[J]. Journal of Comparative Policy Analysis: Research and Practice, 2025, 27(1):1-38.
Wang D Y, Li Y, Hong J. Tax or subsidy? The impact assessment of environmental policies on carbon allocation and emissions abatement of prefabricated construction supply chain[J]. Journal of Environmental Management, 2025, 373:123451.
Shao J, Yu L, Hong J, et al. Forecasting house price index with social media sentiment: A decomposition-ensemble approach[J]. Journal of Forecasting, 2025, 44(1):216-241.
Peng Y, Tao X, Hong J, et al. Understanding the optimal strategy of carbon labelled product advertising delivery: A dynamic differential equation analysis[J]. Journal of Retailing and Consumer Services, 2024, 81:103950.
Peng Y, Hong J, Lu Q. Future development of digital built asset management[M]//Digital Built Asset Management. Edward Elgar Publishing, 2024:304-340.
Cui W, Liu G, Hong J, et al. A novel hybrid method integrating multi-objective optimization with emergy analysis for building renewal strategy[J]. Energy Conversion and Management, 2024, 315:118792.
Zou X, Tan S, Hong J, et al. Understanding the metabolism and scaling law in construction projects: Evidence from China[J]. Environmental Impact Assessment Review, 2024, 108:107572.
Hong J, Huang H, Wang X, et al. Structural effects of provincial digital economy on carbon emissions within China[J]. Science of the Total Environment, 2024, 934:173140.
Wu X, Teng Y, Shen Q. Measuring and reducing the embodied carbon in high-rise buildings through innovative modular construction[C]//International Conference on Construction Engineering and Project Management. 2024:41-48.
Tao X, Zhao J, Hong J, et al. Pathway towards carbon peaking cities in the Chinese transport sector[J]. Transport Policy, 2024, 153:39-53.
Gu J, Li Y, Hong J, et al. Carbon emissions cap or energy technology subsidies? Exploring the carbon reduction policy based on a multi-technology sectoral DSGE model[J]. Humanities and Social Sciences Communications, 2024, 11(1):1-17.
Chen Y, Hong J, Wen Q, et al. The Janus-faced role of renewable energy development in global carbon reduction under renewable energy policies[J]. Earth's Future, 2024, 12(6):e2024EF004535.
Wen Q, Shao S, Wang Y, et al. Does creation-oriented culture promote ESG activities? Evidence from the Chinese market[J]. Global Environmental Change, 2024, 86:102852.
Hong J, Wang L, Gu J, et al. Green recovery in the wake of public health emergencies: Policy instruments and their effects in China[J]. Journal of Environmental Management, 2024, 354:120408.
Fang Z, Jiang F, Yan J, et al. A novel lightweight CF decision-making approach for highway reconstruction and operation[J]. Journal of Cleaner Production, 2024, 434:140127.
Chen Y, Hong J, Tang M, Zheng Y, Qiu M, Ni D. Causal complexity of environmental pollution in China: a province-level fuzzy-set qualitative comparative analysis[J]. Environmental Science and Pollution Research, 2023, 30:15599-15615.
Chen Y, Zhao Z, Yi W, Hong J, Zhang B. Has China achieved synergistic reduction of carbon emissions and air pollution? Evidence from 283 Chinese cities[J]. Environmental Impact Assessment Review, 2023, 103.
Fang Z, Yan J, Lu Q, et al. A systematic literature review of carbon footprint decision-making approaches for infrastructure and building projects[J]. Applied Energy, 2023, 335.
Peng X, Chen H, Long R, et al. Determinants of the embodied CO2 transfers through electricity trade within China[J]. Journal of Environmental Management, 2023, 344.
Peng X, Chen H, Zhong H, et al. Water-saving co-benefits of CO2 reduction in China's electricity sector[J]. iScience, 2023, 26.
Shao J, Hong J, Wang X, Yan X. The relationship between social media sentiment and house prices in China[J]. Finance Research Letters, 2023, 57.
Yuxi Z, Hong J, Wen Q, Yang C, Danfei N. Managing water-land-food nexus towards resource efficiency improvement[J]. Journal of Environmental Management, 2023, 325.
Zheng Y, Hong J, Shuai C, Ye J, Zhang S. Heterogeneous interactions in the water-land-food nexus in shaping resource efficiency[J]. Sustainable Production and Consumption, 2024, 44:166-166.
Zhu C, Guo G, Su S, Hong J, Li X. Multiple accounting of carbon emission responsibility in the construction sector under different principles[J]. Renewable & Sustainable Energy Reviews, 2023, 186.
Zuo J, Zheng W, Hong J. Interactions between centrality and commuting costs in a mountainous city[J]. Land Use Policy, 2024, 137.
Wu Y, Huang H, Hong J, Wang X, Wu Y, Wu Y. Transfer patterns and driving factors of China’s energy use in trade[J]. Energy Reports, 2022, 8:10963-10975.
Cheng J, Mao C, Huang Z, Hong J, Liu G. Implementation strategies for sustainable renewal at the neighborhood level with the goal of reducing carbon emission[J]. Sustainable Cities and Society, 2022, 85.
Chen Y, Hong J, Tang M, Zheng Y, Qiu M, Ni D. Causal complexity of environmental pollution in China[J]. Environmental Science and Pollution Research, 2022.
Luo L, Wu X, Hong J, Wu G. Fuzzy Cognitive Map-Enabled Approach for Investigating the Relationship between Influencing Factors and Prefabricated Building Cost[J]. Journal of Construction Engineering and Management, 2022, 148(9).
Yang W, Li X, Chen C, Hong J. Characterizing residential load patterns on multi-time scales utilizing LSTM autoencoder and electricity consumption data[J]. Sustainable Cities and Society, 2022, 84.
Yan J, Lu Q, Tang J, Chen L, Hong J, Broyd T. Digital Tools for Revealing and Reducing Carbon Footprint in Infrastructure, Building, and City Scopes[J]. Buildings, 2022, 12(8).
Yuan Z, Fang Y, Hong J, Zhang Q, Zhang Z, Ni G. Coupling Relationship between Capabilities and Benefits of Lean Construction for Precast Buildings[J]. Journal of Construction Engineering and Management, 2022, 148(5).
Chen Y, Han Q, Liu G, Wu Y, Li K, Hong J. Determining Critical Success Factors of Urban Renewal Projects[J]. Journal of Urban Planning and Development, 2022, 148(1).
Hong J, Wang C, Chang-Richards A, Zhang J, Qiping G S, Qiao B. A spatiotemporal analysis of energy use pathways in the construction industry: A study of China[J]. Energy, 2022, 239.
Huang H, Hong J, Wang X, Chang-Richards A, Zhang J, Qiao B. A spatiotemporal analysis of the driving forces behind the energy interactions of the Chinese economy[J]. Energy, 2022, 239.
Tang M, Hong J, Wang X, He R. Sustainability accounting of neighborhood metabolism and its applications for urban renewal based on emergy analysis and SBM-DEA[J]. Journal of Environmental Management, 2020, 275.
Tang M, Hong J, Guo S, Liu G, Shen GQ. A bibliometric review of urban energy metabolism[J]. Journal of Cleaner Production, 2021, 279.
Wu G, Hong J, Tian Z, Zeng Z, Sun C. Assessing the total factor performance of wastewater treatment in China[J]. Science of the Total Environment, 2021, 758.
Zheng Y, Hong J, Xiao C, Li Z. Unfolding the synergy and interaction of water-land-food nexus for sustainable resource management[J]. Science of the Total Environment, Accepted and in press.
Hong J, Gu J, He R, Wang X, Shen Q. Unfolding the spatial spillover effects of urbanization on interregional energy connectivity[J]. Energy, 2020, 196.
Huang L, Zheng W, Hong J, Liu Y, Liu G. Paths and strategies for sustainable urban renewal at the neighbourhood level[J]. Sustainable Cities and Society, 2020, 55.
Jin R, Hong J, Zuo J. Environmental performance of off-site constructed facilities[J]. Energy and Buildings, 2020, 207.
Liu G, Chen R, Xu P, Fu Y, Mao C, Hong J. Real-time carbon emission monitoring in prefabricated construction[J]. Automation in Construction, 2020, 110.
Tang M, Hong J, Wang X, He R. Sustainability accounting of neighborhood metabolism and its applications for urban renewal based on emergy analysis and SBM-DEA[J]. Journal of Environmental Management, 2020, 275.
Wang X, Huang H, Hong J, Ni D, He R. A spatiotemporal investigation of energy-driven factors in China[J]. Energy, 2020, 207.
Wen Q, Chen Y, Hong J, Chen Y, Ni D, Shen Q. Spillover effect of technological innovation on CO2 emissions in China's construction industry[J]. Building and Environment, 2020, 171.
Wen Q, Hong J, Liu G, Xu P, Tang M, Li Z. Regional efficiency disparities in China's construction sector[J]. Applied Energy, 2020, 257.
Yuan Z, Zhang Z, Ni G, Chen C, Wang W, Hong J. Cause Analysis of Hindering On-Site Lean Construction for Prefabricated Buildings[J]. Advances in Civil Engineering, 2020, 2020.
Wen Quan, Gu Jianping, Hong Jingke, Shen Qiping, Li Zhongfu, Yuan Man. Unfolding interregional energy flow structure of China's construction sector based on province-level data[J]. Journal of Environmental Management, 253, 109693.
Hong Jingke, Zhong Xiaoyang, Guo Shan, Liu Guiwen, Shen Geoffrey Qiping, Yu Tao. Water-energy nexus and its efficiency in China’s construction industry[J]. Sustainable Cities and Society, 2019, 48:101557.
Hong Jingke, Gu Jianping, Liang Xin, Liu Guiwen, Shen Qiping, Tang Miaohan. Spatiotemporal investigation of energy network patterns of agglomeration economies in China[J]. Energy, 2019, 187:115998.
Guo Shan, Hu Yunhao, Zheng Shupeng, Jingke Hong, Wu Xiaofang, Miaohan Tang. Embodied Energy Use in the Global Construction Industry[J]. Applied Energy, 256, 113838.
Hong Jingke, Tang Miaohan, Wu Zezhou, Mian Zhuang, Shen Qiping. The evolution of patterns within embodied energy flows in the Chinese economy[J]. Sustainable Cities and Society, 2019, 47:101500.
Hong Jingke, Gu Jianping, Liang Xin, Liu Guiwen, Shen Geoffrey Qiping. Characterizing embodied energy accounting with a multi-dimensional framework[J]. Journal of Cleaner Production, 2019, 215:154-164.
Wu Ge, Hong Jingke, Li Ding, Zezhou Wu. Efficiency assessment of pollutants discharged in urban wastewater treatment[J]. Journal of Cleaner Production, 2019, 233:1437-1450.
Tang Miaohan, Hong Jingke, Liu Guiwen, Shen Qiping. Exploring energy flows embodied in China’s economy[J]. Energy, 2019, 170:1191-1201.
Li Fan, Hong Jingke. A spatial correlation analysis of business operating status after an earthquake[J]. International Journal of Disaster Risk Reduction, 2019, 36:101108.
Liangxin, Yu Tao, Hong Jingke, Shen Qiping. Making incentive policies more effective[J]. Energy Policy, 2019, 126:177-189.
Chen Jindao, Shen Liyin, Shi Qian, Hong Jingke, Ochoad Jorge. The effect of production structure on the total CO2 emission intensity in the Chinese construction industry[J]. Journal of Cleaner Production, 2019, 213:1087-1095.
Liu Guiwen, Gu Tingyan, Xu Pengpeng, Hong Jingke, Shrestha Aheem, Martek Igor. A production line-based carbon emission assessment model for prefabricated components in China[J]. Journal of Cleaner Production, 2019, 209:30-39.
Hong Jingke, Shen Qiping, Li Zhengdao, Liu Guiwen, Wu Zezhou, Zhong Xiaoyang. An integrated framework for embodied energy quantification of buildings in China[J]. Resources, Conservation and Recycling, 2018, 138:183-193.
Hong Jingke, Shen Qiping, Li Zhengdao, Zhang Boyu, Zhang Wanqiu. Cost Benefit Analysis of Prefabricated Construction: A Case Study in China[J]. Journal of Cleaner Production, 2018, 172:649-660.
Han Zhu, Jingke Hong, Geoffrey Qiping Shen, Chao Mao, Hejia Zhang, Zhengrong Li. The exploration of the life-cycle energy saving potential for using prefabrication in residential buildings in China[J]. Energy and Buildings, 2018.
Clyde Zhengdao Li, Fan Xue, Xiao Li, Jingke Hong, Geoffrey Qiping Shen. An Internet of Things-enabled BIM platform for on-site assembly services in prefabricated construction[J]. Automation in Construction, 2018, 89:146-161.
Hong Jingke, Clyde Li Zhengdao, Shen Qiping, Xue Fan, Sun Bingxia, Zheng Wei. An Overview of the Driving Forces behind Energy Demand in China's Construction Industry[J]. Renewable and Sustainable Energy Reviews, 2017, 73:85-94.
Hong Jingke, Shen Qiping, Zhang Wanqiu, Feng Yong. A multi-regional based hybrid method for assessing life cycle energy use of buildings[J]. Journal of Cleaner Production, 2017, 148:760-772.
Clyde Zhengdao Li, Jingke Hong, Cheng Fan, Xiaoxiao Xu, Geoffrey Qiping Shen. Schedule delay analysis of prefabricated housing production[J]. Journal of Cleaner Production, 2017, 195:1533-1545.
Zheng Wei, Shen Qiping, Wang Hao, Hong Jingke, Zhengdao Li. Decision support for sustainable urban renewal[J]. Land Use Policy, 2017, 69:361-371.
Zheng Wei, Shen Qiping, Wang Hao, Hong Jingke. Neighbourhood Sustainability in Urban Renewal[J]. Environment and Planning B, 2017, 44:903-924.
Hong Jingke, Shen Qiping, Guo Shan. Energy use embodied in China’s construction industry[J]. Renewable and Sustainable Energy Reviews, 2016, 53:1303-1312.
Hong Jingke, Shen Qiping, Mao Chao, Li Zhengdao, Li Kaijian. Life-cycle energy analysis of prefabricated components in buildings[J]. Journal of Cleaner Production, 2016, 112:2198-2207.
Hong Jingke, Shen Qiping, Xue Fan. A multi-regional structural path analysis of the energy supply chain in China's construction industry[J]. Energy Policy, 2016, 92:56-68.
Hong Jingke, Shen Qiping, Peng Yi, Feng Yong, Mao Chao. Uncertainty Analysis for Measuring Greenhouse Gas Emissions in the Building Construction Phase[J]. Journal of Cleaner Production, 2016, 129:183-195.
Clyde Zhengdao Li, Jingke Hong, Fan Xue, Geoffrey Qiping Shen, Xiaoxiao Xu, Margaret Kayan Mok. Schedule risks in prefabrication housing production in Hong Kong[J]. Journal of Cleaner Production, 2016, 134:482-494.
Clyde Zhengdao Li, Jingke Hong, Fan Xue, Geoffrey Qiping Shen, Xiaoxiao Xu. SWOT analysis and IoT-enabled strategies for prefabricated housing production in Hong Kong[J]. Habitat International, 2016, 57:74-87.
Hong Jingke, Shen Qiping, Feng Yong, Lau Sau-Tao, Mao Chao. Greenhouse gas emissions during the construction phase of a building[J]. Journal of Cleaner Production, 2015, 103:249-259.
Zheng Helen Wei, Shen Qiping, Wang Hao, Hong Jingke. Simulating land use change in urban renewal areas[J]. Habitat International, 2015, 46:23-34.
`)
  },
  {
    titleZh: "著作成果",
    itemsZh: [
      "中文著作：张士汉，温全，洪竞科等，《绿色低碳技术：“双碳”目标的科技支撑》，人民邮电出版社，2025。",
      "中文著作：洪竞科等，《建筑业物化能耗多尺度评估与时空效应分析》，科学出版社，2023。",
      "中文著作：李政道，洪竞科等，《装配式建筑数字化管理与实践》，中国建筑工业出版社，2023。",
      "中文著作：洪竞科等，《工程项目环境管理》，中国建筑工业出版社，2022。",
      "英文著作：[1] Hong Jingke, Geoffrey Qiping Shen, Tang Miaohan (2018). “Embodied Carbon in Buildings”, Springer Nature.",
      "英文著作：[2] Geoffrey Qiping Shen, Shengwei Wang, Jingke Hong (2014). \"Hong Kong (China) – Enhancing Energy Efficiency in Commercial Buildings\".",
      "英文著作：[3] Geoffrey Qiping Shen and Jingke Hong (2014). \"Hong Kong (China) - R&D funding in the construction industry\"."
    ]
  },
  {
    titleZh: "科研项目",
    itemsZh: [
      "[1] 主持人，国家自然科学基金面上项目，建设工程项目资源代谢多重复杂性的形成机理、测度模式与作用机制研究，在研。",
      "[2] 主持人，国家自然科学基金青年项目，建设项目物化能耗区域间作用机制与差异化测度模型研究，在研。",
      "[3] 主持人，重庆市青年拔尖人才计划，在研。",
      "[4] 主持人，重庆市自科基金面上项目，成渝城市群生态系统协同耦合机理与演化动力机制研究，在研。",
      "[5] 主持人，重庆人人力资源与社会保障局留学创新人才计划，区域视角下建设项目物化能耗评估模型及智能优化平台研究，在研。",
      "[6] 主持人，重庆市社科规划培育类项目，建筑业能耗传导路径与作用机理研究：基于“需求-供给”双视角的四维核算模型，结题。",
      "[7] 主持人，重庆大学“百人计划”，2017年，在研。",
      "[8] 第二主研人，科技部国家重点研发计划（子课题），国内外工业化建筑标准体系与产业链研究，2016/07-2019/06，在研。",
      "[9] 第二主研人，科技部国家重点研发计划（子课题），基于BIM的预制装配建筑体系应用技术，2016/07-2019/06，在研。",
      "[10] 第三主研人，香港优配研究金，多区域的中国建筑行业能耗评估，2017/01-2019/12，在研。",
      "[11] 参研人，国家自然科学基金面上项目，商业建筑绿色翻新改造协同设计过程及智能化网络平台的研究，2013/01-2016/12，已结题。",
      "[12] 参研人，香港创新科技基金课题，基于RFID的香港预制房屋建设信息平台的核心技术研发，2014/01-2016/12，已结题。"
    ]
  }
];

export const teachingPage = {
  hero: {
    titleZh: "教学研究",
    titleEn: "Teaching",
    eyebrowZh: "Teaching",
    eyebrowEn: "Courses, resources, and educational outcomes",
    summaryZh: "本页用于展示教学资源、授课信息和教学成果。",
    summaryEn: "This page keeps space for teaching resources, course information, and teaching outcomes."
  } satisfies PageHero,
  relatedLinks: [
    { labelZh: "教师主页", labelEn: "Faculty Page", href: "https://www.msre.cqu.edu.cn/szdw/jslb/hjk.htm", noteZh: "重庆大学教师主页", noteEn: "Official faculty page" },
    { labelZh: "学院主页", labelEn: "School", href: "http://www.msre.cqu.edu.cn/index.htm", noteZh: "管理科学与房地产学院官网", noteEn: "Official school website" }
  ] satisfies LinkItem[]
};

export const teachingBlocks: TeachingBlock[] = [
  {
    titleZh: "教学资源",
    titleEn: "Teaching Resources",
    summaryZh: "暂无内容",
    summaryEn: "Reserve this block for syllabi, slides, assignments, case studies, and reading lists.",
    itemsZh: ["暂无内容"],
    itemsEn: ["Syllabus placeholder", "Slides and materials placeholder", "Course case placeholder"]
  },
  {
    titleZh: "授课信息",
    titleEn: "Courses",
    summaryZh: "授课信息",
    summaryEn: "Later, organize course information by semester, title, audience, and language.",
    itemsZh: ["建设法规。", "智能运维与管理。", "绿色建筑与可持续建设。", "新生研讨课。"],
    itemsEn: ["Course title TBD", "Semester TBD", "Audience TBD"]
  },
  {
    titleZh: "教学成果",
    titleEn: "Teaching Achievements",
    summaryZh: "教学成果",
    summaryEn: "Use this for textbooks, teaching grants, awards, student work, or evaluation highlights.",
    itemsZh: [
      "2025 获重庆市教育委员会“重庆市教学成果奖特等奖”。",
      "2024 获重庆大学“教书育人奖（最受学生欢迎的老师）”。",
      "2023 获教育部“国家级教学成果奖二等奖”。",
      "2022 中国管理现代化研究会工程管理专业委员会优秀青年教师。",
      "2022 获重庆市人民政府“重庆市高校思政教学名师和团队”。",
      "2022 获重庆市教育委员会“重庆市教学成果奖特等奖”。",
      "2020 获重庆大学“优秀青年教师”。",
      "2019 重庆大学教书育人奖。"
    ],
    itemsEn: ["Teaching achievement placeholder", "Educational reform project placeholder", "Student work placeholder"]
  }
];

export const teamPage = {
  hero: {
    titleZh: "团队成员",
    titleEn: "Team",
    eyebrowZh: "Team",
    eyebrowEn: "Faculty, students, and collaborators",
    summaryZh: "本页按教师团队、学生团队和合作老师组织，其中学生团队细分为博士生、硕士生、访问学生和毕业生。",
    summaryEn: "This page groups faculty, students, alumni, and collaborators with room for research interests and destinations."
  } satisfies PageHero
};

export const facultyTeam: TeamGroup = {
  id: "faculty",
  titleZh: "教师团队",
  titleEn: "Faculty",
  descriptionZh: "教师成员按职称、研究方向和联系方式展示。",
  descriptionEn: "Faculty members are presented with title, focus, and contact info.",
  members: [
    {
      nameZh: "洪竞科",
      nameEn: "Jingke Hong",
      roleZh: "教师团队",
      roleEn: "Faculty",
      photoUrl: "/media/team/teachers/洪竞科.jpg",
      schoolZh: "重庆大学",
      schoolEn: "Chongqing University",
      academyZh: "管理科学与房地产学院",
      academyEn: "School of Management Science and Real Estate",
      affiliationZh: "管理科学与房地产学院",
      affiliationEn: "School of Management Science and Real Estate",
      educationZh: "博士生导师，硕士生导师",
      educationEn: "PhD Supervisor, Master's Supervisor",
      focusZh: "基础设施安全与气候韧性；基础设施驱动区域可持续发展；基础设施数字运维",
      focusEn: "Infrastructure resilience; regional sustainability; digital O&M",
      email: "hongjingke@cqu.edu.cn"
    },
    {
      nameZh: "刘元月",
      nameEn: "Yuanyue Liu",
      roleZh: "教师团队",
      roleEn: "Faculty",
      photoUrl: "/media/team/teachers/刘元月.jpg",
      schoolZh: "重庆大学",
      academyZh: "管理科学与房地产学院",
      affiliationZh: "管理科学与房地产学院",
      affiliationEn: "School of Management Science and Real Estate",
      educationZh: "助理研究员、硕士生导师",
      focusZh: "宏观经济；气候金融；资产定价；生产-金融网络以及资产价格泡沫等",
      email: "liuyuanyue@cqu.edu.cn"
    },
    {
      nameZh: "唐靖媛",
      nameEn: "Jingyuan Tang",
      roleZh: "教师团队",
      roleEn: "Faculty",
      photoUrl: "/media/team/teachers/唐靖媛.jpg",
      schoolZh: "重庆大学",
      academyZh: "管理科学与房地产学院",
      affiliationZh: "管理科学与房地产学院",
      affiliationEn: "School of Management Science and Real Estate",
      educationZh: "助理研究员、硕士生导师",
      focusZh: "数字孪生与基础设施诊断；建设风险管理；建筑机器人与自动化；物联网与动作传感",
      email: "jtangap@cqu.edu.cn"
    },
    {
      nameZh: "陶向阳",
      nameEn: "Xiangyang Tao",
      roleZh: "教师团队",
      roleEn: "Faculty",
      photoUrl: "/media/team/teachers/陶向阳.jpg",
      schoolZh: "重庆大学",
      academyZh: "管理科学与房地产学院",
      affiliationZh: "管理科学与房地产学院",
      affiliationEn: "School of Management Science and Real Estate",
      educationZh: "助理研究员、硕士生导师",
      focusZh: "数据科学与机器学习；智能评价与决策；激励理论与生产力分析",
      email: "taoxiangyang@cqu.edu.cn"
    },
    {
      nameZh: "王丹艺",
      nameEn: "Danyi Wang",
      roleZh: "教师团队",
      roleEn: "Faculty",
      photoUrl: "/media/team/teachers/王丹艺.jpg",
      schoolZh: "重庆大学",
      academyZh: "管理科学与房地产学院",
      affiliationZh: "管理科学与房地产学院",
      affiliationEn: "School of Management Science and Real Estate",
      educationZh: "助理研究员",
      focusZh: "装配式建筑供应链管理；供应链气候韧性",
      email: "wangdanyi@cqu.edu.cn"
    }
  ]
};

export const studentTeamGroups: TeamGroup[] = [
  {
    id: "phd-students",
    titleZh: "博士生",
    titleEn: "PhD Students",
    descriptionZh: "博士研究生成员。",
    descriptionEn: "Doctoral students.",
    members: sortMembersByGrade([
      {
        nameZh: "孙伟彤",
        nameEn: "Weitong Sun",
        roleZh: "博士研究生",
        roleEn: "PhD Student",
        photoUrl: "/media/team/phd/孙伟彤.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2021级",
        educationZh: "博士研究生，2021级",
        focusZh: "新基建与区域可持续发展",
        email: "1685956555@qq.com"
      },
      {
        nameZh: "王露",
        nameEn: "Lu Wang",
        roleZh: "博士研究生",
        roleEn: "PhD Student",
        photoUrl: "/media/team/phd/王露.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2021级",
        educationZh: "博士研究生，2021级",
        focusZh: "能源经济",
        email: "wdhahhh226@outlook.com"
      },
      {
        nameZh: "邵金",
        nameEn: "Jin Shao",
        roleZh: "博士研究生",
        roleEn: "PhD Student",
        photoUrl: "/media/team/phd/邵金.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2022级",
        educationZh: "博士研究生，2022级",
        focusZh: "大数据挖掘；经济预测",
        email: "jinshao712@gmail.com"
      },
      {
        nameZh: "赵青悦",
        nameEn: "Qingyue Zhao",
        roleZh: "博士研究生",
        roleEn: "PhD Student",
        photoUrl: "/media/team/phd/赵青悦.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2023级",
        educationZh: "博士研究生，2023级",
        focusZh: "矿产资源可持续评估",
        email: "zqy1293@outlook.com"
      },
      {
        nameZh: "吴晓庆",
        nameEn: "Xiaoqing Wu",
        roleZh: "博士研究生",
        roleEn: "PhD Student",
        photoUrl: "/media/team/phd/吴晓庆.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "博士研究生，2024级",
        focusZh: "气候适应经济学",
        email: "20240301011@stu.cu.edu.cn"
      },
      {
        nameZh: "代忠龙",
        nameEn: "Zhonglong Dai",
        roleZh: "博士研究生",
        roleEn: "PhD Student",
        photoUrl: "/media/team/phd/代忠龙.JPG",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "博士研究生，2025级",
        focusZh: "气候减缓、建筑运营碳估算与低碳技术策略探索",
        email: "zhonglongdai@stu.cqu.edu.cn"
      },
      {
        nameZh: "赖恬心",
        nameEn: "Tianxin Lai",
        roleZh: "博士研究生",
        roleEn: "PhD Student",
        photoUrl: "/media/team/phd/赖恬心.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "博士研究生，2024级",
        focusZh: "企业气候风险管理",
        email: "tianxin.lai@cqu.edu.cn"
      }
    ])
  },
  {
    id: "master-students",
    titleZh: "硕士生",
    titleEn: "Master Students",
    descriptionZh: "硕士研究生成员。",
    descriptionEn: "Master students.",
    members: sortMembersByGrade([
      {
        nameZh: "郭兴欣",
        nameEn: "Xingxin Guo",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/郭兴欣.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2022级",
        educationZh: "硕士研究生，2022级",
        focusZh: "可持续发展与减污降碳",
        email: "gxx917@qq.com"
      },
      {
        nameZh: "曹馨悦",
        nameEn: "Xinyue Cao",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/曹馨悦.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2023级",
        educationZh: "硕士研究生，2023级",
        focusZh: "消费者行为",
        email: "caoxinyue999@gmail.com"
      },
      {
        nameZh: "王奕斐",
        nameEn: "Yifei Wang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/王奕斐.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2023级",
        educationZh: "硕士研究生，2023级",
        focusZh: "洪涝灾害经济损失评估",
        email: "wyf200001@163.com"
      },
      {
        nameZh: "张诗琦",
        nameEn: "Shiqi Zhang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/张诗琦.JPG",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2023级",
        educationZh: "硕士研究生，2023级",
        focusZh: "城市智能运维",
        email: "15807198671@163.com"
      },
      {
        nameZh: "董文龙",
        nameEn: "Wenlong Dong",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/董文龙.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "用于灾害应急方案的检索增强生成技术",
        email: "1410888400@qq.com"
      },
      {
        nameZh: "张城燃",
        nameEn: "Chengran Zhang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/张城燃.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "供应链博弈与韧性提升",
        email: "18786828577@163.com"
      },
      {
        nameZh: "刘晨宇",
        nameEn: "Chenyu Liu",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/刘晨宇.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "数据包络分析",
        email: "13365369209@163.com"
      },
      {
        nameZh: "李佳福",
        nameEn: "Jiafu Li",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/李佳福.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "生产效率分析",
        email: "jiafulicqu@163.com"
      },
      {
        nameZh: "任悦",
        nameEn: "Yue Ren",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/任悦.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "DEA与产能利用率",
        email: "renyue111@163.com"
      },
      {
        nameZh: "宋海",
        nameEn: "Hai Song",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/宋海.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "灾害风险分担",
        email: "sh07151093@163.com"
      },
      {
        nameZh: "吴思彤",
        nameEn: "Sitong Wu",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/吴思彤.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "新型基础设施优化",
        email: "stong_wu@126.com"
      },
      {
        nameZh: "吴炯蕾",
        nameEn: "Jionglei Wu",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/吴炯蕾.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "供应链韧性",
        email: "1297476114@qq.com"
      },
      {
        nameZh: "王玫苹",
        nameEn: "Meiping Wang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/王玫苹.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "低碳转型路径",
        email: "meiping1008@163.com"
      },
      {
        nameZh: "向宸龙",
        nameEn: "Chenlong Xiang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/向宸龙.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2024级",
        educationZh: "硕士研究生，2024级",
        focusZh: "供应链韧性博弈决策",
        email: "2248940352@qq.com"
      },
      {
        nameZh: "付芸浠",
        nameEn: "Yunxi Fu",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/付芸浠.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "食品供应链",
        email: "2748832850@qq.com"
      },
      {
        nameZh: "国斌宇",
        nameEn: "Binyu Guo",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/国斌宇.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "气候风险与供应链",
        email: "18753598969@163.com"
      },
      {
        nameZh: "江海璐",
        nameEn: "Hailu Jiang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/江海璐.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "基础设施韧性",
        email: "2428966921@qq.com"
      },
      {
        nameZh: "刘帅",
        nameEn: "Shuai Liu",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/刘帅.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "数据包络分析",
        email: "1006823569@qq.com"
      },
      {
        nameZh: "李宇祥",
        nameEn: "Yuxiang Li",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/李宇祥.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "企业数字化转型策略与绿色化响应",
        email: "lyx1174612010@163.com"
      },
      {
        nameZh: "李泽星",
        nameEn: "Zexing Li",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/李泽星.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2023级",
        educationZh: "硕士研究生，2023级",
        focusZh: "DEA",
        email: "leezexing@gmail.com"
      },
      {
        nameZh: "李茂林",
        nameEn: "Maolin Li",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/李茂林.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "网络DEA",
        email: "1141795989@qq.com"
      },
      {
        nameZh: "马晶晶",
        nameEn: "Jingjing Ma",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/马晶晶.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "电动汽车购买意愿",
        email: "865452246@qq.com"
      },
      {
        nameZh: "仇柯盛",
        nameEn: "Kesheng Qiu",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/仇柯盛.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "电动汽车充电桩选址优化",
        email: "2445929726@qq.com"
      },
      {
        nameZh: "王异",
        nameEn: "Yi Wang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/王异.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "港口适应性投资",
        email: "2338608682@qq.com"
      },
      {
        nameZh: "张娟",
        nameEn: "Juan Zhang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/张娟.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与工程",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "博弈论",
        email: "juanz010821@gmail.com"
      },
      {
        nameZh: "张文博",
        nameEn: "Wenbo Zhang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/张文博.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "食品供应链",
        email: "zhangwenbo2003@126.com"
      },
      {
        nameZh: "张雅萱",
        nameEn: "Yaxuan Zhang",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/张雅萱.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "管理科学与工程",
        email: "1061274336@qq.com"
      },
      {
        nameZh: "赵海涛",
        nameEn: "Haitao Zhao",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/赵海涛.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "气候转型风险与资本市场",
        email: "202503021002@stu.cqu.edu.cn"
      },
      {
        nameZh: "赵雨晴",
        nameEn: "Yuqing Zhao",
        roleZh: "硕士研究生",
        roleEn: "Master Student",
        photoUrl: "/media/team/master/赵雨晴.jpeg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2025级",
        educationZh: "硕士研究生，2025级",
        focusZh: "港口气候适应型投资",
        email: "zyuqing0525@163.com"
      }
    ])
  },
  {
    id: "visiting-students",
    titleZh: "访问学生",
    titleEn: "Visiting Students",
    descriptionZh: "访问学生成员。",
    descriptionEn: "Visiting students.",
    members: sortMembersByGrade([
      {
        nameZh: "吴恒亮",
        nameEn: "Hengliang Wu",
        roleZh: "访问学生",
        roleEn: "Visiting Student",
        photoUrl: "/media/team/visiting/吴恒亮.jpg",
        schoolZh: "天津大学",
        academyZh: "管理与经济学部",
        affiliationZh: "2023级",
        educationZh: "硕士研究生，2023级",
        focusZh: "气候变化、交通韧性、灾害风险",
        email: "hengliangwu1018@gmail.com"
      },
      {
        nameZh: "丁凯",
        nameEn: "Kai Ding",
        roleZh: "访问学生",
        roleEn: "Visiting Student",
        photoUrl: "/media/team/visiting/丁凯.jpeg",
        schoolZh: "安徽工业大学",
        academyZh: "能源与环境学院",
        affiliationZh: "2025级",
        educationZh: "博士研究生，2025级",
        focusZh: "城市气候适应管理",
        email: "dingkai0816@163.com"
      }
    ])
  },
  {
    id: "alumni",
    titleZh: "毕业生",
    titleEn: "Alumni",
    descriptionZh: "毕业生及去向信息。",
    descriptionEn: "Alumni and destinations.",
    members: sortMembersByGrade([
      {
        nameZh: "郭程晨",
        nameEn: "Chengchen Guo",
        roleZh: "毕业生",
        roleEn: "Alumnus",
        photoUrl: "/media/team/alumni/郭程晨.jpg",
        schoolZh: "重庆大学",
        academyZh: "管理科学与房地产学院",
        affiliationZh: "2022级",
        educationZh: "硕士研究生，2022级",
        focusZh: "上海交通大学",
        email: "1812664879@qq.com"
      }
    ])
  }
];

export const collaboratorTeam: TeamGroup = {
  id: "collaborators",
  titleZh: "合作老师",
  titleEn: "Collaborators",
  descriptionZh: "合作老师与外部合作伙伴。",
  descriptionEn: "Collaborating faculty and external partners.",
  members: [
    {
      nameZh: "合作老师 A",
      nameEn: "Collaborator A",
      roleZh: "合作教师",
      roleEn: "Collaborator",
      schoolZh: "合作单位待补充",
      schoolEn: "Partner Institution TBD",
      academyZh: "合作院系待补充",
      academyEn: "Partner Department TBD",
      affiliationZh: "合作单位待补充",
      affiliationEn: "Partner institution TBD",
      educationZh: "合作老师",
      educationEn: "Collaborator",
      focusZh: "研究方向待补充",
      focusEn: "Research interests TBD",
      email: "xxxxx"
    },
    {
      nameZh: "合作老师 B",
      nameEn: "Collaborator B",
      roleZh: "合作教师",
      roleEn: "Collaborator",
      schoolZh: "合作单位待补充",
      academyZh: "合作院系待补充",
      affiliationZh: "合作单位待补充",
      educationZh: "合作老师",
      focusZh: "研究方向待补充",
      email: "xxxxx"
    },
    {
      nameZh: "合作老师 C",
      nameEn: "Collaborator C",
      roleZh: "合作教师",
      roleEn: "Collaborator",
      schoolZh: "合作单位待补充",
      academyZh: "合作院系待补充",
      affiliationZh: "合作单位待补充",
      educationZh: "合作老师",
      focusZh: "研究方向待补充",
      email: "xxxxx"
    },
    {
      nameZh: "合作老师 D",
      nameEn: "Collaborator D",
      roleZh: "合作教师",
      roleEn: "Collaborator",
      schoolZh: "合作单位待补充",
      academyZh: "合作院系待补充",
      affiliationZh: "合作单位待补充",
      educationZh: "合作老师",
      focusZh: "研究方向待补充",
      email: "xxxxx"
    },
    {
      nameZh: "合作老师 E",
      nameEn: "Collaborator E",
      roleZh: "合作教师",
      roleEn: "Collaborator",
      schoolZh: "合作单位待补充",
      academyZh: "合作院系待补充",
      affiliationZh: "合作单位待补充",
      educationZh: "合作老师",
      focusZh: "研究方向待补充",
      email: "xxxxx"
    },
    {
      nameZh: "合作老师 F",
      nameEn: "Collaborator F",
      roleZh: "合作教师",
      roleEn: "Collaborator",
      schoolZh: "合作单位待补充",
      academyZh: "合作院系待补充",
      affiliationZh: "合作单位待补充",
      educationZh: "合作老师",
      focusZh: "研究方向待补充",
      email: "xxxxx"
    }
  ]
};

export const newsPage = {
  hero: {
    titleZh: "研究动态",
    titleEn: "News",
    eyebrowZh: "Latest News",
    eyebrowEn: "News, honors, and events",
    summaryZh: "本页用于发布课题组新闻、研究进展、获奖信息、会议活动与重要通知。",
    summaryEn: "This page uses a timeline-style news list that can later connect to full articles."
  } satisfies PageHero
};

export const newsItems: NewsItem[] = [
  {
    titleZh: "课题组举办年度学术研讨会",
    titleEn: "The group held its annual academic seminar.",
    summaryZh: "可在此发布课题组举办学术研讨会、读书会或年度总结活动的新闻内容，并补充现场照片与详细介绍。",
    summaryEn: "Use this item for seminars, reading groups, or annual academic meetings.",
    date: "2026-03-20",
    categoryZh: "学术活动",
    categoryEn: "Seminar",
    imageUrl: "/media/image5.png"
  },
  {
    titleZh: "团队论文发表于重要期刊 / 会议",
    titleEn: "A group paper was published in a leading venue.",
    summaryZh: "这里可用于发布代表性论文发表信息，包括论文题目、作者、期刊会议名称以及简要研究贡献。",
    summaryEn: "Use this item for publication announcements with title, authors, venue, and contribution summary.",
    date: "2026-03-19",
    categoryZh: "科研成果",
    categoryEn: "Publication",
    imageUrl: "/media/image1.png"
  },
  {
    titleZh: "课题组成员受邀参加国内外会议",
    titleEn: "Group members were invited to academic conferences.",
    summaryZh: "可在此介绍团队成员参加学术会议、作报告、主持分论坛或开展访问交流的情况。",
    summaryEn: "Use this item for conference talks, invited presentations, and academic visits.",
    date: "2026-03-18",
    categoryZh: "学术交流",
    categoryEn: "Conference",
    imageUrl: "/media/image6.png"
  },
  {
    titleZh: "招生与学生培养信息更新",
    titleEn: "Admissions and student training information updated.",
    summaryZh: "可在此发布新一年度招生通知、培养计划、学生去向、奖学金和竞赛成果等内容。",
    summaryEn: "Use this item for admissions updates, training plans, scholarships, or student achievements.",
    date: "2026-03-17",
    categoryZh: "招生培养",
    categoryEn: "Admissions",
    imageUrl: "/media/image4.png"
  }
];

export const admissionsPage = {
  hero: {
    titleZh: "招生信息",
    titleEn: "Admissions",
    eyebrowZh: "Admissions",
    eyebrowEn: "Doctoral and master's admissions structure",
    summaryZh: "本页用于发布博士与硕士招生要求、申请方式、培养方向、招生人数与年度说明。",
    summaryEn: "This page starts with doctoral and master's blocks and can later be updated year by year."
  } satisfies PageHero
};

export const admissionSections: AdmissionSection[] = [
  {
    degreeZh: "博士招生要求",
    degreeEn: "Doctoral Admissions",
    summaryZh: "适合放博士招生学院、专业、申请条件、名额和年度说明。",
    summaryEn: "Use this for doctoral school, program, requirements, quota, and annual notes.",
    requirements: [
      { labelZh: "招生学院", labelEn: "School", valueZh: "待补充", valueEn: "TBD" },
      { labelZh: "招生专业", labelEn: "Program", valueZh: "待补充", valueEn: "TBD" },
      { labelZh: "招生要求", labelEn: "Requirements", valueZh: "待补充正式要求", valueEn: "Formal requirements TBD" },
      { labelZh: "招生人数", labelEn: "Quota", valueZh: "待补充", valueEn: "TBD" },
      { labelZh: "招生年份", labelEn: "Year", valueZh: "待补充", valueEn: "TBD" }
    ]
  },
  {
    degreeZh: "硕士招生要求",
    degreeEn: "Master's Admissions",
    summaryZh: "适合放硕士招生学院、专业、申请条件、名额和年度说明。",
    summaryEn: "Use this for master's school, program, requirements, quota, and annual notes.",
    requirements: [
      { labelZh: "招生学院", labelEn: "School", valueZh: "待补充", valueEn: "TBD" },
      { labelZh: "招生专业", labelEn: "Program", valueZh: "待补充", valueEn: "TBD" },
      { labelZh: "招生要求", labelEn: "Requirements", valueZh: "待补充正式要求", valueEn: "Formal requirements TBD" },
      { labelZh: "招生人数", labelEn: "Quota", valueZh: "待补充", valueEn: "TBD" },
      { labelZh: "招生年份", labelEn: "Year", valueZh: "待补充", valueEn: "TBD" }
    ]
  }
];

export const collaborationContent = {
  hero: {
    titleZh: "合作交流",
    titleEn: "Collaboration",
    eyebrowZh: "Collaboration",
    eyebrowEn: "External collaboration and contact",
    summaryZh: "本页用于展示课题组的合作方向、交流方式、访问邀请与对外联系信息。",
    summaryEn: "This page presents long-term collaboration areas, open topics, and ways to connect."
  } satisfies PageHero,
  intro: {
    titleZh: "合作说明",
    titleEn: "About Collaboration",
    paragraphsZh: [
      "这里适合放一段简洁的合作说明，介绍课题组长期关注的研究问题、欢迎合作的对象类型以及希望共同推进的方向。",
      "后续可以继续补充联合课题、访问交流、企业合作、数据合作和人才培养等具体合作形式。"
    ],
    paragraphsEn: [
      "Use this area for a concise collaboration statement, target partners, and preferred research topics.",
      "Later, the contact form can be connected to email, a form service, or an institutional system."
    ]
  } satisfies SectionCopy,
  areas: [
    {
      titleZh: "学术合作",
      titleEn: "Academic Partnerships",
      descriptionZh: "联合课题、论文合作、学术访问、研讨会共建。",
      descriptionEn: "Joint projects, co-authored papers, academic visits, and co-hosted seminars."
    },
    {
      titleZh: "产业合作",
      titleEn: "Industry Collaboration",
      descriptionZh: "企业场景研究、数据合作、平台共建与咨询服务。",
      descriptionEn: "Industry scenarios, data collaboration, platform co-development, and consulting."
    },
    {
      titleZh: "人才培养",
      titleEn: "Talent Programs",
      descriptionZh: "联合指导学生、实习实践、暑期项目与联合培养。",
      descriptionEn: "Co-supervision, internships, summer programs, and joint training."
    }
  ],
  workflow: [
    "邮件沟通研究主题与合作意向",
    "明确合作目标、时间安排与分工",
    "根据需要对接正式联系人与单位流程"
  ],
  relatedLinks: [
    { labelZh: "合作提案模板", labelEn: "Proposal Template", noteZh: "后续可提供 PDF 或文档下载", noteEn: "Can later link to a PDF or document template" },
    { labelZh: "课题组简介", labelEn: "Lab Brochure", noteZh: "后续可提供简介页或宣传册", noteEn: "Can later link to an overview page or brochure" }
  ] satisfies LinkItem[]
};
