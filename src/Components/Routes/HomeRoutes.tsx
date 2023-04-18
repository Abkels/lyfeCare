import React, { lazy, useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import ChooseSignUp from "../Auth/ChooseSignUp";
import ConsultantSignUp from "../Auth/ConsultantSignUp";
import HospitalSignUp from "../Auth/HospitalSignUp";
import ComingSoon from "../BloodDonation/ComingSoon";
// import LandingPage from "../Home/LandingPage";
import ConsultantSignUp2 from "../Auth/ConsultantSignup2";
import { useAppSelector } from "../Global/Store";

const LandingPage = lazy(() => import("../Home/LandingPage"));
const SignUp = lazy(() => import("../Auth/SignUp"));
const UserSignUp2 = lazy(() => import("../Auth/userSignUp2"));
const UserSignUp3 = lazy(() => import("../Auth/UserSignUp3"));
const Signin = lazy(() => import("../Auth/Signin"));
const InputOTP = lazy(() => import("../Auth/InputOTP"));

const HomeRoutes = () => {
  const navigate = useNavigate();
  const getuser = useAppSelector((state) => state.currentUser);

  useEffect(() => {
    if (getuser?.fullName) {
      navigate("/dashboardhome", { replace: true });
    }
  }, []);

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
  ]);
  return element;
};

export default HomeRoutes;
