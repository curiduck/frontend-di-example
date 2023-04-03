import React, { useMemo } from "react";
import styled from "styled-components";
import Utils from "../../utils";
import { HeaderPropTypes } from "./Header.type";
import { ICompanyService } from "../../services/CompanyServices/ICompanyService";

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

// @ts-ignore
const companyService: ICompanyService =
  // @ts-ignore
  Utils.getContainerByCompanyUrlPath("company");

const Header = () => {
  const companyName = useMemo(() => {
    const companyData: CompanyData = companyService.getCompanyData();
    return companyData.name;
  }, [companyService]);

  return (
    <>
      <HeaderFrame>
        <CompanyName>{companyName}</CompanyName>
      </HeaderFrame>
    </>
  );
};

export default Header;
