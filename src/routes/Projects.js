import React from "react";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import Card from "../components/Card";
import nautica from "../images/voo-nautica.png";
import pinclone from "../images/pinclone.png";
import btc from "../images/btc.png";
import drawdat from "../images/draw-dat.png";

const projects = [
  {
    name: "Voo-Nautica",
    img: nautica,
    description: "Rails app with posgresql db",
    demo: "https://voo-nautica.herokuapp.com/",
    code: "https://github.com/Cardbeat/voo-nautica"
  },
  {
    name: "Pinterest clone",
    img: pinclone,
    description: "React/Redux app with firebase and material ui ",
    demo: "https://cardbeat-pinterest-clone-fcc-1.glitch.me/",
    code: "https://github.com/Cardbeat/pinterest-clone-fcc"
  },
  {
    name: "Book trading club",
    img: btc,
    description: "React/Redux app with firebase db",
    demo: "https://cardbeat-book-trading-club-3.glitch.me",
    code: "https://github.com/Cardbeat/book-trading-club"
  },
  {
    name: "Draw Dat",
    img: drawdat,
    description: "React/Redux app with mongodb",
    demo: "https://github.com/Cardbeat/whiteboard-app",
    code: "https://github.com/Cardbeat/whiteboard-app"
  }
];

const Container = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  margin: 0 auto;
  background-color: #083235;
  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Grid = styled.div`
  position: relative;
  top: 20%;
  display: grid;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  height: 400px;
  margin: 0;
  padding: 0;
`;

const Reference = styled.div`
  @media only screen and (max-width: 768px) {
    width: 80%;
    text-align: justify;
    margin: 0 auto;
  }

  text-align: center;
  position: relative;
  top: 15%;
  color: white;
`;

const Links = styled.a`
  text-decoration: none;
  font-weight: 900;
  color: skyblue;

  &:hover {
    color: blue;
  }
`;

export default function Projects() {
  return (
    <Container>
      <Reference>
        you can check it out some of my other projects on my{" "}
        <Links target="_blank" href="https://github.com/Cardbeat">
          Github{" "}
        </Links>
        and{" "}
        <Links target="_blank" href="https://codepen.io/Cardbeat ">
          Codepen
        </Links>
        .
      </Reference>
      <Grid>
        {projects.map((project, index) => {
          return (
            <Item key={index}>
              <Card
                name={project.name}
                img={project.img}
                description={project.description}
                demo={project.demo}
                code={project.code}
              />
            </Item>
          );
        })}
      </Grid>
      <GlobalStyle />
    </Container>
  );
}

