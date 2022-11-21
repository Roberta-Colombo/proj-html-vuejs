<template>
  <div class="debug">
    FOOTER
    <div>
      <MapComponent />
    </div>

    <WhiteSection />
  </div>
</template>

<script>
import MapComponent from "./MapComponent.vue";
import WhiteSection from "./WhiteSection.vue";

export default {
  name: "FooterComponent",
  components: { MapComponent, WhiteSection },
};
</script>

<style lang="scss" scoped></style>
