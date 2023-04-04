import React, { useState } from "react";
import styled from "styled-components";
import { ViewPropsType } from "./View.type";
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

function DataView({ companyDescriptions, companyPhotos }: ViewPropsType) {
  return (
    <ViewFrame>
      <span>회사에 대한 설명: </span>
      <ul>
        {companyDescriptions.map((description: string) => (
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
