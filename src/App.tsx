/** @format */

import React from "react";
import { useAppSelector } from "./Components/Global/Store";
import ConsultRoutes from "./Components/Routes/ConsultDashRoutes";
import DashBoardRoute from "./Components/Routes/DashBoardRoute";
import HomeRoutes from "./Components/Routes/HomeRoutes";
import { PrivateRoute } from "./Components/Routes/private/PrivateRoute";

function App() {
  const getUser = useAppSelector((state) => state?.currentUser);

  const consultant = useAppSelector((state) => state?.consultUser);

  return (
    <>
      <HomeRoutes />
      <PrivateRoute>
        <DashBoardRoute />
      </PrivateRoute>
      {/* <div>
        {typeof consultant?.name === "string" ? <ConsultRoutes /> : null}
      </div> */}
    </>
  );
  // route
}

export default App;
