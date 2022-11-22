<template>
  <div class="my-card">
    <div class="row">
      <div class="col-6 card-info">
        <h4>{{ myCard.name }}</h4>
        <div>Class Name</div>
        <br />
        <div class="d-flex justify-content-around pt-5">
          <!-- info età -->
          <div class="class-info">
            <div class="numbers">
              {{ myCard.age }}
            </div>
            <div>{{ myCard.ageDescription }} olds</div>
          </div>

          <div class="vertical-line"></div>

          <!-- info classe -->
          <div class="class-info">
            <div class="numbers">
              {{ myCard.classSize }}
            </div>
            <div>Class size</div>
          </div>
        </div>
      </div>

      <div class="col-6 mycard-img">
        <img :src="myCard.image" :alt="myCard.name" />
        <button>READ MORE <i class="fa-solid fa-angle-right ps-2"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "CardComponent",
  props: {
    myCard: Object,
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
.my-card {
  background-color: $butterfly;
  color: $sugarcane;
  margin-bottom: 20px;
  border-style: none;
}

img {
  width: 100%;
  height: 100%;
}
.mycard-img {
  position: relative;
}
.card-info {
  padding-top: 1.5rem;
  padding-left: 2.5rem;
}

.class-info {
  text-align: center;
}

.vertical-line {
  border-right: 1px solid $sugarcane;
  opacity: 0.5;
  height: 60px;
}

.numbers {
  font-size: 1.3rem;
}

button {
  position: absolute;
  background-color: $blazeorange;
  color: $sugarcane;
  border-style: none;
  padding: 12px 20px;
  top: 79%;
  right: 4%;
}
</style>
