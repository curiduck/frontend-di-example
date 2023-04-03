import React from "react";
import "reflect-metadata";
import styled from "styled-components";
import Views from "../Views";

const GridDataField = styled.div`
  flex: 9 9 0;
`;

function DataPanel() {
  return (
    <GridDataField>
      <Views.CardView />
    </GridDataField>
  );
}

export default DataPanel;
