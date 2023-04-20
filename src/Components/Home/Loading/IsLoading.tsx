import React from "react";
import styled from "styled-components";
import { FallingLines } from "react-loader-spinner";
import lyfeCareIcon from "../../Images/lyfecareIcon.png";

const IsLoading = () => {
  return (
    <div>
      <Main>
        <Wrap>
          <img src={lyfeCareIcon} />
          <i>LyfeCare</i>
        </Wrap>
        <FallingLines color="#8A2BE2" width="100" visible={true} />
        <p>Loading...</p>
      </Main>
    </div>
  );
};

export default IsLoading;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i {
    text-transform: capitalize;
    color: #8a2be2;
    font-weight: 600;
  }

  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }

  p {
    color: #8a2be2;
    font-size: 17px;
    font-weight: 600;
  }
`;
