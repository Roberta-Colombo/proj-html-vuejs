<template>
  <div class="grey-bg py-5">
    <div class="my-container">
      <div class="content">
        <div class="row pt-3 gx-0">
          <div class="col-6 ps-0">
            <div class="section-intro pb-4">
              We have been educating children for over fifteen years. Our goal
              is to create a place that engages each child.
            </div>

            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              impedit vel, minima commodi esse voluptatem, sequi unde. Iste,
              earum doloremque totam nobis reiciendis veniam nemo facere.
            </div>

            <ul class="pt-5">
              <li class="d-flex align-items-center">
                <div class="box me-3"><i class="fa-solid fa-check"></i></div>
                Comprehensive reporting on individual achievement
              </li>
              <li class="d-flex align-items-center">
                <div class="box me-3"><i class="fa-solid fa-check"></i></div>
                Educational field trips and school presentations
              </li>
              <li class="d-flex align-items-center">
                <div class="box me-3"><i class="fa-solid fa-check"></i></div>
                Individual attention in a small-class setting
              </li>
              <li class="d-flex align-items-center">
                <div class="box me-3"><i class="fa-solid fa-check"></i></div>
                Learning program with after-school care
              </li>
              <li class="d-flex align-items-center">
                <div class="box me-3"><i class="fa-solid fa-check"></i></div>
                Opportunities to carry out scientific investigations
              </li>
              <li class="d-flex align-items-center">
                <div class="box me-3"><i class="fa-solid fa-check"></i></div>
                Positive learning environment for your child
              </li>
            </ul>
          </div>

          <!-- prima riga dx -->
          <div class="col-6 ps-5">
            <div class="firstrow d-flex">
              <div>
                <div class="circle">
                  <img src="../assets/img_unzip/toy.png" alt="Toy icon" />
                </div>
                <div class="title purpletxt">Learning &amp Fun</div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div>
                <div class="circle">
                  <img src="../assets/img_unzip/meal.png" alt="Meal icon" />
                </div>
                <div class="title purpletxt">Healthy Meals</div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <!-- seconda riga dx -->
            <div class="secondrow d-flex">
              <div>
                <div class="circle">
                  <img src="../assets/img_unzip/school.png" alt="School icon" />
                </div>
                <div class="title purpletxt">Friendly Place</div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div>
                <div class="circle">
                  <img src="../assets/img_unzip/shield.png" alt="Shield icon" />
                </div>
                <div class="title purpletxt">Children Safety</div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
  name: "FourthSection",
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

ul {
  list-style: none;
  padding-left: 0;
}

li {
  line-height: 2rem;
}

.box {
  width: 18px;
  height: 18px;
  border: 2px solid $blazeorange;
  padding: 3px;
  position: relative;
}

i {
  font-size: 0.8rem;
  padding: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  color: $blazeorange;
}

.circle {
  height: 90px;
  width: 90px;
  background-color: $sugarcane;
  border-radius: 50%;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 1.8rem;
}

.circle img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
}

.title {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
}

p {
  text-align: center;
  padding-bottom: 1rem;
}
</style>
