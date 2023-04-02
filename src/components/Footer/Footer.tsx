import React from "react";
import styled from "styled-components";
import { FooterPropTypes } from "./Footer.type";

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
const Footer = ({ companyInformation }: FooterPropTypes) => {
  const { name, phoneNumber, ceoName, email, registerNumber } =
    companyInformation;

  return (
    <>
      <FooterFrame>
        <CompanyInformationWrapper>
          <CompanyInformation>
            <li>Name: {name}</li>
            <li>Tel: {phoneNumber}</li>
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
