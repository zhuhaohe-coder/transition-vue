<script setup lang="ts">
/* cSpell:enable */
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import useLocale from "@/hooks/useLocale";
const { t } = useLocale();
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ t("documentation.title") }}</template>
    {{ t("documentation.description") }}
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ t("tooling.title") }}</template>
    {{ t("tooling.description") }}
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{ t("ecosystem.title") }}</template>
    {{ t("ecosystem.description") }}
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>{{ t("community.title") }}</template>
    {{ t("community.description") }}
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>{{ t("support.title") }}</template>
    {{ t("support.description") }}
  </WelcomeItem>
</template>
