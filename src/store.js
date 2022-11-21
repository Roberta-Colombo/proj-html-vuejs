import { reactive } from "vue";

export const store = reactive({
  sections: {
    sectionOne: {
      title: "Welcome to Fable",
      subtitle: "Fable daycare, preschool and kindergarten",
    },
    sectionTwo: {
      title: "Our Classes",
      subtitle: "Our preschool program has four dedicated classes",
    },
    sectionThree: {
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
});
