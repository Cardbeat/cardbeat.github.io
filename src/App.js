import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Layout from "./components/Layout";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyle";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Layout>
      <GlobalStyle />
    </Router>
  );
}

export default App;

