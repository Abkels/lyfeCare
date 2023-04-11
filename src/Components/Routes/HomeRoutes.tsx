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


// type Props = {
//   value: string;
//   valueLength: number;
//   onChange: (value: string) => void;
// };

const HomeRoutes = () => {

  const [otp, setOtp] = useState('1234');
  const onChange = (value: string) => setOtp(value);
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
      element: <InputOTP value={otp} valueLength={4} onChange={onChange}/>,
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
      path: "signconsultant",
      element: <ConsultantSignUp />,
    },
    {
      path: "signhospital",
      element: <HospitalSignUp />,
    },
    {
      path: '*',
      element: <h1>Not FOund</h1>
    }
    
  ]);
  return element;
};

export default HomeRoutes;
