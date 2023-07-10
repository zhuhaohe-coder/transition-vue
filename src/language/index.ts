import { createI18n } from "vue-i18n";
import zhCN from "./locales/zh-CN";
import enUS from "./locales/en-US";

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式，则需要将其设置为false
  locale: "zh", // 默认显示语言
  messages: {
    zh: zhCN,
    en: enUS,
  },
});

export default i18n;
