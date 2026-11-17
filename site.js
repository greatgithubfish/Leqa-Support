"use strict";
(() => {
  const translations = {
    skip: "跳至正文",
    navigation: "主导航", homeLabel: "Leqa 首页",
    navInside: "认识 Leqa", navPro: "Pro", navFAQ: "常见问题",
    heroEyebrow: "一个有温度的 iPad 邮件客户端",
    heroTitle: "一个很轻的邮箱。<br><em>生活，多一点。</em>",
    heroDescription: "工作邮件，日常来信，都有自己的位置。把多个邮箱放在一起，好好处理每一封，然后留点时间给自己。",
    watch: "看一段 31 秒的介绍", explore: "慢慢认识 Leqa",
    releaseNote: "正在准备 App Store 上架 · 为 iPad 横屏设计",
    indie: "一个人做的邮件 App。<br>也放进了一点自己的小心思。",
    videoLabel: "Leqa 产品宣传视频，含中文画面介绍",
    videoFallback: "你的浏览器暂不支持播放视频。",
    videoCaption: "31 秒 · iPad 横屏 · 早期版本演示",
    videoError: "视频暂时无法播放，可以直接打开原录屏观看。",
    openVideo: "直接打开录屏 ↗",
    providerIntro: "不同邮箱，都有归处。", qq: "QQ 邮箱", providerNote: "一个首页，少一些来回切换。",
    insideEyebrow: "02 / 每一封，都有自己的位置",
    insideTitle: "邮件的归处。<br><em>不必是一天的全部。</em>",
    insideDescription: "看完一段往来，稍后再处理，或是轻轻标记完成。让收件箱帮你往前走，而不是把你留在那里。",
    screenshots: "App 实际界面 · 演示邮箱", tabHome: "首页", tabCompose: "写邮件", tabSettings: "阅读设置",
    unifiedTitle: "工作和生活，放在一起。",
    unifiedBody: "公司邮箱与个人邮箱共用一个首页。查找邮件、搜索历史收件人，少一点重复输入，多一点顺手。",
    translateTitle: "隔着语言，也能读懂。",
    translateBody: "在阅读时翻译邮件。可将源语言限定为英语与阿拉伯语，减少把短句和姓名识别成其他语言的情况。",
    archiveTitle: "重要的，好好留下。",
    archiveBody: "把过往邮件收进本地文件夹。预览附件、引用回复、移动整理，离线时也能继续查看已经保存的内容。",
    aiEyebrow: "03 / 想表达的，顺畅地表达",
    aiTitle: "从随手一写。<br><em>到好好说清楚。</em>",
    aiDescription: "先用中文写下你的想法，再翻译、润色成清楚自然的英文，一键放回草稿。发出去之前，最后的决定仍然由你来做。",
    aiBullet1: "翻译与润色，就在写信的地方",
    aiBullet2: "段落清楚，也能保留富文本格式",
    aiBullet3: "接入你习惯的 AI 服务",
    appleAI: "Apple 智能",
    aiNote: "AI 写信属于 Leqa Pro 功能。第三方服务使用你自己的账号或 API Key，可能另行收费。Apple 功能取决于设备、语言与所在地区的支持情况。",
    aiAlt: "正常朝向的 iPad 横屏写信界面",
    aiCaption: "App 实际写信界面，完整横屏展示。", aiArtwork: "查看 AI 写信图文示例 ↗",
    folderWork: "工作往来，妥善收好", folderImportant: "重要的那些事", archiveScribble: "给邮箱，也留点呼吸的空间。",
    archiveEyebrow: "04 / 给公司邮箱减一点负担",
    localTitle: "旧邮件。<br><em>也能有新归处。</em>",
    localDescription: "Exchange 的空间会满，但邮件仍然重要。把旧邮件迁移到本地文件夹，或只保存一份本地副本，让服务器上的原件继续保留。",
    localNote: "只复制到本地不会释放服务器空间。迁移会在校验本地归档后移除服务器副本。重要的本地邮件，请另外做好备份。",
    dataLink: "了解 Leqa 如何处理数据",
    personalityEyebrow: "再多一点，你自己的样子",
    personalityTitle: "认真处理邮件。<br><em>也留一点好玩的。</em>",
    personalityBody: "淡淡水墨底色的头像、自己写的问候文案、轻柔的背景场景，还有邮件发出时掠过的一道冲击波。",
    proEyebrow: "05 / 给日常，再多一点余地",
    proTitle: "你的邮箱。<em>你的节奏。</em>",
    freeDescription: "免费版可添加一个账号，收发、搜索、翻译与附件都能用。想再多做一点，就交给 Pro。",
    proIncludes: "多账号 · 本地归档 · AI 写信与搜索 · 容量自动提醒 · 个性主题",
    monthly: "按月订阅", perMonth: "/ 月", monthlyNote: "用得灵活，也可以随时取消。",
    yearly: "按年订阅", perYear: "/ 年", yearlyNote: "让一整年的邮件，都更从容一些。",
    lifetime: "永久买断", once: "一次付费", lifetimeNote: "一次购买，永久解锁 Leqa Pro。",
    trial: "免费试用 3 天", family: "支持家人共享",
    pricingNote: "以上为计划中的美区美元价格，最终价格与可用性以 App Store 为准。月订阅与年订阅会自动续期，直至取消。年订阅免费试用仅适用于符合条件的用户；如不希望扣费，请在试用结束前取消。",
    faqEyebrow: "你可能也想知道",
    faqTitle: "开始之前。<br><em>再聊几句。</em>",
    supportLink: "有问题，来聊聊",
    q1: "可以接入哪些邮箱？",
    a1: "支持 Gmail、QQ 邮箱，以及通过 EWS 和 NTLM 连接的公司自建 Exchange。公司的服务器策略可能影响接入。使用 Gmail 或 QQ 邮箱的密码连接方式时，需要填写应用专用密码或授权码，而不是日常登录密码。",
    q2: "邮件会经过 Leqa 的服务器吗？",
    a2: "Leqa 直接连接你的邮件服务商。可选的第三方 AI、发件人头像、邮件远程图片、iCloud 整理数据同步和自行配置的推送服务，各有对应的数据处理方式。隐私政策中对这些选择做了详细说明。",
    q3: "归档到本地，就能释放 Exchange 空间吗？",
    a3: "只保存本地副本会保留服务器原件，不会减少已用空间。选择迁移时，会在校验本地保存的邮件后移除服务器副本。本地归档保存在当前设备中，重要内容请另外备份。",
    q4: "还需要额外买一个 AI 订阅吗？",
    a4: "AI 写信包含在 Leqa Pro 中，第三方 AI 服务可能单独收费。你可以使用自己的受支持账号或 API Key。设备上的 Apple 功能需要相应硬件、语言和地区支持。",
    q5: "现在可以在哪里下载？",
    a5: "正在准备 App Store 上架，正式可下载后会在这里添加商店链接。Leqa 当前为 iPad 横屏设计，支持英文与简体中文界面。",
    closingEyebrow: "认真做的小东西，为你的 iPad 而来。",
    closingTitle: "合上收件箱。<br><em>把时间，留给生活。</em>",
    availability: "即将登陆 App Store",
    privacy: "隐私政策", support: "帮助与反馈", terms: "使用条款"
  };
  const english = new Map();
  document.querySelectorAll("[data-i18n]").forEach(node => {
    if (!english.has(node.dataset.i18n)) english.set(node.dataset.i18n, node.innerHTML);
  });
  let stored;
  try { stored = localStorage.getItem("leqa-site-language"); } catch {}
  const requested = new URLSearchParams(location.search).get("lang");
  let language = ["en", "zh"].includes(requested) ? requested
    : ["en", "zh"].includes(stored) ? stored : navigator.language.startsWith("zh") ? "zh" : "en";
  let scene = "home";
  const languageButton = document.getElementById("language");
  const screen = document.getElementById("app-screen");
  const screenDescriptions = {
    en: {home: "Leqa home showing a unified inbox with demo messages", compose: "Leqa email composer with sender, recipients and rich-text controls", settings: "Leqa reading settings with translation languages and remote image controls"},
    zh: {home: "Leqa 统一收件箱首页，展示演示邮件", compose: "Leqa 写信界面，包含发件人、收件人与富文本操作", settings: "Leqa 阅读设置，支持选择翻译语言与远程图片加载方式"}
  };
  function updateScreenshot() {
    screen.src = `assets/app-${scene}-${language}-landscape.webp`;
    screen.alt = screenDescriptions[language][scene];
    document.getElementById("ai-screen").src = `assets/app-compose-${language}-landscape.webp`;
  }
  function applyLanguage() {
    document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.dataset.i18n;
      node.innerHTML = language === "zh" ? translations[key] ?? english.get(key) : english.get(key);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(node => {
      const key = node.dataset.i18nAria;
      if (!node.dataset.originalAria) node.dataset.originalAria = node.getAttribute("aria-label");
      node.setAttribute("aria-label", language === "zh" ? translations[key] : node.dataset.originalAria);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(node => {
      if (!node.dataset.originalAlt) node.dataset.originalAlt = node.alt;
      node.alt = language === "zh" ? translations[node.dataset.i18nAlt] : node.dataset.originalAlt;
    });
    languageButton.querySelector("span").textContent = language === "zh" ? "English" : "中文";
    languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换为简体中文");
    document.title = language === "zh" ? "Leqa 邮箱 — 合上收件箱，把时间留给生活。" : "Leqa — A little less inbox. A little more life.";
    document.querySelector('meta[name="description"]').content = language === "zh"
      ? "Leqa 是一个有温度的 iPad 邮件客户端。接入 Exchange、Gmail 与 QQ 邮箱，阅读翻译、AI 写信，把重要邮件归档到本地。"
      : "Leqa is a thoughtful email app for iPad. Bring Exchange, Gmail and QQ Mail together, translate messages, write with AI, and keep a local archive.";
    updateScreenshot();
    try { localStorage.setItem("leqa-site-language", language); } catch {}
  }
  languageButton.addEventListener("click", () => {
    language = language === "zh" ? "en" : "zh";
    const url = new URL(location.href);
    url.searchParams.set("lang", language);
    history.replaceState(null, "", url);
    applyLanguage();
  });
  const tabs = [...document.querySelectorAll("[data-scene]")];
  function selectTab(tab) {
    scene = tab.dataset.scene;
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    document.getElementById("preview-panel").setAttribute("aria-labelledby", tab.id);
    updateScreenshot();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", event => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectTab(tabs[next]);
      tabs[next].focus();
    });
  });
  const video = document.getElementById("tour");
  const videoError = document.getElementById("video-error");
  document.getElementById("watch-tour").addEventListener("click", async () => {
    videoError.hidden = true;
    const rect = video.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > innerHeight) {
      video.scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center"});
    }
    try { await video.play(); } catch { videoError.hidden = false; video.focus(); }
  });
  video.addEventListener("error", () => { videoError.hidden = false; });
  applyLanguage();
})();
