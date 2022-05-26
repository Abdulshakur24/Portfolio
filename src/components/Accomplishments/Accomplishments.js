import React from "react";
import { achievements } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const Acomplishments = () => (
  <Section>
    <SectionTitle
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 0, x: -100, y: 0 },
      }}
    >
      Personal Achievements
    </SectionTitle>
    <Boxes
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 0, x: -100, y: 0 },
      }}
    >
      {achievements.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
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

export default Acomplishments;
