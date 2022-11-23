<template>
  <div class="grey-bg py-5">
    <div class="my-container">
      <div class="content">
        <div class="d-flex">
          <button @click="hideSection" :class="{ activebtn: btnActive }">
            Overview
          </button>
          <button @click="showSection" :class="{ activebtn: secondBtnActive }">
            Our Mission
          </button>
        </div>

        <div v-if="!store.showSection">
          <div class="row pt-3 gx-0">
            <!-- suddivisione in due colonne (50%) -->
            <div class="col-6 ps-0">
              <!-- colonna sx -->
              <div class="section-intro description">
                <strong
                  >Our philosophy is learning through play as we offer a
                  stimulating environment for children</strong
                >
              </div>

              <div class="paragraph pb-4">
                <div class="row gx-0">
                  <div class="col-4 circle">
                    <img
                      src="../assets/img_unzip/clock_alt.png"
                      alt="Clock icon"
                    />
                  </div>

                  <div class="col-8">
                    <div class="title">Full Day Sessions</div>
                    <div class="caption">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate libero fugiat laboriosam.
                    </div>
                  </div>
                </div>
              </div>

              <div class="paragraph pb-4">
                <div class="row gx-0">
                  <div class="col-4 circle">
                    <img
                      src="../assets/img_unzip/diagram_alt.png"
                      alt="Clock icon"
                    />
                  </div>

                  <div class="col-8">
                    <div class="title">Varied Classes</div>
                    <div class="caption">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate libero fugiat laboriosam.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Colonna dx (slider) -->
            <div class="col-6">
              <div class="slider">
                <div class="slide">
                  <button class="slide-btn lft" @click="prevSlide">
                    <i class="fa-solid fa-angle-left"></i>
                  </button>
                  <img
                    class="slide-img"
                    :src="slides[activeIndex].image"
                    :alt="slides[activeIndex].title"
                  />
                  <button class="slide-btn rgt" @click="nextSlide">
                    <i class="fa-solid fa-angle-right"></i>
                  </button>
                </div>

                <div class="thumbs">
                  <div
                    class="thumb"
                    :class="index === activeIndex ? 'active' : ''"
                    v-for="(slide, index) in slides"
                    :key="index"
                  >
                    <img :src="slide.image" alt="{{ slide.title }}" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Compare al click su button "Our Mission" -->
        <div class="mission-section" v-if="store.showSection">
          <div class="section-intro description">
            <strong
              >Our mission consists in helping kids learning and grow together
              while having fun</strong
            >

            <div class="section-img">
              <img
                class="section-image"
                src="../assets/img_unzip/slider_icon2.png"
                alt="Heart icon"
              />
            </div>
          </div>

          <div class="paragraph pb-4">
            <div class="row gx-0">
              <div class="col-4 circle scnd">
                <img src="../assets/img_unzip/toy.png" alt="Stroller icon" />
              </div>

              <div class="col-8">
                <div class="title alt-title">Extensive Day Care</div>
                <div class="caption">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate libero fugiat laboriosam. Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Cupiditate libero fugiat
                  laboriosam.
                </div>
              </div>
            </div>
          </div>

          <div class="paragraph pb-4">
            <div class="row gx-0">
              <div class="col-4 circle scnd">
                <img src="../assets/img_unzip/meal.png" alt="Stroller icon" />
              </div>

              <div class="col-8">
                <div class="title alt-title">Warm Meals Everyday</div>
                <div class="caption">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate libero fugiat laboriosam. Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Cupiditate libero fugiat
                  laboriosam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "SecondSection",
  data() {
    return {
      store,
      activeIndex: 0,
      btnActive: true,
      secondBtnActive: false,
      slides: [
        {
          title: "Girls drawing",
          image: "../../public/img/gallery_07-690x506.jpg",
        },
        {
          title: "Kids drawing",
          image: "../../public/img/gallery_01-690x506.jpg",
        },
        {
          title: "Teacher with kid",
          image: "../../public/img/gallery_08-690x506.jpg",
        },
      ],
    };
  },
  methods: {
    prevSlide() {
      this.activeIndex--;
      if (this.activeIndex < 0) {
        this.activeIndex = this.slides.length - 1;
      }
    },
    nextSlide() {
      this.activeIndex++;
      if (this.activeIndex > this.slides.length - 1) {
        this.activeIndex = 0;
      }
    },
    showSection() {
      store.showSection = true;
      this.btnActive = false;
      this.secondBtnActive = true;
    },
    hideSection() {
      this.secondBtnActive = false;
      store.showSection = false;
      this.btnActive = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

.circle {
  height: 65px;
  width: 65px;
  border-radius: 50%;
  background-color: $maincolor;
  text-align: center;
  line-height: 60px;
  margin-top: 2rem;
}

.scnd {
  background-color: $sugarcane;
}

.circle img {
  height: 40%;
}

.title {
  color: $butterfly;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1.5rem 1rem 1rem;
}
.alt-title {
  color: $maincolor;
}
.description {
  padding: 2rem 1rem 2rem 0;
}
.caption {
  padding-left: 1rem;
}

button {
  border: 1px solid $greytxt;
  background-color: transparent;
  color: $greytxt;
  margin: 1rem 1rem 1rem 0;
}
.activebtn {
  background-color: $maincolor;
  border-style: none;
  color: $sugarcane;
  padding: 0.5rem 1rem;
}

.slider {
  padding-top: 15px;
  height: 100%;
}

.thumb {
  float: left;
  width: calc(100% / 3);
  padding: 10px;
}

.thumb img {
  width: 100%;
  margin: 0;
}

.slide {
  width: 100%;
  position: relative;
}

.slide-img {
  width: 100%;
}

.slide-btn {
  position: absolute;
  top: 50%;
  background-color: $maincolor;
  border-style: none;
  color: $sugarcane;
  height: 40px;
  width: 45px;
}

.rgt {
  right: 0;
  margin-right: 0;
}

.active {
  border-bottom: 3px solid $maincolor;
}

.mission-section {
  position: relative;
}
.section-img {
  position: absolute;
  width: 300px;
  right: 0;
}

.section-image {
  width: 100%;
}
</style>
