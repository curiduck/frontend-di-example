import React, { useMemo } from "react";
import styled from "styled-components";
import Utils from "../../utils";
import { ICompanyService } from "../../services/CompanyServices/ICompanyService";

const FooterFrame = styled.div`
  //display: flex;
  flex: 2 2 0;
  background-color: #a084dc;
`;
const CompanyInformationWrapper = styled.div`
  margin-left: 100px;
`;
const CompanyInformation = styled.ul`
  list-style: none;
  color: white;
  font-size: 12pt;
  font-weight: 700;
  line-height: 30px;
`;

const companyService: ICompanyService =
  Utils.getContainerByCompanyUrlPath("company");

const Footer = () => {
  const companyInformation = useMemo(() => {
    const companyData = companyService.getCompanyData();
    return companyData;
  }, [companyService]);

  const { name, contactNumber, ceoName, email, registerNumber }: CompanyData =
    companyInformation;

  return (
    <>
      <FooterFrame>
        <CompanyInformationWrapper>
          <CompanyInformation>
            <li>Name: {name}</li>
            <li>Tel: {contactNumber}</li>
            <li>CEO: {ceoName}</li>
            <li>Email: {email}</li>
            <li>Register Number: {registerNumber}</li>
          </CompanyInformation>
        </CompanyInformationWrapper>
      </FooterFrame>
    </>
  );
};

export default Footer;
