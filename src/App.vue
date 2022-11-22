<template>
  <div class="wrapper">
    <header>
      <HeaderComponent />
      <JumboComponent />
    </header>

    <main>
      <FirstSection />
      <SecondSection />
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
import SecondSection from "./components/SecondSection.vue";
import ParallaxComponent from "./components/ParallaxComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    JumboComponent,
    FirstSection,
    SecondSection,
    ParallaxComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
