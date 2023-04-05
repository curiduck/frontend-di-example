import React, { useMemo } from "react";
import {
  useCompanyData,
  useCompanyDescriptions,
  useCompanyPhotos,
} from "./hooks/CompanyData";
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
  const [companyData] = useCompanyData();
  const [companyDescriptions] = useCompanyDescriptions();
  const [companyPhotos] = useCompanyPhotos();

  return (
    <AppFrame>
      <Header companyName={companyData.name} />
      <Body
        companyDescriptions={companyDescriptions}
        companyPhotos={companyPhotos}
      />
      <Footer companyData={companyData} />
    </AppFrame>
  );
}

export default App;
