import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 100% 100% 100% 100%;
`;

const Section = styled.section`
  display: block;
  width: 100%;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Section>{children}</Section>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

