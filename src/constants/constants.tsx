import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "../components/Header/HeaderStyles";
import {
  aboutMeProps,
  achievementsProps,
  contactsProps,
  infoProps,
  projectsProps,
  socialLinksProps,
  technologiesProps,
  timeLineDataProps,
} from "src/types/default";

export const info: infoProps = {
  purpose:
    "I am a self-taught MERN/PERN Stack developer, currently exploring some of the advanced/guru projects.",
};

export const projects: projectsProps = [
  {
    title: "BAG",
    description:
      "This project uses a third-party API called restcountries to fetch countries that allow users to explore and save any country to MongoDB (and my most complex by far).",
    image: require("../assets/bag.jpg"),
    tags: ["MongoDB", "ReactJS", "Express", "NodeJS", "Mantine UI"],
    source: "https://github.com/Abdulshakur24/bag-challenge",
    visit: "https://explore-countries-2022.herokuapp.com/",
    id: 0,
  },
  {
    title: "Audiophile",
    description:
      "This is a multi-page website that focuses on audio gear. It is made with PostgresSQL for the backend and can easily be scaled for more products.",
    image: require("../assets/audiophile.jpg"),
    tags: ["ReactJS", "PostgreSQL", "NodeJS", "Express", "Passport JS"],
    source: "https://github.com/Abdulshakur24/e-commerce",
    visit: "https://e-commerce-2022.herokuapp.com/",
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

export const TimeLineData: timeLineDataProps = [
  { year: 2019, text: "Started my Front-end career." },
  { year: 2020, text: "I decided to transit to Full-stack Engineer." },
  { year: 2021, text: "Started building ambigious projects." },
  { year: 2022, text: "Goals: Work as a freelancer, or remotely." },
];

export const sociallinks: socialLinksProps = [
  {
    component: (index) => (
      <SocialIcons
        key={index}
        href="https://github.com/Abdulshakur24"
        target={"_blank"}
      >
        <AiFillGithub size="2.5rem" />
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
        <AiFillLinkedin size="2.5rem" />
      </SocialIcons>
    ),
  },
  {
    component: (index) => (
      <SocialIcons
        key={index}
        href="https://twitter.com/Ashakur_js24"
        target={"_blank"}
      >
        <AiOutlineTwitter size="2.5rem" />
      </SocialIcons>
    ),
  },
];

export const technologies: technologiesProps = {
  title:
    "I have worked with a range of technologies in the web development world, from Front-end to Full-stack engineering.",
  frontEnd: "Experience with <br/> React.js",
  backEnd:
    "Experience with Node, Express <br/> and Databases(PostgresSQL, MongoDB).",
  uiOrux: "Basic knowledge in <br/> tools like Figma.",
};

export const aboutMe: aboutMeProps = {
  title:
    "My name is Abdulshakur; I love all things about front-end design/development and am looking for a job to take my passion to the next level!",
};

export const achievements: achievementsProps = [
  { number: 20, text: "Repositories" },
];

export const contacts: contactsProps = {
  tel: "+254 707049885",
  email: "ashakur.js24@gmail.com",
};
