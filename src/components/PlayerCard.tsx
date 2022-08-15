import React, { FC } from "react";
import styled from "styled-components";
import { IPlayer } from "../types";

const PlayerCard: FC<IPlayer> = ({ name, score }) => {
  return (
    <>
      {name ? (
        <PlayerCardWrapper>
          <h3>Player {name}</h3>
          <h4>Score: {score}</h4>
        </PlayerCardWrapper>
      ) : (
        <p>waiting...</p>
      )}
    </>
  );
};

const PlayerCardWrapper = styled.div`
  text-align: center;
  border: 2px solid #fff;
  border-radius: 5px;
  width: 20%;
  padding: 20px;

  h3 {
    margin-bottom: 20px;
  }
`;

export default PlayerCard;
