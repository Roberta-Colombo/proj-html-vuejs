<template>
  <div class="my-container debug">
    <div class="header">logo + nav</div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

.header {
  height: 80px;
}
</style>
