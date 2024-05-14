import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "src/components/Header/HeaderStyles";
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
    title: "Brain Bot",
    description:
      "BrainBot is a Learning Management System (LMS) that seamlessly integrates the power of ChatGPT (API) to enhance the learning experience.",
    image: new URL("../assets/preview.png", import.meta.url).href,
    tags: ["MySQL", "Express", "React", "NodeJS"],
    videoCode: "brain-bot_ieos83",
    // source: "https://github.com/Abdulshakur24/brain-bot",
    visit: "https://brain-bot.online",
    id: 0,
  },
  {
    title: "TikTok Clone",
    description:
      "Experience the thrill of short-form video with our TikTok Clone. Post, comment, and like with Google authentication, built on NextJS and ReactJS.",
    image: new URL("../assets/tiktok-clone.png", import.meta.url).href,
    tags: ["NextJS", "ReactJS", "SANITY", "Framer Motion"],
    videoCode: "tiktok-clone_bt7ood",
    source: "https://github.com/Abdulshakur24/tiktok-clone",
    visit: "https://tiktok-clone-by-ashakur.vercel.app/",
    id: 1,
  },
  {
    title: "Real Estate (Emirates)",
    description:
      "Explore and filter properties on our Real Estate platform, integrated with Bayut API for a comprehensive search experience. Built with NextJS and ReactJS.",
    image: new URL("../assets/realtor.jpg", import.meta.url).href,
    tags: ["NextJS", "ReactJS", "Chakra UI", "Framer Motion"],
    videoCode: "realtor_bcuv0z",
    source: "https://github.com/Abdulshakur24/real-estate",
    visit: "https://real-estate-by-ashakur.vercel.app/",
    id: 2,
  },
  // {
  //   title: "BAG",
  //   description:
  //     "This project uses a third-party API called restcountries to fetch countries that allow users to explore and save any country to MongoDB.",
  //   image: new URL("../assets/bag.jpg", import.meta.url).href,
  //   tags: ["MongoDB", "ReactJS", "Express", "NodeJS", "Mantine UI"],
  //   source: "#",
  //   visit: "#",
  //   id: 3,
  // },
  {
    title: "Audiophile",
    description:
      "Discover high-quality audio gear on our multi-page Audiophile website, scalable and backed with PostgreSQL. Developed using ReactJS and NodeJS.",
    image: new URL("../assets/audiophile.jpg", import.meta.url).href,
    tags: ["ReactJS", "PostgreSQL", "NodeJS", "Express", "Passport JS"],
    videoCode: "audiophile_pqmhnb",
    source: "https://github.com/Abdulshakur24/e-commerce",
    visit: "https://audiophile-by-ashakur.netlify.app",
    id: 4,
  },
  {
    title: "Space Tourism",
    description:
      "Embark on a digital journey with our Space Tourism website, a project challenging front-end skills to bring Figma designs to life using ReactJS.",
    image: new URL("../assets/space-tourism.jpg", import.meta.url).href,
    tags: ["ReactJS", "Styled components", "Framer motion"],
    videoCode: "space-tourism_jvyyzh",
    source: "https://github.com/Abdulshakur24/space-tourism",
    visit: "https://space-tourism-by-ashakur.netlify.app/",
    id: 5,
  },
  // {
  //   title: "Reddit Client",
  //   description:
  //     "Reddit is a read-only web app client for Reddit Smooth reading experience on web browser.",
  //   image: new URL("../assets/reddit.jpg", import.meta.url).href,
  //   tags: ["ReactJS", "React Redux"],
  //   source: "#",
  //   visit: "#",
  //   id: 6,
  // },
];

export const TimeLineData: timeLineDataProps = [
  { year: 2019, text: "Began my front-end development journey." },
  { year: 2020, text: "Expanded my skills towards full-stack development." },
  { year: 2021, text: "Embarked on ambitious project development." },
  { year: 2022, text: "Set goals for freelance or remote work opportunities." },
  { year: 2023, text: "Returned to university for further education." },
  { year: 2024, text: "Continuing academic studies." },
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
  frontEnd: "Experience with <br/> CRA, NextJS, and Laravel.",
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
