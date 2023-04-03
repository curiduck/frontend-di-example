import React, { useState } from "react";
import { ViewPropsType } from "../View.type";
import Utils from "../../../utils";

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
      <ul>
        {companyPhotos.map((photo: string) => (
          <li>{photo}</li>
        ))}
      </ul>
    </>
  );
}

export default CardView;
