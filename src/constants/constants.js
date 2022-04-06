import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "../components/Header/HeaderStyles";

export const info = {
  purpose:
    "I am a conscientious person who works hard and pays attention to detail. I am flexible, quick to pick up new skills, and eager to learn from others. ",
};

export const projects = [
  {
    title: "Audiophile",
    description:
      "This is a multi-page website that focuses on audio gear. It is made with PostgresSQL for the backend and can easily be scaled for more products.",
    image: require("../assets/audiophile.jpg"),
    tags: ["React", "PostgreSQL", "NodeJS", "Express", "Passport JS"],
    source: "https://github.com/Abdulshakur24/audiophile",
    visit: "https://audiophile-by-ashakur.netlify.app/",
    id: 0,
  },
  {
    title: "Social Media",
    description:
      "A full-stack social media, where you can log in with google authentication and create your own feeds/pins!",
    image: require("../assets/social.jpg"),
    tags: ["React", "Tailwindcss", "Sanity"],
    source: "https://github.com/Abdulshakur24/social-media",
    visit: "https://social-media-by-ashakur.netlify.app/login",
    id: 1,
  },
  // {
  //   title: "Cryptocurrency",
  //   description:
  //     "A cryptocurrency tracker is a type of app that shows your real-time information on cryptocurrency prices.",
  //   image: require("../assets/crypto.jpg"),
  //   tags: ["React", "ChartJS", "React Redux"],
  //   source: "https://github.com/Abdulshakur24/crtypo-app-react",
  //   visit: "https://crypto-verse24.netlify.app/",
  //   id: 2,
  // },
  {
    title: "Reddit Client",
    description:
      "Reddit is a read-only web app client for Reddit Smooth reading experience on web browser.",
    image: require("../assets/reddit.jpg"),
    tags: ["React", "React Redux"],
    source: "https://github.com/Abdulshakur24/reddits-client",
    visit: "https://reddit-clients.netlify.app/",
    id: 3,
  },
  {
    title: "Real Estate",
    description:
      "A fully functional real estate web app uses an API that helps to query real estate in UAE.",
    image: require("../assets/realtor.jpg"),
    tags: ["React", "NextJS", "Rapid APIs"],
    source: "https://github.com/Abdulshakur24/real-estate",
    visit: "https://real-estate-rouge.vercel.app/",
    id: 4,
  },
  {
    title: "Blog App",
    description:
      "This Blog app allows you to post, edit, comment, save and view your blog posts.",
    image: require("../assets/blog.jpg"),
    tags: ["React", "NextJS", "Graphql"],
    source: "https://github.com/Abdulshakur24/blog_app",
    visit: "https://blog-app-bice.vercel.app/",
    id: 5,
  },
];

export const TimeLineData = [
  { year: 2019, text: "Started my Front-end career." },
  { year: 2020, text: "Decided to move to Full-stack Engineer." },
  { year: 2021, text: "Started building ambigious projects." },
  { year: 2022, text: "Goals: Work as a freelancer, or remotely." },
];

export const sociallinks = [
  {
    component: (index) => (
      <SocialIcons
        key={index}
        href="https://github.com/Abdulshakur24"
        target={"_blank"}
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
    ),
  },
  {
    component: (index) => (
      <SocialIcons
        key={index}
        href="https://www.linkedin.com/in/abdulshakur-abubakar-96b846219/"
        target={"_blank"}
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    ),
  },
  {
    component: (index) => (
      <SocialIcons
        key={index}
        href="https://www.instagram.com/abdulshakur_24/"
        target={"_blank"}
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    ),
  },
];

export const technologies = {
  title:
    "I've worked with a range a technologies in the web development world. From Front-end to Full-stack Engineer.",
  frontEnd: "Experiece with <br/> React.js",
  backEnd:
    "Experience with Node, Express <br/> and Databases(PostgresSQL, MongoDB).",
  uiOrux: "Basic knowledge in <br/> tools like Figma.",
};

export const aboutMe = {
  title:
    "My name is Abdulshakur, I am a Full-stack Engineer(PERN Stack). This portfolio represents a few things that inspire me about my works.",
};

export const achievements = [{ number: 20, text: "Open Source Projects" }];

export const contacts = {
  tel: "+254 707049885",
  email: "ashakur.js24@gmail.com",
};
