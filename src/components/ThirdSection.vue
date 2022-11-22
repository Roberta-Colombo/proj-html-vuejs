<template>
  <div class="my-container mb-5 py-5">
    <SectionTitle :section="store.sections.sectionThree" />

    <div class="row pb-5">
      <div class="col-6 section-intro">
        We provided four classes with nine to twenty children each aged twelve
        month to five years of age.
      </div>

      <div class="col-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident vero
        voluptate ullam? Illo, totam nihil minus illum aperiam doloremque
        cupiditate cumque, labore alias eaque provident tempore aspernatur fugit
        placeat molestias!
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-6" v-for="(item, index) in store.cards" :key="index">
        <CardComponent :myCard="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import CardComponent from "./CardComponent.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  components: {
    SectionTitle,
    CardComponent,
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
</style>
