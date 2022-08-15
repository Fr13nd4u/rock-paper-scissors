import React, { FC } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import { playerSetChoice } from "../store/reducers/ActionCreators";
import { Choice } from "../types";

interface IElementCard {
  name: Choice;
  src: string;
  socket: any;
}

const ElementCard: FC<IElementCard> = ({ name, src, socket }) => {
  const dispatch = useAppDispatch();

  const handleClick = (e: Choice) => {
    socket.current.emit("choose", e);
    dispatch(playerSetChoice(e));
  };

  return (
    <ElementCardWrapper onClick={() => handleClick(name)}>
      <ElementImg src={src} alt="name" />
      <hr />
      <h3>{name}</h3>
    </ElementCardWrapper>
  );
};

const ElementCardWrapper = styled.div`
  width: 20%;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;

  hr {
    height: 3px;
    background: #fff;
  }

  h3 {
    margin: 20px 0 30px;
  }

  :hover {
    box-shadow: 1px 24px 67px -2px rgba(255, 255, 255, 0.4);
    transition: 0.4s;
  }
`;

const ElementImg = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

export default ElementCard;
