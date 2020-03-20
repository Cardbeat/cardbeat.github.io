import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  background-color: #083235;
  height: 100%;
  width: 100%;
  z-index: -2;
  text-align: center;
`;

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Fira+Code:700&display=swap");
  font-family: "Fira Code", monospace;
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  font-size: 3vw;
  transform: translate(-50%, -50%);
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.6em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.1em; /* Adjust as needed */
  animation: typing 1.5s steps(50, end), blink-caret 0.75s step-end infinite;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    font-size: 7vw;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 14em;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

const LineV = styled.div`
  display: block;
  position: absolute;
  top: 0;
  width: 3px;
  margin-left: 20%;
  background-color: #016fb9;
  animation: up-down 2s, down-up 2s;
  animation-timing-function: linear;

  @keyframes up-down {
    0% {
      top: 0;
      bottom: 100%;
    }
    100% {
      top: 100%;
      bottom: 0;
    }
  }

  @keyframes down-up {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }
`;

const LineH = styled.div`
  display: block;
  position: absolute;
  top: 60vh;
  height: 3px;
  background-color: #016fb9;
  animation: right-left 2s;
  animation-timing-function: linear;
  overflow-x: hidden;

  @keyframes right-left {
    0% {
      width: 0;
      left: 0;
    }
    100% {
      left: 100vw;
      width: 80vw;
    }
  }
`;

const GlobalStyleForHome = createGlobalStyle`
 html,body {
  background-color: #083235;
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>Jefferson Oliveira</Title>
      <LineV id="lineUp"></LineV>
      <LineH></LineH>
      <GlobalStyleForHome />
    </Container>
  );
}

