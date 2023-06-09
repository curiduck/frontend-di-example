import React, { useState } from "react";
import styled from "styled-components";
import Utils from "../../utils";
import { ICompanyService } from "../../services/CompanyServices/ICompanyService";

const ViewFrame = styled.div`
  flex: 9 9 0;
`;

const PictureList = styled.div`
  margin: 10px;
  display: flex;
`;

const Picture = styled.img`
  width: 320px;
  margin-right: 10px;
`;

const companyService: ICompanyService =
  Utils.getContainerByCompanyUrlPath("company");

function DataView() {
  const companyDescription = companyService.getCompanyDescription();
  const companyPhotos = companyService.getCompanyPhoto();

  return (
    <ViewFrame>
      <span>회사에 대한 설명: </span>
      <ul>
        {companyDescription.map((description: string) => (
          <li>{description}</li>
        ))}
      </ul>

      <span>회사 사진: </span>
      <PictureList>
        {companyPhotos.map((photoUri: string) => (
          <Picture src={photoUri} />
        ))}
      </PictureList>
    </ViewFrame>
  );
}

export default DataView;
