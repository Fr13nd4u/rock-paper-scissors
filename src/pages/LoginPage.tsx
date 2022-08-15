import React, { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAppDispatch } from "../hooks/redux";
import { login } from "../store/reducers/ActionCreators";

const LoginPage: FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitUser = () => {
    if (value.trim()) {
      dispatch(login(value));
      setValue("");
      navigate("/");
    }
  };

  return (
    <LoginWrapper>
      <H2>Enter your name:</H2>
      <Form>
        <Input type="text" onChange={inputHandler} value={value} />
        <InputBtn onClick={submitUser}>Sign in!</InputBtn>
      </Form>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;
  border: 2px solid #fff;
  border-radius: 5px;
  margin: 100px auto;
  max-height: 150px;
  color: #fff;
  padding: 15px;
`;

const H2 = styled.h2`
  margin-bottom: 1em;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  border-bottom: 1px solid #fff;
  color: inherit;
  font-size: 22px;
`;

const InputBtn = styled.button`
  margin-left: 20px;
`;

const Form = styled.div`
  display: flex;
`;

export default LoginPage;
