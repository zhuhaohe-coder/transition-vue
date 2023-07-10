import { computed } from "vue";
import { useI18n } from "vue-i18n";
export default function useLocale() {
  const i18n = useI18n(); //实例化i18n
  const currentLocale = computed(() => {
    return i18n.locale.value; // 获取当前语言设置
  });
  // 切换语言
  const changeLocale = (value: string) => {
    i18n.locale.value = value; //赋值切换语言
  };
  // 在setup中使用i18n.t()方法
  const t = i18n.t;
  return {
    i18n,
    currentLocale,
    changeLocale,
    t,
  };
}
