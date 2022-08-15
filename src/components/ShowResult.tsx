import React, { FC } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { logout, restart } from "../store/reducers/ActionCreators";

const ShowResult: FC<any> = ({ socket }) => {
  const { roundWinner } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const handleQuit = () => {
    socket.current.disconnect();
    dispatch(logout());
  };

  const handleRestart = () => {
    dispatch(restart());
  };

  return (
    <ShowResultWrapper>
      <h2>{roundWinner === "draw" ? "It is draw" : `${roundWinner} win`}</h2>
      <button onClick={handleQuit}>quit</button>
      <button onClick={handleRestart}>restart</button>
    </ShowResultWrapper>
  );
};

const ShowResultWrapper = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 80px;

  button {
    margin: 20px 40px;
  }
`;

export default ShowResult;
