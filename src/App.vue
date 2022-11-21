<template>
  <div class="wrapper">
    <header>
      <HeaderComponent />
      <JumboComponent />
    </header>

    <main>
      <FirstSection />
      <GreySection />
      <!-- <CTAComponent /> -->
      <ParallaxComponent />
      <!-- <WhiteSection /> -->
      <FooterComponent />
    </main>
  </div>
</template>

<script>
// import CTAComponent from "./components/CTAComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
import FirstSection from "./components/FirstSection.vue";
import GreySection from "./components/GreySection.vue";
import ParallaxComponent from "./components/ParallaxComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    JumboComponent,
    FirstSection,
    GreySection,
    ParallaxComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
