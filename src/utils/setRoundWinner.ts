interface IRoundUsers {
  username: string;
  choice: string;
}

export const setRoundWinner = (payload: IRoundUsers[]) => {
  if (payload[0].choice === payload[1].choice) {
    return "draw";
  } else if (
    (payload[0].choice === "paper" && payload[1].choice === "rock") ||
    (payload[0].choice === "rock" && payload[1].choice === "scissors") ||
    (payload[0].choice === "scissors" && payload[1].choice === "paper")
  ) {
    return payload[0].username;
  } else {
    return payload[1].username;
  }
};
