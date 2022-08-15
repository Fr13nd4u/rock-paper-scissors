import React, { FC } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { logout } from "../store/reducers/ActionCreators";

const Header: FC<any> = ({ socket }) => {
  const { userName } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    socket.current.disconnect();
    dispatch(logout());
  };

  return (
    <HeaderWrapper>
      <h2>Hello, {userName}!</h2>
      <button onClick={logoutHandler}>Log out</button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  min-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: #fff;
  padding: 30px 0;
`;

export default Header;
