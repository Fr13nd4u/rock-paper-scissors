import React, { FC, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import GameBoar from "../components/GameBoar";
import Header from "../components/Header";
import ScoreBoard from "../components/ScoreBoard";
import ShowResult from "../components/ShowResult";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  getWinner,
  playerDisconected,
  receivePlayers,
} from "../store/reducers/ActionCreators";
import { setRoundWinner } from "../utils/setRoundWinner";

const GamePage: FC = () => {
  const { userName, roundWinner } = useAppSelector(
    (state) => state.userReducer
  );
  const socketRef = useRef({});
  const dispatch = useAppDispatch();

  // SOCKET

  useEffect(() => {
    const socket = io("https://front-task-rps.herokuapp.com/", {
      query: {
        username: userName,
      },
    });
    socketRef.current = socket;

    socket.emit("get_players");
    socket.on("players_received", (players) =>
      dispatch(receivePlayers(players))
    );
    socket.on("disconnected", (playerName: { username: string }) => {
      dispatch(playerDisconected(playerName.username));
    });
    socket.on("game_finished", (payload) => {
      dispatch(getWinner(setRoundWinner(payload.results)));
    });
  }, [userName]);

  return (
    <div>
      <Header socket={socketRef} />
      <ScoreBoard />
      {roundWinner ? (
        <ShowResult socket={socketRef} />
      ) : (
        <GameBoar socket={socketRef} />
      )}
    </div>
  );
};

export default GamePage;
