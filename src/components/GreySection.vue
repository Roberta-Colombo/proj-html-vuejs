<template>
  <div class="grey-bg py-5">
    <div class="my-container">
      <div class="content">
        <div class="row pt-3">
          <div class="col-6 ps-0">
            <!-- ulteriore divisione 50% delle due colonne precedentemente ottenute -->
            <div class="row no-gutter">
              <!-- colonna sx -->
              <div class="d-flex">
                <button class="active-btn">Overview</button>
                <button>Our Mission</button>
              </div>

              <div class="purpletxt description">
                <strong
                  >Our philosophy is learning through play as we offer a
                  stimulating environment for children</strong
                >
              </div>

              <div class="paragraph pb-4">
                <div class="row">
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
                <div class="row">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreySection",
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
.grey-bg {
  background-color: $bonjour;
}

.circle {
  height: 65px;
  width: 65px;
  border-radius: 50%;
  background-color: $blazeorange;
  text-align: center;
  line-height: 60px;
}

.circle img {
  height: 40%;
}

.title {
  color: $butterfly;
  font-weight: bold;
  font-size: 1.2rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
}
.caption {
  padding-left: 1rem;
}
.description {
  padding: 1.3rem 0;
  font-size: 1.2rem;
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
</style>
