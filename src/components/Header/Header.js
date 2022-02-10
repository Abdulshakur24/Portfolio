import React from "react";
import { DiCssdeck } from "react-icons/di";
import { sociallinks } from "../../constants/constants";
import { Link } from "react-scroll";

import { Container, Div1, Div2, Div3, NavLink } from "./HeaderStyles";
import { useTransform, useViewportScroll } from "framer-motion";

const Header = () => {
  const { scrollY } = useViewportScroll();
  const x = useTransform;
  const y = useTransform;
  const opacity = useTransform;

  return (
    <Container>
      <Div1
        initial={{ y: 0, x: -1000, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        style={{
          x: x(scrollY, [0, 100], [0, -100]),
          y: y(scrollY, [0, 100], [0, -10]),
          opacity: opacity(scrollY, [0, 40], [1, 0.3]),
        }}
      >
        <Link
          className="link"
          activeClass="active"
          to="/"
          smooth={true}
          duration={1000}
          delay={0}
        >
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </Link>
      </Div1>
      <Div2
        initial={{ y: 1000, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        style={{
          x: x(scrollY, [0, 100], [0, 0]),
          y: y(scrollY, [0, 100], [0, -100]),
          opacity: opacity(scrollY, [0, 40], [1, 0.3]),
        }}
      >
        <Link
          activeClass="active"
          to="projects"
          smooth={true}
          duration={1000}
          delay={0}
        >
          <NavLink>Projects</NavLink>
        </Link>
        <Link
          activeClass="active"
          to="tech"
          smooth={true}
          duration={1000}
          delay={0}
          as={<NavLink />}
        >
          <NavLink>Technologies</NavLink>
        </Link>
        <Link
          activeClass="active"
          to="about"
          smooth={true}
          duration={1000}
          delay={0}
        >
          <NavLink>About</NavLink>
        </Link>
      </Div2>
      <Div3
        initial={{ y: 0, x: 1000, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        style={{
          x: x(scrollY, [0, 100], [0, 100]),
          y: y(scrollY, [0, 100], [0, 0]),
          opacity: opacity(scrollY, [0, 40], [1, 0.3]),
        }}
      >
        {sociallinks.map(({ component }, index) => component(index))}
      </Div3>
    </Container>
  );
};

export default Header;