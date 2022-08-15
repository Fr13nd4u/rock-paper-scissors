import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/global";
import styled from "styled-components";

import LoginPage from "./pages/LoginPage";
import GamePage from "./pages/GamePage";
import PrivateRoutes from "./utils/PrivateRoutes";

const App: FC = () => {
  return (
    <AppWrapper>
      <GlobalStyle />

      <Routes>
        {/* public routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* private routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<GamePage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;

  background-image: linear-gradient(
    215deg,
    #41b497,
    #7f47c5,
    #c29c46,
    #41b497,
    #7f47c5
  );
  background-size: 800% 800%;
  -webkit-animation: GradientAnumation 50s ease infinite;
  animation: GradientAnumation 50s ease infinite;

  @-webkit-keyframes GradientAnumation {
    0% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
  @keyframes GradientAnumation {
    0% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

export default App;
