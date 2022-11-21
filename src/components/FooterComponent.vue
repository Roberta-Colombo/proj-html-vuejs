<template>
  <div class="debug">
    <div class="red">
      FOOTER <br />
      MAPPA GOOGLE
    </div>

    <div class="my-container py-3">
      <SectionTitle :section="store.sections.contacts" />

      <!-- contatti icone e info -->
      <nav>
        <ul class="d-flex justify-content-center">
          <li v-for="(item, index) in footerLinks" :key="index">
            <img :src="item.icon" :alt="item.text" />
            <div class="title">{{ item.title }}</div>
            <div class="info">{{ item.firstRow }}</div>
            <div class="info">{{ item.secondRow }}</div>
            <div class="info">{{ item.thirdRow }}</div>
          </li>
        </ul>
      </nav>

      <!-- form -->
      <div class="row">
        <div class="col-6">
          <form action="">
            <input type="text" placeholder="Your Name *" /><br />
            <input type="text" placeholder="Your E-mail *" /><br />
            <input type="text" placeholder="Subject" />
          </form>
        </div>

        <div class="col-6">
          <input class="text-area" type="text" placeholder="Your Message *" />
        </div>
      </div>

      <div class="text-center my-3">
        <button>send message</button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import SectionTitle from "./SectionTitle.vue";

export default {
  name: "FooterComponent",
  components: { SectionTitle },
  data() {
    return {
      store,
      footerLinks: [
        {
          icon: "../../public/img/envelope (1).png",
          title: "Postal Address",
          firstRow: "Fable Care Center",
          secondRow: "85 Fentiman Ave",
          thirdRow: "Ottawa, ON K15 0T7",
        },
        {
          icon: "../../public/img/mobile.png",
          title: "Phone & E-mail",
          firstRow: "Phone: 1-800-64-38",
          secondRow: "Fax: 1-800-64-39",
          thirdRow: "office@fable.com",
        },
        {
          icon: "../../public/img/clock.png",
          title: "Business Hours",
          firstRow: "Monday - Friday",
          secondRow: "8:00 am - 5:00 am",
          thirdRow: "Weekend closed",
        },
        {
          icon: "../../public/img/document (1).png",
          title: "Sessions",
          firstRow: "Mornings, 8am - 12 noon",
          secondRow: "Afternoons, 1pm - 5pm",
          thirdRow: "Full Day, 8am - 5pm",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

li {
  list-style: none;
  padding: 3rem;
  text-align: center;
  font-size: 0.8rem;
}

.title {
  color: $butterfly;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 1.3rem;
}

input {
  width: 100%;
  height: 60px;
  margin-bottom: 1.9rem;
  padding-left: 1rem;
}

.text-area {
  height: calc(100% - 1.9rem);
  margin-bottom: 1.9rem;
  text-align: left;
}

.text-area::placeholder {
  text-align: left;
  transform: translateY(-430%);
}

button {
  color: $sugarcane;
  background-color: $blazeorange;
  text-transform: uppercase;
  border-style: none;
  padding: 0.6rem 1.3rem;
}
</style>
