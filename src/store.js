import { reactive } from "vue";

export const store = reactive({
  sections: {
    sectionOne: {
      title: "Welcome to Fable",
      subtitle: "Fable daycare, preschool and kindergarten",
    },
    sectionThree: {
      title: "Our Classes",
      subtitle: "Our preschool program has four dedicated classes",
    },
    sectionFive: {
      title: "What's New",
      subtitle: "Keep up to date with the latest news",
    },
    contacts: {
      title: "Contact us",
      subtitle: "Our postal address and contact details",
    },
  },
  ctas: {
    ctaOne: {
      text: "How to Enroll Your Child to a Class?",
      btn: "Learn More",
    },
    ctaTwo: {
      text: "See Our Kindergarten Photo Gallery!",
      btn: "View Gallery",
    },
  },
  cards: {
    first: {
      name: "Little Lambs",
      age: "12-24",
      ageDescription: "Month",
      classSize: "9",
      image: "../public/img/class_01-690x506.jpg",
    },
    second: {
      name: "Bouncy Bears",
      age: "2-3",
      ageDescription: "Year",
      classSize: "12",
      image: "../public/img/class_02-690x506.jpg",
    },
    third: {
      name: "Tenderhearts",
      age: "3-4",
      ageDescription: "Year",
      classSize: "15",
      image: "../public/img/class_03-690x506.jpg",
    },
    fourth: {
      name: "Shining Stars",
      age: "4-5",
      ageDescription: "Year",
      classSize: "20",
      image: "../public/img/class_04-690x506.jpg",
    },
  },
});
