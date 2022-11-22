<template>
  <div class="main-title text-center pb-5">
    <div class="title">{{ section.title }}</div>
    <div class="subtitle">{{ section.subtitle }}</div>
    <img src="../assets/img_unzip/header_divider.png" alt="Decoration" />
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "TitleSection",
  props: {
    section: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
.title {
  color: $butterfly;
  font-size: 3rem;
  padding-top: 3rem;
}

.subtitle {
  color: $greytxt;
  padding-bottom: 1.3rem;
}
</style>
