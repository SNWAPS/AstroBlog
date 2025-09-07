export default {
  // 网站标题
  Title: '𝑺𝑷𝑨𝑾𝑵𝑺的博客',
  // 网站地址
  Site: 'https://www.spawns.cn',
  // 网站副标题
  Subtitle: '不曾与你分享的时间,我在进步.',
  // 网站描述
  Description: 'SPAWNS的博客 专注于配电自动化与相关技术的理论分享，涵盖配电网一二次电气设备的系统运行原理以及维保方法等，并涉及IEC104协议、IEC101协议、GOOSE协议、Modbus协议、Linux、Docker等领域。',
  // 网站作者
  Author: '𝑺𝑷𝑨𝑾𝑵𝑺',
  // 作者头像
  Avatar: '/assets/images/tx.webp',
  // 网站座右铭
  Motto: '和你想的不太一样',
  // Cover 网站缩略图
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  // 网站侧边栏公告 (不填写即不开启)
  Tips: '<p>🎉欢迎光临 </p><p>这是应该是一个有营养的网站 我尽量不让它变得那么无聊💖</p>',
  // 首页打字机文案列表
  TypeWriteList: [
    '令我觉得奇怪的是 这些现有认知衍生出的对于事物的判断 而事实的出入往往乎我的现象',
    '我常常会有一种错觉 觉得自己好像是一个被困在笼子里的人 只能通过笼子的缝隙去窥探外面的世界',
    '但是这种虚幻萦绕在我的耳边 我不断提醒的着自己这些主观臆断的片面性',
    '可是这些念头所带来的与现实的割裂 就好像就是确切发生过  无时不刻的投射在我的行为作风上',
    '以至于我得常常遏制这些不着边际的揣度',
    '现实的复杂性的一方面在于每个人都个性鲜明 有的内敛有的外放 深度又是难以揣测',
    '但对于三观的上下限度往往通过简单的接触就可以有一个基本的了解',
    '人性是复杂且不可论证的 对于外在事物的冲击往往使人的心境瞬息万变',
    '我所营造的种种便捷以及对于口腹之欲的满足 这在我看来仅仅只是一种物化和消费',
    '而在你尚未启蒙，三观还没完全形成的阶段，只能对周遭事物进行模仿，',
    '现代信息化导致触手可得的铺面而来的意识形态的粗略解读让你知道了所谓"爱"的存在，',
    '伴随着青春期的到来',
    '促使着你遵循本性寻找着需要甚至渴望的"爱"',
    '所以当思想是别人的意见时，连情感也需他人的引述。',
    '当下软色情泛滥成灾，奶头乐已为浪潮，',
    '让人急不可耐，不计后果甚至委曲求全只为得到"爱"，',
    '这充分的体现了当代青年高尚的思想情操和灵活的生存智慧。',
    '随后潜移默化的功利主义也必定让你的思考方式，',
    '倒向权衡利弊 患得患失，也就丧失了最宝贵的真诚。',
    '可这对于每个人都必定存在阶段性，',
    '当命运之神把你推向勇敢的时刻，',
    '希望你能够有你想象中的那么勇敢，',
    '青春在你意识到时早已悄然逝去。',
    '当你认识到外在形式只是你的内在本质的投射，',
    '你就会发现它与心底真实的你密不可分，',
    '那些表面的需求将被掩盖，以色事人者，色衰而爱弛。',
    '当现实的车轮碾过 导致连最基本的支撑都失去，',
    '灵魂与理念不再契合 沉默不语',
    '柴米油盐，两看相厌。',
    '可是现实魔幻且不可量化，人性复杂且不可论证，',
    '每个人个性鲜明 深度难以揣度。',
    '所以对于外在事物的冲击往往使心境瞬息万变',
    '花费时间精力在实践上 ，思想才能更进一步',
    '人生的容错率之宽泛也往往超乎你的现象',
    '本质是活着 路上的风景才是意义',
    '寻找那些真正让你发自内心感动的瞬间',
    '当时只道是平常',
    '"小朋友"，我爱你',
  ],
  // 网站创建时间
  CreateTime: '2025-09-05',
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    // 首页高度
    HomeHeight: '38.88rem',
    // 其他页面高度
    PageHeight: '28.88rem',
    // 背景
    background: "url('/assets/images/home-banner.webp') no-repeat center 60%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--vh-main-color": "#01C4B6",
    // 字体颜色
    "--vh-font-color": "#34495e",
    // 侧边栏宽度
    "--vh-aside-width": "318px",
    // 全局圆角
    "--vh-main-radius": "0.88rem",
    // 主体内容宽度
    "--vh-main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG.
    { text: '外链分享', link: '/friends', icon: 'Nav_link' },
    { text: '日常', link: '/talking', icon: 'Nav_talking' },
    { text: '留言板', link: '/message', icon: 'Nav_message' },
    { text: '更新记录', link: '/archives', icon: 'Nav_archives' },
    { text: '关于我', link: '/about', icon: 'Nav_about' },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: 'Github', link: 'https://github.com/SNWAPS', icon: 'WebSite_github' },
    { text: '韩小韩API', link: '', icon: 'WebSite_api' },
    { text: '每日热榜', link: '', icon: 'WebSite_hot' },
    { text: '骤雨重山图床', link: 'https://wp-cdn.4ce.cn', icon: 'WebSite_img' },
    { text: 'HanAnalytics', link: '', icon: 'WebSite_analytics' },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://cn.cravatar.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: false,
      envId: ''
    },
    // Waline 评论
    Waline: {
      enable: false,
      serverURL: ''
    }
  },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: true, server: 'https://c419643d.cloudflare-831.pages.dev', siteId: 'Hello-HanHexoBlog' },
  // Google 广告
  GoogleAds: {
    ad_Client: '', //ca-pub-xxxxxx
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  },
  // 文章内赞赏码
  Reward: {
    // 抖音好友
    douyin: '/assets/images/douyin.webp',
    // 微信好友
    WeChat: '/assets/images/wechat.webp'
  },
  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: '',
    paramsName: 'url'
  },
  // 页面阻尼滚动速度
  ScrollSpeed: 666
}