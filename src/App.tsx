import React from "react";
import styled from "styled-components";
import Container from "typedi";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppFrame = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppFrame>
      <Header />
      <Body />
      <Footer />
    </AppFrame>
  );
}

export default App;
