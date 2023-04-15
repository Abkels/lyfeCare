/** @format */

import React from "react";
import { useAppSelector } from "./Components/Global/Store";
import ConsultRoutes from "./Components/Routes/ConsultDashRoutes";
import DashBoardRoute from "./Components/Routes/DashBoardRoute";
import HomeRoutes from "./Components/Routes/HomeRoutes";

function App() {

  const getUser = useAppSelector((state) => state?.currentUser);

  const consultant = useAppSelector((state) => state?.consultUser);

  return (
    <>
      <div>
        {
        typeof 
        getUser?.name 
          === "string" 
            ? <DashBoardRoute /> : <HomeRoutes />
        }
      </div>

      <div>
        {
        typeof 
        consultant?.name  
          === "string"
           ? <ConsultRoutes /> : null
        }
      </div>
    </>
  );
  // route
}

export default App;
