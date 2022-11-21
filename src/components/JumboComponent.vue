<template>
  <div class="red">
    <div class="my-container">JUMBO: <br />IMG + text</div>

    <CTAComponent class="purple-bg" :cta="store.ctas.ctaOne" />
  </div>
</template>

<script>
import { store } from "../store";
import CTAComponent from "./CTAComponent.vue";

export default {
  name: "JumboComponent",
  components: { CTAComponent },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

.purple-bg {
  background-color: $butterfly;
}
</style>
