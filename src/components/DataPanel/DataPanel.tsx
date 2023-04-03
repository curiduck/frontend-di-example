import React from "react";
import "reflect-metadata";
import { Container, Inject } from "typedi";

import styled from "styled-components";
import Views from "../Views";

import { ICompanyService } from "../../services/CompanyServices/ICompanyService";
import { DefaultCompanyServiceImpl } from "../../services/CompanyServices/DefaultCompanyServieImpl";

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
