import React from "react";
import styled from "styled-components";
import { HeaderPropTypes } from "./Header.type";

const HeaderFrame = styled.div`
  display: flex;
  flex: 1 1 0;
  background-color: #645cbb;
  justify-content: center;
  position: relative;
  box-shadow: 3px 3px 3px 3px lightgrey;
`;

const CompanyName = styled.div`
  display: flex;
  font-size: 30pt;
  font-weight: 700;
  color: white;
  align-items: center;
`;

const Header = ({ companyName }: HeaderPropTypes) => (
  <>
    <HeaderFrame>
      <CompanyName>{companyName}</CompanyName>
    </HeaderFrame>
  </>
);

export default Header;
