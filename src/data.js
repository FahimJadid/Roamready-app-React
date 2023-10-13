import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.linkedin.com", icon: "fab fa-linkedin" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },

  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },

  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "october 28th, 2024",
    title: "tibet adventure",
    info: "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum non hic ab, at labore molestiae incidunt atque quidem eaque eius, reiciendis maxime voluptatum dolorem deserunt ducimus, corrupti voluptate nobis.",
    location: "china",
    duration: 10,
    cost: 6000,
  },

  {
    id: 2,
    image: tour2,
    date: "novemver 18th, 2024",
    title: "best of java",
    info: "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum non hic ab, at labore molestiae incidunt atque quidem eaque eius, reiciendis maxime voluptatum dolorem deserunt ducimus, corrupti voluptate nobis.",
    location: "indonesia",
    duration: 6,
    cost: 3000,
  },

  {
    id: 3,
    image: tour3,
    date: "january 14th, 2024",
    title: "explore hong kong",
    info: "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum non hic ab, at labore molestiae incidunt atque quidem eaque eius, reiciendis maxime voluptatum dolorem deserunt ducimus, corrupti voluptate nobis.",
    location: "hong kong",
    duration: 7,
    cost: 5000,
  },

  {
    id: 4,
    image: tour4,
    date: "february 28th, 2024",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum non hic ab, at labore molestiae incidunt atque quidem eaque eius, reiciendis maxime voluptatum dolorem deserunt ducimus, corrupti voluptate nobis.",
    location: "kenya",
    duration: 6,
    cost: 2000,
  },

  {
    id: 5,
    image: tour5,
    date: "april 19th, 2024",
    title: "nothing like australia",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum non hic ab, at labore molestiae incidunt atque quidem eaque eius, reiciendis maxime voluptatum dolorem deserunt ducimus, corrupti voluptate nobis.",
    location: "australia",
    duration: 6,
    cost: 8000,
  },

  {
    id: 6,
    image: tour6,
    date: "march 24th, 2024",
    title: "land of enchantments",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum non hic ab, at labore molestiae incidunt atque quidem eaque eius, reiciendis maxime voluptatum dolorem deserunt ducimus, corrupti voluptate nobis.",
    location: "india",
    duration: 9,
    cost: 6000,
  },
];
