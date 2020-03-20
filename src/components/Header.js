import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Container = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  justify-content: end;
  position: relative;
  top: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  z-index: 1;
`;

const HomeButton = styled(Link)`
  text-decoration: none;
  z-index: 1;
  color: white;
  position: absolute;
  margin-left: 1rem;
`;

const element = <FontAwesomeIcon icon={faCode} />;

const Header = () => (
  <Container>
    <HomeButton to="/">{element}</HomeButton>
    <StyledLink to="about">ABOUT</StyledLink>
    <StyledLink to="projects">PROJECTS</StyledLink>
    <StyledLink to="contact">CONTACT</StyledLink>
  </Container>
);

export default Header;

