import React from "react";
import styled from "styled-components";
import { FallingLines } from "react-loader-spinner";

const IsLoading = () => {
  return (
    <div>
      <Main>
        <FallingLines
          color="#8A2BE2"
          width="100"
          visible={true}
        />
        <p>Loading...</p>
      </Main>
    </div>
  );
};

export default IsLoading;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #8a2be2;
    font-size: 17px;
    font-weight: 600;
  }
`;
