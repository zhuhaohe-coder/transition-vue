<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { ref, watch } from "vue";
import useLocale from "@/hooks/useLocale";

const language = ref(false);

const { changeLocale, t } = useLocale();

watch(language, (val) => {
  if (val) {
    changeLocale("en");
  } else {
    changeLocale("zh");
  }
});
</script>

<template>
  <el-switch
    class="switch"
    v-model="language"
    size="large"
    :active-text="t('language.en')"
    :inactive-text="t('language.zh')"
  />
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld :msg="t('hello.title')" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
.switch {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
