<template>
  <div>
    <img src="../../public/img/gallery_01-690x506.jpg" alt="Kids drawing" />
    <img src="../assets/img_unzip/gallery_02-690x506.jpg" alt="Kids painting" />
    <img src="../assets/img_unzip/gallery_03-690x506.jpg" alt="Kid drawing" />
    <img src="../assets/img_unzip/gallery_04-690x506.jpg" alt="Kid playing" />
  </div>

  <CTAComponent class="deco-bg" :cta="store.ctas.ctaTwo" />

  <div class="red">Slider / parallax con grande img di sfondo</div>
</template>

<script>
import { store } from "../store";
import CTAComponent from "./CTAComponent.vue";

export default {
  name: "ParallaxComponent",
  components: {
    CTAComponent,
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

img {
  width: calc(100% / 4);
}

.deco-bg {
  background-image: url("../assets/img_unzip/pattern.png");
}
</style>
