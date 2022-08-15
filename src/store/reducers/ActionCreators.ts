import { Choice } from "../../types";
import { AppDispatch } from "../store";
import { userSlice } from "./userSlice";

export const login = (username: string) => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.loginSuccess(username))
};

export const logout = () => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.logoutSuccess())
};

export const receivePlayers = (players: []) => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.setPlayers(players))
};

export const playerDisconected = (username: string) => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.removePlayer(username))
};

export const playerSetChoice = (choice: Choice) => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.setChoice(choice))
};

export const getWinner = (winner: string) => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.finishRound(winner))
};

export const restart = () => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.restartRound())
};

