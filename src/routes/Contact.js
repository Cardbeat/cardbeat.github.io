import React from "react";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  background-color: #083235;
  color: white;
`;

const Email = styled.div`
  position: relative;
  top: 30%;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  color: white;
  @media only screen and (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;

const Grid = styled.div`
  position: relative;
  top: 40%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  height: 20px;
  text-align: center;
  display: inline-block;
  margin: 10px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: white;
`;

export default function Contact() {
  return (
    <>
      <Container>
        <Email>jeffersonoliveiradev@gmail.com</Email>
        <Grid>
          <Item>
            <Anchor
              href="https://www.linkedin.com/in/jefferson-oliveira-dev/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </Anchor>
          </Item>
          <Item>
            <Anchor href="https://twitter.com/cardbeatt" target="_blank">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </Anchor>
          </Item>
        </Grid>
      </Container>
      <GlobalStyle />
    </>
  );
}
