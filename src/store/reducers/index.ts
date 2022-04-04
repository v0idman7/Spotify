import { combineReducers } from "redux";
import { favoriteReducer } from "./favoriteReducer";
import { musicReducer } from "./musicReducer";
import { playerReducer } from "./playerReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  music: musicReducer,
  favorite: favoriteReducer,
  player: playerReducer,
});
