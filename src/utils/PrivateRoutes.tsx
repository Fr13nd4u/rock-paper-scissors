import React, { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const PrivateRoutes: FC = () => {
  const { isAuth } = useAppSelector((state) => state.userReducer);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
