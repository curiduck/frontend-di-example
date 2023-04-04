import React from "react";
import styled from "styled-components";
import DataView from "../DataView";

const BodyFrame = styled.div`
  display: flex;
  flex: 7 7 0;
  background-color: #bface2;
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  margin: 0px 200px 0px 200px;
  padding: 20px 10px 10px 10px;
  height: 100%;
  background-color: aliceblue;
`;

const Body = () => (
  <>
    <BodyFrame>
      <BodyContent>
        <DataView />
      </BodyContent>
    </BodyFrame>
  </>
);

export default Body;
