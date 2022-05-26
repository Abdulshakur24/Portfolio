import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { technologies } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const motionOptions = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.5, delay: 0.15 },
  variants: {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: 0, y: -100 },
  },
};

const Technologies = () => (
  <Section id="tech">
    <SectionDivider
      divider="true"
      initial="hidden"
      whileInView="visible"
      viewport={motionOptions.viewport}
      transition={motionOptions.transition}
      variants={motionOptions.variants}
    />
    <SectionTitle
      initial="hidden"
      whileInView="visible"
      viewport={motionOptions.viewport}
      transition={motionOptions.transition}
      variants={motionOptions.variants}
    >
      Technologies
    </SectionTitle>
    <SectionText
      initial="hidden"
      whileInView="visible"
      viewport={motionOptions.viewport}
      transition={motionOptions.transition}
      variants={motionOptions.variants}
    >
      {technologies.title}
    </SectionText>
    <List>
      <ListItem
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: -100, y: 0 },
        }}
      >
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph
            dangerouslySetInnerHTML={{ __html: technologies.frontEnd }}
          />
        </ListContainer>
      </ListItem>
      <ListItem
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: 0, y: -100 },
        }}
      >
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph
            dangerouslySetInnerHTML={{ __html: technologies.backEnd }}
          />
        </ListContainer>
      </ListItem>
      <ListItem
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: 100, y: 0 },
        }}
      >
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph
            dangerouslySetInnerHTML={{ __html: technologies.uiOrux }}
          />
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 0, x: -100, y: 0 },
      }}
    />
  </Section>
);

export default Technologies;
