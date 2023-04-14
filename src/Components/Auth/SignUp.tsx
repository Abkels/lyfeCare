/** @format */

import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { UserData } from "../interface/interface";
import { UseAppDispach } from "../Global/Store";
import { User } from "../Global/ReduxState";
import { signup } from "../Api/Api";
import { Link } from "react-router-dom";
import pic from "../Images/sign-up.svg";

const SignUp = () => {
  const dispatch = UseAppDispach();
  const navigate = useNavigate();
  
  const schema = yup
    .object({
      userName: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().min(9).required(),
      confirmPassword: yup.string().min(9).required(),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const posting = useMutation({
    mutationKey: ["lifecareUser"],
    mutationFn: signup,

    onSuccess: (myData: any) => {
      dispatch(User(myData.data));
      console.log(myData.data)
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const Submit = handleSubmit(async (data) => {
    posting.mutate(data);
    reset();
    navigate("/otp");
  });

  //
  return (
    <>
      <Body>
        <Hold>
          <Left>
            <Form onSubmit={Submit}>

            <Seq>
                <SeqNum style={{color:"white", backgroundColor:"#8A2BE2"}}>1</SeqNum>
                <div> ----- </div>
                <SeqNum>2</SeqNum>
                <div> ----- </div>
                <SeqNum>3</SeqNum>
                <div> ----- </div>
                <SeqNum>4</SeqNum>
            </Seq>


              <div
                style={{
                  fontSize: "20px",
                  color: "#8A2BE2",
                  fontWeight: "700",
                  marginBottom: "20px",
                  textAlign: "center",
                }}>
                User Sign Up
              </div>

              <Input
                type="text"
                placeholder="Username"
                {...register("userName")}
              />
              <p style={{ fontSize: "10px" }}>
                {errors?.userName && errors?.userName?.message}
              </p>

              <Input type="text" placeholder="Email" {...register("email")} />
              <p style={{ fontSize: "10px" }}>
                {errors?.email && errors?.email?.message}
              </p>

              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <p style={{ fontSize: "10px" }}>
                {errors?.password && errors?.password?.message}
              </p>

              <Input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              <p style={{ fontSize: "10px" }}>
                {errors?.confirmPassword && errors?.confirmPassword?.message}
              </p>


              <Button type="submit">Sign Up</Button>

              <Link style={{ textDecoration: "none" }} to={"/signin"}>
                <Already>Already have an account? Sign in</Already>
              </Link>
            </Form>
          </Left>

          <Right>
            <RightImg src={pic} />
          </Right>
        </Hold>
      </Body>
    </>
  );
};

export default SignUp;

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

div{
color: #8A2BE2;
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

const Already = styled.div`
  font-size: 13px;
  cursor: pointer;
  color: #567e22;
  margin-top: 15px;
  text-align: center;
  @media screen and (max-width: 425px) {
    font-size: 10px;
  }
`;

const Button = styled.button`
  width: 105%;
  height: 40px;
  background: #8A2BE2;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: transparent;
    border: 1px solid #8A2BE2;
    color: #8A2BE2;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  box-shadow: 0 0 2px #8A2BE2;
  border-radius: 7px;
  padding-left: 10px;
  // outline: #8A2BE2;

  p {
    font-size: 10px;
  margin-bottom: 10px;
  }

  @media screen and (max-width: 425px) {
    box-shadow: none;
    border-bottom: 1px solid #567e22;
  }
  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;

const Form = styled.form`
  width: 270px;
  height: 400px;
  box-shadow: 0 0 3px #8A2BE2;
  border-radius: 10px 0 10px 0;
  padding: 30px;
  // padding-right: 40px;
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
  width: 285px;
    // padding: 10px;
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