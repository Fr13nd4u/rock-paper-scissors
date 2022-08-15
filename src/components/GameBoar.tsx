import React, { FC } from "react";
import styled from "styled-components";
import ElementCard from "./ElementCard";

import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import { useAppSelector } from "../hooks/redux";
import { Choice } from "../types";

interface IChooseArray {
  name: Choice;
  src: string;
}

const chooseArray: IChooseArray[] = [
  {
    name: "rock",
    src: rock,
  },
  {
    name: "paper",
    src: paper,
  },
  {
    name: "scissors",
    src: scissors,
  },
];

const GameBoar: FC<any> = ({ socket }) => {
  const { choice } = useAppSelector((state) => state.userReducer);

  return (
    <GameBoarWrapper>
      <h2>Choose your element: </h2>

      <CardsWrapper>
        {chooseArray.map((item, index) => (
          <ElementCard
            src={item.src}
            name={item.name}
            key={index}
            socket={socket}
          />
        ))}
      </CardsWrapper>

      <h3>Your choice is {choice} </h3>
    </GameBoarWrapper>
  );
};

const GameBoarWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #fff;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
`;

export default GameBoar;
