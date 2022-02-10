import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { motion } from "framer-motion";

function SlideInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 0, x: 0, y: -100 },
      }}
    >
      {children}
    </motion.div>
  );
}

const BlogCardComponent = ({ p, tags }) => {
  return (
    <SlideInWhenVisible>
      <BlogCard>
        <Img src={p.image} alt={p.title} />
        <TitleContent>
          <HeaderThree>{p.title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo className="card-info">{p.description}</CardInfo>
        <div>
          <TitleContent>Stack:</TitleContent>
          <TagList>
            {p.tags.map((t, index) => {
              return <Tag key={index}>{t}</Tag>;
            })}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={p.visit} target={"_blank"}>
            Visit
          </ExternalLinks>
          <ExternalLinks href={p.source} target={"_blank"}>
            Source
          </ExternalLinks>
        </UtilityList>
      </BlogCard>
    </SlideInWhenVisible>
  );
};

const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider
        initial={{ y: 0, x: -1000, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        divider="true"
      />
      <SectionTitle
        initial={{ y: 0, x: -1000, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Projects
      </SectionTitle>
      <GridContainer>
        {projects.map((p, index) => {
          return <BlogCardComponent key={p.id} p={p} />;
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
