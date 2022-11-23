<template>
  <div>
    <div class="slide2">
      <img
        class="icon1"
        src="../assets/img_unzip/slider_icon10.png"
        alt="icon"
      />
      <img
        class="icon2"
        src="../assets/img_unzip/slider_icon11.png"
        alt="icon"
      />
      <img
        class="icon3"
        src="../assets/img_unzip/slider_icon12.png"
        alt="icon"
      />
      <img
        class="icon4"
        src="../assets/img_unzip/slider_icon13.png"
        alt="icon"
      />

      <img
        class="girl"
        src="../assets/img_unzip/slider_slide2_img2.png"
        alt="Little girl playing"
      />
      <img
        class="boy"
        src="../assets/img_unzip/slider_slide2_img1.png"
        alt="Little girl playing"
      />

      <div class="jumbo-txt my-container">
        <div class="above-heading"><i>Friendly Atmosphere</i></div>
        <h1 class="purpletxt">Welcoming Place</h1>
        <div class="purpletxt subtitle">For Every Child</div>
        <button>BUY THIS THEME NOW</button>
      </div>
    </div>

    <div class="my-container"></div>

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

.slide2 {
  background-image: url("../assets/img_unzip/slider_slide2_background.png");
  height: 600px;
  position: relative;
}

.girl {
  position: absolute;
  top: 7%;
  left: 68%;
}

.boy {
  position: absolute;
  top: 9%;
  left: 49%;
}

.jumbo-txt {
  padding-top: 140px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
}
.subtitle {
  font-size: 3.5rem;
}

.above-heading {
  color: $maincolor;
  font-size: 2.7rem;
}

button {
  background-color: $maincolor;
  color: $sugarcane;
  border-style: none;
  padding: 15px 15px;
  margin-top: 25px;
}

button:hover {
  background-color: $butterfly;
  opacity: 0.7;
}
.icon1,
.icon2 {
  position: absolute;
  left: 30%;
  top: 5%;
}

.icon2 {
  left: 38%;
}

.icon3,
.icon4 {
  position: absolute;
  top: 15%;
  left: 45%;
}

.icon4 {
  left: 53%;
  top: 8%;
}
</style>
