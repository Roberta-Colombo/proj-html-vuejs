<template>
  <div>
    <img src="../../public/img/gallery_01-690x506.jpg" alt="Kids drawing" />
    <img src="../assets/img_unzip/gallery_02-690x506.jpg" alt="Kids painting" />
    <img src="../assets/img_unzip/gallery_03-690x506.jpg" alt="Kid drawing" />
    <img src="../assets/img_unzip/gallery_04-690x506.jpg" alt="Kid playing" />
  </div>

  <CTAComponent class="deco-bg" :cta="store.ctas.ctaTwo" />

  <div class="parallax">
    <div class="my-container text-center">
      <div class="quote">
        <img src="../assets/img_unzip/quote_alt.png" alt="Quote icon" />
      </div>
      <p>
        I have to say that I have 2 children ages 5 and 2 and have used various
        daycare's in Kindergartens and this is by far the very best I have ever
        used.
      </p>
      <div class="line"></div>
      <div class="author">Cecil J. Kirk</div>
    </div>
  </div>
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

.parallax {
  background-image: url("../assets/img_unzip/parallax_01.jpg");
  height: 600px;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding-top: 80px;
}

.quote {
  height: 80px;
  width: 80px;
  border: 2px solid $sugarcane;
  border-radius: 50%;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

.quote img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
}

p {
  font-size: 2.2rem;
  color: $sugarcane;
  padding-top: 40px;
}

.line {
  border-top: 2px solid $sugarcane;
  width: 5%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 40px;
}

.author {
  color: $sugarcane;
  font-size: 1.2rem;
  padding-top: 65px;
}
</style>
