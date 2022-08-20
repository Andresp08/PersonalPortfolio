import { DataType } from "./types";
const data: DataType = {
  navBar: {
    button: {
      text: "Reload",
      target: "",
    },
    items: [
      {
        text: "About",
        target: "#about",
      },
      {
        text: "Experience",
        target: "#experience",
      },
      {
        text: "Projects",
        target: "#projects",
      },
      {
        text: "Activity",
        target: "#activity",
      },
      {
        text: "Contact",
        target: "#contact",
      },
    ],
  },
  sectionOne: {
    id: "",
    badge: "Hi, my name is",
    name: "Andrés Pardo",
    slogan: "I build things for the web",
    desc: "I'm a frontend developer passionate about building web applications.",
    button: {
      text: "My resume is coming soon..",
      target: "#",
    },
  },
  social: {
    github: "https://github.com/Andresp08",
    instagram: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/andresfelipepardocampos/",
    codepen: "",
  },
  email: "andresfp292@gmail.com",
  sectionAboutMe: {
    show: true,
    id: "about",
    title: "About Me",
    desc: `<p>Hello, I am a self-taught and self-motivated Front-end developer with unlimited creativity, innovation and passion for web application design and development in different modern technologies.
    I've been building web applications for two years, I've been working as a freelance front-end developer for a year and half. I enjoy and love my work, and I would like to collaborate with you.</p> <p>Here are a few technologies I’ve been working with recently:</p>`,
    list: ["HTML", "CSS", "Sass", "Tailwind Css", "Bootstrap", "JavaScript", "TypeScript", "React", "Next.Js", "Redux"],
    picture: "/image.jpg",
  },
  sectionWork: {
    show: true,
    title: "Where I’ve Worked",
    id: "experience",
    tabs: [
      {
        tabName: "Front-End Developer",
        content: {
          title: "Front-End developer React Js - Talwind Css",
          company: { name: "Freelance", link: "#" },
          date: "January 2022 - August 2022 . 8 months",
          contentList: [
            "I built diferent web aplications using modern technologies, like React Js, Next Js, Tailwind Css, Redux and more",
            "I built custom components for reuse code, awesome user interfaces with UX/UI experience",
            "Work with Html, Css, Bootstrap, Sass, Styled Components and more.."
          ],
        },
      },
      {
        tabName: "Web Designer",
        content: {
          title: "Web Designer",
          company: { name: "Freelance", link: "#" },
          date: "May 2021 - December 2022 . 7 months",
          contentList: [
            "I built multiple websites using awesome animations, mobile first standard and 100% responsive websites.",
            "Build websites design from scratch",
            "Work with styling libraries and tools for building awesome user interface designs",
          ],
        },
      },
    ],
  },
  sectionProjects: {
    show: true,
    id: "projects",
    title: "Some Things I’ve Built",
    projects: [
      {
        image: "/hoobank.png",
        badge: "Featured Project",
        title: "Hoobank",
        description:
          "A ladingpage for Hoobank App the Next generation payment method.",
        tags: ["React", "Tailwind Css", "Modern UX/UI"],
        link: "https://hoobankk-app.netlify.app/",
        github: "https://github.com/Andresp08/hookbank-web",
        direction: "rtl",
      },
      {
        image: "/realtor.jpg",
        badge: "Featured Project",
        title: "Realtor App",
        description: "Rental homes for everyone, find, buy and own your dream home just in a click with this amazing app",
        tags: ["Rapid Api", "Chakra UI", "Next.js", "Javascript"],
        link: "https://realtor-app-eta.vercel.app/",
        github: "https://github.com/Andresp08/Realtor_App",
        direction: "ltr",
      },
      {
        image: "/gym.jpg",
        badge: "Featured project",
        title: "Exercise Gym App",
        description: "Web application related to gym exercises, performs multiple API calls to Rapid-Api, with Material UI, and react-router-dom",
        tags: ["React", "React-Router-Dom", "Material-UI", ],
        link: "https://gym-app-gold.netlify.app/",
        github: "https://github.com/Andresp08/excercise_gym_app",
        direction: "rtl",
      },
    ],
  },
  sectionMoreProjects: {
    id: "",
    show: true,
    title: "Other Noteworthy Projects",
    projects: [
      {
        title: "Delivey App",
        description: "Show movies and series information",
        tags: ["Css", "SASS", "Responsive Desing"],
        link: "https://deliveryappw.netlify.app/",
        github: "https://github.com/Andresp08/DeliveryApp",
      },
      {
        title: "Fiver Page",
        description: "Clone from fiver website",
        tags: ["Bootstrap", "Css", "Responsive Design"],
        link: "https://andresp08.github.io/FiverPage/",
        github: "https://github.com/Andresp08/FiverPage",
      },
      {
        title: "GuitarLA",
        description: "Custome Website for a Guitar Store",
        tags: ["Sass", "Responsive Design", "Animate Css"],
        link: "https://competent-sammet-a1a445.netlify.app/",
        github: "https://github.com/Andresp08/GuitarLA",
      },
    ],
  },
  sectionContact: {
    show: true,
    id: "contact",
    badge: "05. What's Next?",
    title: "Get In Touch",
    description:
      "My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    buttons: [
      {
        text: "📩 Send Email",
        target: "mailto:andresfp292@gmail.com",
      },
      {
        text: `📞 WhatsApp`,
        target:
          "https://api.whatsapp.com/send/?phone=+573118340188&text=Hello+Andres%21+I+would+like+to+collaborate+with+you",
      },
    ],
  },
  sectionCodingActivity: {
    title: "Coding Activity",
    id: "activity",
    number: 4,
    src: [
      "https://wakatime.com/share/@6d1942db-fe72-4cf8-bdae-485d39b2c16a/403afa8b-ac5c-4205-aa98-d7684d38b7eb.svg",
      "https://wakatime.com/share/@6d1942db-fe72-4cf8-bdae-485d39b2c16a/0f4586fa-7045-4a34-abc1-8e9bc6ffc662.svg",
    ],
  },
};

export const {
  sectionContact,
  navBar,
  email,
  social,
  sectionOne,
  sectionAboutMe,
  sectionWork,
  sectionProjects,
  sectionMoreProjects,
  sectionCodingActivity,
} = data;
export default data;
