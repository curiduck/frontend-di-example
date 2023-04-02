import React from "react";
import styled from "styled-components";
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
      <Header companyName={"Curious Company"} />
      <Body />
      <Footer
        companyInformation={{
          name: "",
          phoneNumber: "",
          ceoName: "",
          email: "",
          registerNumber: "",
        }}
      />
    </AppFrame>
  );
}

export default App;
