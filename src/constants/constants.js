import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "../components/Header/HeaderStyles";

export const info = {
  purpose:
    "I'm a self-taught MERN/PERN Stack developer. I am currently exploring some of the advanced/guru projects. I love all things about front-end design/development and am looking for a job to take my passion to the next level!",
};

export const projects = [
  {
    title: "BAG",
    description:
      "This project uses a third-party API called restcountries to fetch countries that allow users to explore and save any country to MongoDB (and my most complex by far).",
    image: require("../assets/bag.jpg"),
    tags: ["MongoDB", "ReactJS", "Express", "NodeJS", "Mantine UI"],
    source: "https://github.com/Abdulshakur24/bag-challenge",
    visit: "https://bag-2022.herokuapp.com/",
    id: 0,
  },
  {
    title: "Audiophile",
    description:
      "This is a multi-page website that focuses on audio gear. It is made with PostgresSQL for the backend and can easily be scaled for more products.",
    image: require("../assets/audiophile.jpg"),
    tags: ["ReactJS", "PostgreSQL", "NodeJS", "Express", "Passport JS"],
    source: "https://github.com/Abdulshakur24/e-commerce",
    visit: "https://audiophile-e-commerce.herokuapp.com/",
    id: 1,
  },
  {
    title: "Space Tourism",
    description:
      "This is a challenging front-end project from Front-end Mentor. I was provided with Figma designs to transform them into a fully functional website.",
    image: require("../assets/space-tourism.jpg"),
    tags: ["ReactJS", "Styled components", "Framer motion"],
    source: "https://github.com/Abdulshakur24/space-tourism",
    visit: "https://space-tourism-by-ashakur.netlify.app/",
    id: 2,
  },
  {
    title: "Reddit Client",
    description:
      "Reddit is a read-only web app client for Reddit Smooth reading experience on web browser.",
    image: require("../assets/reddit.jpg"),
    tags: ["ReactJS", "React Redux"],
    source: "https://github.com/Abdulshakur24/reddits-client",
    visit: "https://reddit-clients.netlify.app/",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2019, text: "Started my Front-end career." },
  { year: 2020, text: "I decided to transit to Full-stack Engineer." },
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
        <AiFillGithub size="2rem" />
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
        <AiFillLinkedin size="2rem" />
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
        <AiFillInstagram size="2rem" />
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

export const achievements = [{ number: 20, text: "Repositories" }];

export const contacts = {
  tel: "+254 707049885",
  email: "ashakur.js24@gmail.com",
};
