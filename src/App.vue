<template>
  <div class="wrapperd debug">
    <header>
      <HeaderComponent />
      <JumboComponent />
    </header>

    <main>
      <CTAComponent />
      <WhiteSection />
      <GreySection />
      <CTAComponent />
      <ParallaxComponent />
      <WhiteSection />
      <FooterComponent />
    </main>
  </div>
</template>

<script>
import CTAComponent from "./components/CTAComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
import WhiteSection from "./components/WhiteSection.vue";
import GreySection from "./components/GreySection.vue";
import ParallaxComponent from "./components/ParallaxComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    JumboComponent,
    CTAComponent,
    WhiteSection,
    GreySection,
    ParallaxComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
