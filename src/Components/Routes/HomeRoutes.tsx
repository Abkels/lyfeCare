import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import ChooseSignUp from "../Auth/ChooseSignUp";
import ConsultantSignUp from "../Auth/ConsultantSignUp";
import HospitalSignUp from "../Auth/HospitalSignUp";
import Signin from "../Auth/Signin";
import SignUp from "../Auth/SignUp";
import ComingSoon from "../BloodDonation/ComingSoon";
import LandingPage from "../Home/LandingPage";
import UserSignUp2 from "../Auth/userSignUp2";
import InputOTP from "../Auth/InputOTP";
import UserSignUp3 from "../Auth/UserSignUp3";
import ConsultantSignUp2 from "../Auth/ConsultantSignup2";

const HomeRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <ChooseSignUp />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/otp",
      element: <InputOTP />,
    },
    {
      path: "/usersignup2",
      element: <UserSignUp2 />,
    },
    {
      path: "/usersignup3",
      element: <UserSignUp3 />,
    },
    {
      path: "/donateblood",
      element: <ComingSoon />,
    },
    {
      path: "/usersignup1",
      element: <SignUp />,
    },
    {
      path: "/consultantsignup",
      element: <ConsultantSignUp />,
    },
    {
      path: "/consultantsignup2",
      element: <ConsultantSignUp2 />,
    },
    {
      path: "signhospital",
      element: <HospitalSignUp />,
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ]);
  return element;
};

export default HomeRoutes;
