import React, { useState } from "react";
import styled from "styled-components";
import { ViewPropsType } from "../View.type";
import Utils from "../../../utils";

const PictureList = styled.div`
  margin: 10px;
  display: flex;
`;

const Picture = styled.img`
  width: 320px;
  margin-right: 10px;
`;

// @ts-ignore
const companyService: ICompanyService =
  // @ts-ignore
  Utils.getContainerByCompanyUrlPath("company");

function CardView() {
  const companyDescription = companyService.getCompanyDescription();
  const companyPhotos = companyService.getCompanyPhoto();

  return (
    <>
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
    </>
  );
}

export default CardView;
