<template>
  <div class="my-container mb-5 py-5">
    <SectionTitle :section="store.sections.sectionFive" />

    <div class="row mt-3">
      <div class="col-4" v-for="(item, index) in store.posts" :key="index">
        <BlogPost :post="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import BlogPost from "./BlogPost.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  name: "FifthSection",
  components: {
    SectionTitle,
    BlogPost,
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
