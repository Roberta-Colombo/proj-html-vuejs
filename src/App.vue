<template>
  <div class="wrapper">
    <header>
      <HeaderComponent />
      <JumboComponent />
    </header>

    <main>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <ParallaxComponent />
      <FifthSection />
      <FooterComponent />
    </main>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
import FirstSection from "./components/FirstSection.vue";
import SecondSection from "./components/SecondSection.vue";
import ParallaxComponent from "./components/ParallaxComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ThirdSection from "./components/ThirdSection.vue";
import FourthSection from "./components/FourthSection.vue";
import FifthSection from "./components/FifthSection.vue";

export default {
  components: {
    HeaderComponent,
    JumboComponent,
    FirstSection,
    SecondSection,
    ParallaxComponent,
    FooterComponent,
    ThirdSection,
    FourthSection,
    FifthSection,
  },
};
</script>

<style lang="scss" scoped></style>
