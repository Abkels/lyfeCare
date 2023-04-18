import React, { lazy } from "react";
import { useRoutes } from "react-router";
import styled from "styled-components";
import DashHeader from "../Dashboard/DashHeader";
// import DashAppointment from "../Dashboard/DashAppoint";
// import DashFund from "../Dashboard/DashFund2";
// import DashFundWallet from "../Dashboard/DashFundWallet";
// import DashHMO from "../Dashboard/Dashhmo";
// import DashSettings from "../Dashboard/DashSettings";
// import DashTransPage from "../Dashboard/DashTransPage";
import DashSiderBar from "../Dashboard/DashSiderBar";
import DashHomeComp from "../Dashboard/DashHome/DashHomeComp";

const DashBoardRoute = () => {
  // const DashHomeComp = lazy(() => import("../Dashboard/DashHome/DashHomeComp"));
  const DashTransPage = lazy(() => import("../Dashboard/DashTransPage"));
  const DashAppointment = lazy(() => import("../Dashboard/DashAppoint"));
  const DashFundWallet = lazy(() => import("../Dashboard/DashFundWallet"));
  const DashSettings = lazy(() => import("../Dashboard/DashSettings"));
  const DashHMO = lazy(() => import("../Dashboard/Dashhmo"));
  const DashFund = lazy(() => import("../Dashboard/DashFund2"));

  const element = useRoutes([
    {
      path: "/dashboardhome",
      element: <DashHomeComp />,
    },
    {
      path: "/transactions",
      element: <DashTransPage />,
    },
    {
      path: "/makeappointment",
      element: <DashAppointment />,
    },
    {
      path: "/fundwallet",
      element: <DashFundWallet />,
    },
    {
      path: "/settings",
      element: <DashSettings />,
    },
    {
      path: "/hmo",
      element: <DashHMO />,
    },
    {
      path: "/fund",
      element: <DashFund />,
    },
  ]);

  return (
    <>
      <Body>
        <Head>
          <DashHeader />
        </Head>

        <Bottom>
          <Side>
            <DashSiderBar />
          </Side>

          <DashRoute>{element}</DashRoute>
        </Bottom>
      </Body>
    </>
  );
};

export default DashBoardRoute;

// const DashHead = styled.div``;

const DashRoute = styled.div`
  width: calc(100% - 275px);
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Side = styled.div`
  width: 250px;
  height: 100vh;
  /* position: fixed; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
`;

const Head = styled.div`
  width: 100%;
  height: 65px;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #eaeaea;
`;

// cool
