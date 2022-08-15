import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Choice, IPlayer } from '../../types';

interface IInitialState {
  isAuth: boolean;
  userName: null | string;
  choice: Choice;
  roundWinner: null | string;
  players: {
    firstPlayer: IPlayer;
    secondPlayer: IPlayer;
  }
};

const initialState: IInitialState = {
  isAuth: false,
  userName: null,
  choice: null,
  roundWinner: null,
  players: {
    firstPlayer: {
      name: '',
      score: 0,
    },
    secondPlayer: {
      name: '',
      score: 0,
    }
  }
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.isAuth = true;
    },
    logoutSuccess: (state) =>  {
      state.userName = null;
      state.isAuth = false;
      state.choice = null;
      state.roundWinner = null;
    },
    setPlayers: (state, action: PayloadAction<any>) => {
      state.players = {
        firstPlayer: {
          name: action.payload[0],
          score: 0,
        },
        secondPlayer: {
          name: action.payload[1],
          score: 0,
        },
      }
    },
    removePlayer: (state, action: PayloadAction<string>) => {
      if (state.players.firstPlayer.name === action.payload) {
        state.players.firstPlayer = {
          name: '',
          score: 0
        }
      } else if (state.players.secondPlayer.name === action.payload) {
        state.players.secondPlayer = {
          name: '',
          score: 0
        }
      };

      state.choice = null;
      state.roundWinner = null;
    },

    setChoice: (state, action: PayloadAction<Choice>) => {
      state.choice = action.payload;
    },

    finishRound: (state, action: PayloadAction<string>)  => {
      state.roundWinner = action.payload;
      if(state.players.firstPlayer.name === action.payload) {
        state.players.firstPlayer.score += 0.5; 
      } else if (state.players.secondPlayer.name === action.payload) {
        state.players.secondPlayer.score += 0.5; 
      }
    },

    restartRound: (state) => {
      state.choice = null;
      state.roundWinner = null;
    }
  
  }
});

export default userSlice.reducer;