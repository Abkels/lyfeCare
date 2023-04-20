import React from "react";
import styled from "styled-components";
import pic from "../Images/sign-up.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispach, useAppSelector } from "../Global/Store";
import { User } from "../Global/ReduxState";
import { userSignup2 } from "../Api/Api";
import { UserData } from "../interface/interface";
import axios from "axios";
import Swal from "sweetalert2";

const lifeUrl = "https://codecrusaderslifecare.onrender.com/api";

const UserSignUp2 = () => {
  const dispatch = UseAppDispach();
  const navigate = useNavigate();

  const getUser = useAppSelector((state) => state?.currentUser);

  const schema = yup
    .object({
      fullName: yup.string().required(),
      phoneNumber: yup.string().required(),
      genotype: yup.string().required(),
      bloodGroup: yup.string().required(),
      dateOfBirth_month: yup.string().required(),
      dateOfBirth_day: yup.string().required(),
      dateOfBirth_year: yup.string().required(),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    await axios
      .patch(`${lifeUrl}/pagetworegister/${getUser?._id}`, data)
      .then((res) => {
        Swal.fire({
          title: "loading next page...",
          // html: "redirecting to login",
          timer: 2000,
          timerProgressBar: true,

          willClose: () => {
            navigate("/usersignup3");
          },
        });
      });
  });

  return (
    <div>
      <Body>
        <Hold>
          <Right>
            <RightImg src={pic} />
          </Right>

          <Left>
            <Form onSubmit={onSubmit}>
              <Seq>
                <SeqNum>1</SeqNum>
                <div> --- </div>
                <SeqNum>2</SeqNum>
                <div> --- </div>
                <SeqNum style={{ color: "white", backgroundColor: "#8A2BE2" }}>
                  3
                </SeqNum>
                <div> --- </div>
                <SeqNum>4</SeqNum>
              </Seq>

              <Input
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
              />

              <Input
                type="number"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />

              <Birth>
                <h5 style={{ width: "" }}>DOB:</h5>

                <Input
                  style={{
                    width: "26%",
                    height: "90%",
                    border: "none",
                    boxShadow: "none",
                    margin: "0",
                    outline: "0",
                  }}
                  type="text"
                  placeholder="Month"
                  maxLength={3}
                  {...register("dateOfBirth_month")}
                />

                <Input
                  style={{
                    width: "26%",
                    height: "90%",
                    border: "none",
                    boxShadow: "none",
                    margin: "0",
                    outline: "0",
                  }}
                  type="number"
                  placeholder="Day"
                  maxLength={2}
                  {...register("dateOfBirth_day")}
                />

                <Input
                  style={{
                    width: "26%",
                    height: "90%",
                    border: "none",
                    boxShadow: "none",
                    margin: "0",
                    outline: "0",
                  }}
                  type="number"
                  placeholder="Year"
                  maxLength={4}
                  {...register("dateOfBirth_year")}
                />
              </Birth>

              <Input2
                placeholder="Genotype"
                {...register("genotype")}>
                  <option value="">Genotype</option>
                  <option value="">AA</option>
                  <option value="">AS</option>
                  <option value="">AC</option>
                  <option value="">SS</option>
                  <option value="">SC</option>
                  <option value="">CC</option>
              </Input2>
              

              <Input2
                placeholder="Blood Group"
                {...register("bloodGroup")}>
                <option value="">Blood Group</option>
                <option value="">A+</option>
                <option value="">A-</option>
                <option value="">B+</option>
                <option value="">B-</option>
                <option value="">AB+</option>
                <option value="">AB-</option>
                <option value="">O</option>
                <option value="">O+</option>
              </Input2>
              

              <Button type="submit">Continue</Button>
            </Form>
          </Left>
        </Hold>
      </Body>
    </div>
  );
};

export default UserSignUp2;

const Birth = styled.div`
  width: 100%;
  height: 40px;
  box-shadow: 0 0 2px #8a2be2;
  margin-bottom: 20px;
  border-radius: 7px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;


  @media screen and (max-width: 425px) {
    box-shadow: none;
    border-bottom: 1px solid #8a2be2;
  }

  h5 {
    color: #892be271;
    color: #8080807f;
  }
`;

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
  width: 500px;
`;

const Right = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// const Body = styled.div``;

const Button = styled.button`
  width: 105%;
  height: 45px;
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: transparent;
    border: 1px solid #8a2be2;
    color: #8a2be2;
  }
`;

const Input2 = styled.select`
  // <{ props: string }>
  width: 105%;
  height: 43px;
  border: none;
  box-shadow: 0 0 2px #8a2be2;
  margin-bottom: 20px;
  border-radius: 7px;
  padding-left: 10px;

  p {
    font-size: 10px;
  }

  @media screen and (max-width: 425px) {
    box-shadow: none;
    border-bottom: 1px solid #8a2be2;
  }

  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;

const Input = styled.input`
  // <{ props: string }>
  width: 100%;
  height: 40px;
  border: none;
  box-shadow: 0 0 2px #8a2be2;
  margin-bottom: 20px;
  border-radius: 7px;
  padding-left: 10px;

  p {
    font-size: 10px;
  }

  @media screen and (max-width: 425px) {
    box-shadow: none;
    border-bottom: 1px solid #8a2be2;
  }

  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;

const Form = styled.form`
  width: 270px;
  height: 390px;
  box-shadow: 0 0 3px #8a2be2;
  border-radius: 10px 0 10px 0;
  padding: 30px;
  //   padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    // padding: 20px;
    // padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: none;
  }

  @media screen and (max-width: 375px) {
    width: 290px;
    // padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    height: 400px;
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
