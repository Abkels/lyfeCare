import React from "react";
import styled from "styled-components";
import pic from "../Images/undraw_medical_care_movn.svg";
import { NavLink } from "react-router-dom";

const ChooseSignUp = () => {

  
  return (
    <Container>
      <Head>Health Insurance At Your Saving Pace...</Head>
      <Wrapper>
        <Right>
          <Box>
            {/* <p>A platform for All</p> */}

            <Input to="/signuser">Sign Up as a User</Input>

            <Input to="/signconsultant">Sign up as a Consultant</Input>

            <Input to="/signhospital">Sign up as a Hospital</Input>

          </Box>
        </Right>
        <Left>
          <Img src={pic} />
        </Left>
      </Wrapper>
    </Container>
  );
};

export default ChooseSignUp;

const Input = styled(NavLink)`
  height: 50px;
  width: 250px;
  // border: 2px light gray;
  border-radius: 5px;
  font-weight: 500;
  box-shadow: 0 0 1px #8A2BE2;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8A2BE2;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  :hover {
    cursor: pointer;
    transition: all 350ms;
    transform: scale(0.9);
  }
`;
const Box = styled.div`
  height: 300px;
  width: 300px;
  box-shadow: 0 0 2px #8A2BE2;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // border: 1px solid #a7fd3784;

  p {
    font-size: 20px;
    color: black;
    margin-bottom: 20px;
  }
`;
const Right = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  height: 300px;
`;
const Left = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
 
 @media screen and (max-width: 768px) {
  display: none;
 }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
`;

const Head = styled.div`
  height: 30vh;
  width: 100%;
  background-color:#8A2BE2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  border-bottom-left-radius: 30%;
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
