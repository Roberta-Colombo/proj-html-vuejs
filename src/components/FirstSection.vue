<template>
  <div class="my-container mb-5">
    <SectionTitle :section="store.sections.sectionOne" />

    <!-- main content diviso in due colonne uguali (50%). A sua volta ogni colonna contiene due colonne annidate -->

    <!-- divisione 50% main -->
    <div class="content">
      <div class="row pt-3">
        <div class="col-6">
          <!-- ulteriore divisione 50% delle due colonne precedentemente ottenute -->
          <div class="row">
            <!-- prima section -->
            <div class="col-6">
              <div class="circle orange-circle">
                <img
                  src="../assets/img_unzip/schoolbag_alt.png"
                  alt="Schoolbag"
                />
              </div>
              <div class="section-title">
                <strong>Morbi Etos</strong>
              </div>
              <div class="caption">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat commodi aliquam aut quasi tempora. Quod mollitia
                expedita iste deserunt.
              </div>
            </div>

            <!-- seconda section -->
            <div class="col-6">
              <div class="circle purple-circle">
                <img
                  src="../assets/img_unzip/stroller_alt.png"
                  alt="Schoolbag"
                />
              </div>
              <div class="section-title">
                <strong>Congue Gravida</strong>
              </div>
              <div class="caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eaque facilis cumque natus. Reiciendis doloremque
                molestias mollitia voluptate repellat illo.
              </div>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="row">
            <!-- terza section -->
            <div class="col-6">
              <div class="circle orange-circle">
                <img src="../assets/img_unzip/globe_alt.png" alt="Schoolbag" />
              </div>
              <div class="section-title">
                <strong>Maecenas Node</strong>
              </div>
              <div class="caption">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat commodi aliquam aut quasi tempora. Quod mollitia
                expedita iste deserunt.
              </div>
            </div>

            <!-- quarta section -->
            <div class="col-6">
              <div class="circle purple-circle">
                <img src="../assets/img_unzip/bell_alt.png" alt="Schoolbag" />
              </div>
              <div class="section-title">
                <strong>Praesent Morbi</strong>
              </div>
              <div class="caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eaque facilis cumque natus. Reiciendis doloremque
                molestias mollitia voluptate repellat illo.
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
import SectionTitle from "./SectionTitle.vue";

export default {
  name: "FirstSection",
  components: { SectionTitle },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
.my-container {
  height: 600px;
}

.circle {
  height: 140px;
  width: 140px;
  border-radius: 50%;
  text-align: center;
  margin-left: 26%;
  line-height: 140px;
}

.orange-circle {
  background-color: $blazeorange;
}

.purple-circle {
  background-color: $butterfly;
}
.circle img {
  height: 40%;
}

.section-title {
  text-align: center;
  margin-top: 1rem;
  color: $butterfly;
}

.caption {
  text-align: justify;
  padding: 1rem;
}
</style>
