import React from "react";
import { useAppSelector } from "../../Global/Store";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const getUser = useAppSelector((state) => state?.currentUser);

  if (getUser?.email) {
    return children;
  } else {
    <Navigate to={"/"} />;
  }
};

export default PrivateRoute;
