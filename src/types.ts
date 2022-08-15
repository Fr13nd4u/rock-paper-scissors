export interface IPlayer {
  name: string;
  score: number;
}

export interface IPlayers {
  firstPlayer: IPlayer;
  secondPlayer: IPlayer;
}

export type Choice = 'rock' | 'paper' | 'scissors' | null;