import React, { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import PlayerCard from "./PlayerCard";

const ScoreBoard: FC = () => {
  const { players } = useAppSelector((state) => state.userReducer);
  return (
    <ScoreBoardWrapper>
      <PlayerCard
        name={players.firstPlayer.name}
        score={players.firstPlayer.score}
      />
      <PlayerCard
        name={players.secondPlayer.name}
        score={players.secondPlayer.score}
      />
    </ScoreBoardWrapper>
  );
};

const ScoreBoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

export default ScoreBoard;
