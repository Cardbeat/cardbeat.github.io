import React from "react";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Technologies = styled.div`
  position: absolute;
  height: 50vh;
  width: 100vw;
  background-color: blue;
  overflow: hidden;
  bottom: 0;
`;

const Bio = styled.div`
  position: absolute;
  height: 50vh;
  width: 100vw;
  margin: 0 auto;
  background-color: #083235;
  color: white;
  overflow: hidden;
  top: 0;
`;

const Title = styled.div`
  position: relative;
  top: 120px;
  width: 50%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const Terminal = styled.div`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50%;
  background-color: black;
  z-index: 2;
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
    width: 90vw;
    top: 55%;
  }
`;

const TerminalTitle = styled.div`
  margin-top: 2px;
  margin-right: 2px;
  height: 1rem;
  color: white;
  background-color: black;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  border-radius: 5px;
`;

const Button = styled.div`
  height: 0.9em;
  width: 0.9em;
  border-radius: 50%;
  margin-right: 2px;
  margin: 2px;
`;

const Yellow = styled(Button)`
  background-color: #ffcd00;
`;

const Orange = styled(Button)`
  background-color: #ff9600;
`;
const Red = styled(Button)`
  background-color: #ff2851;
`;
const TerminalDisplay = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 90%;
  display: flex;
  flex-flow: column;
  color: white;
  border-radius: 5px;
`;

const TerminalTyped = styled.div`
  color: lightgray;
`;

const TerminalRender = styled.div`
  color: skyblue;
`;

const TerminalLine = styled.span`
  color: red;
`;

export default function About() {
  return (
    <>
      <Container>
        <Bio>
          <Title>
            Hi! My name is Jefferson, I&apos;m a technology enthusiast.
            <br /> My journey started in 2016 , but I have the desire to learn
            since my childhood.
          </Title>
        </Bio>
        <Terminal>
          <TerminalTitle>
            <Yellow />
            <Orange />
            <Red />
          </TerminalTitle>
          <TerminalDisplay>
            <TerminalTyped>
              <TerminalLine>~</TerminalLine> cd Technologies/{" "}
            </TerminalTyped>
            <TerminalTyped>
              <TerminalLine>~</TerminalLine>/Technologies/
              Languages&Libs&Frameworks/ ls{" "}
            </TerminalTyped>
            <TerminalRender>
              HTML CSS SASS JavaScript Node React Redux Python Ruby Rails
            </TerminalRender>
            <TerminalTyped>
              <TerminalLine>~</TerminalLine>/Technologies/ Databases/ ls{" "}
            </TerminalTyped>
            <TerminalRender>MySQL PostgreSQL Firebase MongoDB </TerminalRender>
          </TerminalDisplay>
        </Terminal>
        <Technologies> </Technologies>
      </Container>
      <GlobalStyle />
    </>
  );
}
