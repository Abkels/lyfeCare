import React, { useState } from "react";
import styled from "styled-components";
import pic from "../Images/otp.svg";
import OtpInput from "react-otp-input";

import { useAppSelector } from "../Global/Store";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const InputOTP = () => {
  const [otp, setOtp] = useState("");

  const getUser = useAppSelector((state) => state?.currentUser);
  const navigate = useNavigate();
  const verifyOtp = async () => {
    const lifeUrl = "https://codecrusaderslifecare.onrender.com/api";
    return await axios
      // .post(`${lifeUrl}/verifyuser/${id}`, {
      .post(`${lifeUrl}/verifyuser/${getUser?._id}`, {
        otp,
      })
      .then((res) => {
        Swal.fire({
          title: "verified",
          icon: "success",
        });
        navigate("/usersignup2");

        return res.data;
      })
      .catch((err) => {
        Swal.fire({
          title: "ooops!...Something went wrong",
          icon: "error",
          text: `${err.response?.data?.message}`,
        });
      });
  };

  return (
    <div>
      <Body>
        <Hold>
          <Right>
            <RightImg src={pic} />
          </Right>

          <Left>
            <Form>
              <Seq>
                <SeqNum>1</SeqNum>
                <div> ----- </div>
                <SeqNum style={{ color: "white", backgroundColor: "#8A2BE2" }}>
                  2
                </SeqNum>
                <div> ----- </div>
                <SeqNum>3</SeqNum>
                <div> ----- </div>
                <SeqNum>4</SeqNum>
              </Seq>

              <div
                style={{
                  fontSize: "16px",
                  color: "#8A2BE2",
                  fontWeight: "600",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Input OTP
              </div>

              <Inputs>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span> - </span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle=""
                />
              </Inputs>

              <Button onClick={verifyOtp}>Submit</Button>

              <p
                style={{
                  fontSize: "10px",
                  color: "#8A2BE2",
                  textAlign: "center",
                }}
              >
                Resend OTP?
              </p>
            </Form>
          </Left>
        </Hold>
      </Body>
    </div>
  );
};

export default InputOTP;

const SeqNum = styled.h6`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #8a2be2;
  color: #8a2be2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Seq = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div {
    color: #8a2be2;
  }
`;

const RightImg = styled.img`
  width: 400px;
`;

const Right = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 90%;
  height: 40px;
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 350ms;
  margin-top: 5px;

  :hover {
    background-color: transparent;
    border: 1px solid #8a2be2;
    color: #8a2be2;
  }
`;

const Input = styled.input`
  width: 35px;
  height: 35px;
  box-shadow: 0 0 2px #8a2be2;
  margin-bottom: 20px;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  // padding-left: 10px;
  border: none;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  p {
    font-size: 10px;
  }

  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;

const Inputs = styled.div`
  width: 90%;
  max-width: 360px;
  height: 40px;
  column-gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  //   border: none;
  //   box-shadow: 0 0 2px #8A2BE2;
  //   margin-bottom: 20px;
  //   border-radius: 7px;
  //   padding-left: 10px;

  input {
    /* height: 30px; */
    margin-left: 10px;
    margin-right: 10px;
    outline: #8a2be2;
    border: 1px solid #8a2be2;
    padding: 10px;
  }

  inputStyle {
    width: 30px;
  }

  //   p {
  //     font-size: 10px;
  //   }

  //   @media screen and (max-width: 425px) {
  //     box-shadow: none;
  //     border-bottom: 1px solid #567e22;
  //   }
  //   @media screen and (max-width: 768px) {
  //     height: 35px;
  //   }
`;

const Form = styled.div`
  width: 270px;
  height: 300px;
  box-shadow: 0 0 3px #8a2be2;
  border-radius: 10px 0 10px 0;
  padding: 30px;
  //   padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    padding: 20px;
    // padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: none;
  }

  @media screen and (max-width: 375px) {
    width: 285px;
    // padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
  }
`;

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 425px) {
    width: 95%;
  }
`;

const Hold = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
