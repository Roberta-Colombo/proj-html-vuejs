<template>
  <div class="purple-bg">
    <div
      class="my-container text-white d-flex justify-content-between align-items-center"
    >
      <div class="cta">How to Enroll Your Child to a Class?</div>

      <button>Learn more <i class="fa-solid fa-angle-right ps-2"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTAComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

.my-container {
  height: 90px;
}

button {
  text-transform: uppercase;
  border: 1px solid $sugarcane;
  background-color: transparent;
  color: $sugarcane;
  font-size: 0.8rem;
  padding: 0.5rem;
}

.cta {
  font-size: 1.5rem;
}
.purple-bg {
  background-color: $butterfly;
  height: 90px;
}
</style>
