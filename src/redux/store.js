import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';//1er reducer
import {ApiToRecupere} from './services/ApiToRecupere'//2 reducer
export const store = configureStore({
  reducer: {
    [ApiToRecupere.reducerPath]: ApiToRecupere.reducer, //1er reducer
    player: playerReducer,//2 reducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(ApiToRecupere.middleware)

});

