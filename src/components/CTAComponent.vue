<template>
  <div class="purple-bg">
    <div
      class="my-container text-white d-flex justify-content-between align-items-center"
    >
      <div class="cta">{{ cta.text }}</div>

      <button>
        {{ cta.btn }} <i class="fa-solid fa-angle-right ps-2"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTAComponent",
  props: {
    cta: Object,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

.my-container {
  height: 130px;
}

button {
  text-transform: uppercase;
  border: 1px solid $sugarcane;
  background-color: transparent;
  color: $sugarcane;
  font-size: 0.9rem;
  padding: 0.7rem;
}

.cta {
  font-size: 2rem;
}
</style>
