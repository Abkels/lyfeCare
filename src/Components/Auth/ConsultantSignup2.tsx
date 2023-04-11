/** @format */

import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { consultData } from "../interface/interface";
import { UseAppDispach } from "../Global/Store";
import { Consultant } from "../Global/ReduxState";
import { createSpecialist, signup } from "../Api/Api";
import { Link } from "react-router-dom";
import pic from "../Images/sign-up.svg";


const ConsultantSignUp2 = () => {
  const dispatch = UseAppDispach();
  const navigate = useNavigate();
  
  const schema = yup
    .object({
      officeAddress: yup.string().required(),
      specialty: yup.string().required(),
      bankName: yup.string().min(9).required(),
      bankAcc: yup.number().required(),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const posting = useMutation({
    mutationKey: ["lifecareconsult"],
    mutationFn: createSpecialist,

    onSuccess: (Data:any) => {
      dispatch(Consultant(Data.data));
      console.log(Data.data)
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
    navigate("/");
  });

  return (
    <>
      <Body>
        <Hold>
          <Left>
            <Form onSubmit={Submit}>
              

            <Seq>
                <SeqNum>1</SeqNum>
                <div> -------- </div>
                <SeqNum>2</SeqNum>
                <div> -------- </div>
                <SeqNum style={{color:"white", backgroundColor:"#8A2BE2"}}>3</SeqNum>
            </Seq>

              <div
                style={{
                  fontSize: "18px",
                  color: "#8A2BE2",
                  fontWeight: "700",
                  marginBottom: "20px",
                  textAlign: "center",
                }}>
                Consultant Sign Up
              </div>

              <Input
                type="text"
                placeholder="Office Address"
                {...register("officeAddress")}
              />
              <p>{errors?.officeAddress && errors?.officeAddress?.message}</p>

              <Input type="text" placeholder="Specialty" 
              {...register("specialty")} />
              <p>{errors?.specialty && errors?.specialty?.message}</p>

              <Input
                type="text"
                placeholder="Bank Name"
                {...register("bankName")}
              />
              <p>{errors?.bankName && errors?.bankName?.message}</p>

              <Input
                type="password"
                placeholder="Bank Account Number"
                {...register("bankAcc")}
              />
              <p>{errors?.bankAcc && errors?.bankAcc?.message}</p>


              <Button type="submit">Complete Registration</Button>

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

export default ConsultantSignUp2;

const SeqNum = styled.h6`
padding: 4px 7px;
border-radius:50%;
text-align:center;
border: 1px solid #8A2BE2;
color: #8A2BE2;
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
  height: 35px;
  border: none;
  box-shadow: 0 0 2px #8A2BE2;
  outline: #8A2BE2;
  border-radius: 7px;
  padding-left: 5px;

  @media screen and (max-width: 425px) {
    box-shadow: none;
    border-bottom: 1px solid #8A2BE2;
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
  
  p{
    font-size: 8px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 425px) {
    width: 310px;
    padding: 20px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: none;
  }

  @media screen and (max-width: 320px) {
  //   width: 310px;
  //   padding: 10px;
    padding-right: 20px;
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
