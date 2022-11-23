<template>
  <div class="my-container">
    <div class="header d-flex justify-content-between align-items-center">
      <img class="logo" src="../assets/img_unzip/logo.png" alt="Logo Fable" />

      <nav>
        <!-- <div class="dropdown">
          <div class="dropbtn"> -->
        <ul class="d-flex">
          <li v-for="(item, index) in navLinks" :key="index">
            <div class="dropdown">
              <div class="dropbtn">
                <!-- icona viola di default -->
                <img class="dft-icon" :src="item.icon" :alt="item.text" />
                <!-- icona bianca all'hover -->
                <img class="hover-icon" :src="item.icon2" :alt="item.text" />
                <div>
                  <a :href="item.url">{{ item.text }}</a>
                </div>
              </div>
              <div class="dropdown-content">
                <ul class="small-container d-flex justify-content-around">
                  <div class="list">
                    <li>
                      <a href="#"> {{ item.bullet1 }}</a>
                    </li>
                    <li>
                      <a href="#"> {{ item.bullet2 }}</a>
                    </li>
                    <li>
                      <a href="#"> {{ item.bullet3 }}</a>
                    </li>
                  </div>

                  <div class="list">
                    <li>
                      <a href="#"> {{ item.bullet1 }}</a>
                    </li>
                    <li>
                      <a href="#"> {{ item.bullet2 }}</a>
                    </li>
                  </div>

                  <div class="list">
                    <li>
                      <a href="#"> {{ item.bullet1 }}</a>
                    </li>
                    <li>
                      <a href="#"> {{ item.bullet2 }}</a>
                    </li>
                  </div>
                </ul>
              </div>
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
          icon2: "../../public/img/home-2.png",
          text: "Home",
          url: "#",
          bullet1: "Go to Home",
          bullet2: "Go to Pages",
          bullet3: "Go to Blog",
        },
        {
          icon: "../../public/img/document.png",
          icon2: "../../public/img/document-2.png",
          text: "Pages",
          url: "#",
          bullet1: "Ipsum1",
          bullet2: "Ipsum2",
          bullet3: "Ipsum3",
        },
        {
          icon: "../../public/img/printer.png",
          icon2: "../../public/img/printer-2.png",
          text: "Blog",
          url: "#",
          bullet1: "Lorem ipsum1",
          bullet2: "Lorem ipsum2",
          bullet3: "Lorem ipsum3",
        },
        {
          icon: "../../public/img/cart.png",
          icon2: "../../public/img/cart-2.png",
          text: "Shop",
          url: "#",
          bullet1: "Ipsum1",
          bullet2: "Ipsum2",
          bullet3: "Ipsum3",
        },
        {
          icon: "../../public/img/lab.png",
          icon2: "../../public/img/lab-2.png",
          text: "Shortcodes",
          url: "#",
          bullet1: "Lorem ipsum1",
          bullet2: "Lorem ipsum2",
          bullet3: "Lorem ipsum3",
        },
        {
          icon: "../../public/img/chat.png",
          icon2: "../../public/img/chat-2.png",
          text: "Support",
          url: "#",
          bullet1: "Ipsum1",
          bullet2: "Ipsum2",
          bullet3: "Ipsum3",
        },
        {
          icon: "../../public/img/envelope.png",
          icon2: "../../public/img/envelope-2.png",
          text: "Contact",
          url: "#",
          bullet1: "Lorem ipsum1",
          bullet2: "Lorem ipsum2",
          bullet3: "Lorem ipsum3",
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
  height: 130px;
}

.logo {
  height: 100%;
}

li {
  list-style: none;
  padding: 2.2rem 1.5rem;
  text-align: center;
}

.dft-icon,
.hover-icon {
  height: 65%;
  padding-bottom: 0.6rem;
}

a {
  color: $mineshaft;
  text-decoration: none;
  font-size: 1rem;
}

// Style dropdwon menu

li:hover a {
  color: $sugarcane;
}

.dft-icon {
  display: inline-block;
}
.hover-icon {
  display: none;
}

li:hover .dft-icon {
  display: none;
}

li:hover .hover-icon {
  display: inline-block;
}

li:hover {
  background-color: $blazeorange;
}

.dropdown {
  position: static;
}

.dropdown-content {
  display: none;
  position: absolute;
  padding-top: 1rem;
  background-color: $sugarcane;
  width: 100%;
  z-index: 1000;
  left: 0;
  top: 130px;
  border-bottom: 3px solid $blazeorange;
}

li:hover .dropdown-content {
  display: block;
}

.dropdown-content:hover {
  display: block;
}

.small-container {
  width: 60%;
  margin: 0 auto;
}

.list li a {
  color: $blazeorange;
  font-weight: 600;
}

.list li:hover {
  background-color: #554e9e67;

  a {
    color: $sugarcane;
  }
}
</style>
