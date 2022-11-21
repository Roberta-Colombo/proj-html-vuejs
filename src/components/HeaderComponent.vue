<template>
  <div class="my-container">
    <div class="header d-flex justify-content-between align-items-center">
      <img class="logo" src="../assets/img_unzip/logo.png" alt="Logo Fable" />

      <nav>
        <ul class="d-flex">
          <li v-for="(item, index) in navLinks" :key="index">
            <img :src="item.icon" :alt="item.text" />
            <div>
              <a :href="item.url">{{ item.text }}</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      navLinks: [
        {
          icon: "../../public/img/home.png",
          text: "Home",
          url: "#",
        },
        {
          icon: "../../public/img/document.png",
          text: "Pages",
          url: "#",
        },
        {
          icon: "../../public/img/printer.png",
          text: "Blog",
          url: "#",
        },
        {
          icon: "../../public/img/cart.png",
          text: "Shop",
          url: "#",
        },
        {
          icon: "../../public/img/lab.png",
          text: "Shortcodes",
          url: "#",
        },
        {
          icon: "../../public/img/chat.png",
          text: "Support",
          url: "#",
        },
        {
          icon: "../../public/img/envelope.png",
          text: "Contact",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

.header,
nav {
  height: 90px;
}

.logo {
  height: 100%;
}

li {
  list-style: none;
  padding: 1.5rem;
  text-align: center;
}

li img {
  height: 40%;
  padding-bottom: 0.1rem;
}

a {
  color: $mineshaft;
  text-decoration: none;
  font-size: 0.8rem;
}
</style>
