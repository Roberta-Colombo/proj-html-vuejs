<template>
  <div class="grey-bg py-5">
    <div class="my-container">
      <div class="content">
        <div class="row pt-3 gx-0">
          <div class="col-6 ps-0">
            <!-- ulteriore divisione 50% delle due colonne precedentemente ottenute -->
            <!-- colonna sx -->
            <div class="d-flex">
              <button class="active-btn">Overview</button>
              <button>Our Mission</button>
            </div>

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

          <!-- colonna dx (slider) -->
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
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondSection",
  data() {
    return {
      activeIndex: 0,
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
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

.circle {
  height: 65px;
  width: 65px;
  border-radius: 50%;
  background-color: $blazeorange;
  text-align: center;
  line-height: 60px;
  margin-top: 2rem;
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
.active-btn {
  background-color: $blazeorange;
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
  background-color: $blazeorange;
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
  border-bottom: 3px solid $blazeorange;
}
</style>
