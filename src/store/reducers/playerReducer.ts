import {
  PlayerAction,
  PlayerActionTypes,
  PlayerState,
} from "../../types/player";

const initialState: PlayerState = {
  currentTrack: null,
  playlist: null,
};

export const playerReducer = (
  state = initialState,
  action: PlayerAction
): PlayerState => {
  switch (action.type) {
    case PlayerActionTypes.PLAY_TRACK:
      return {
        currentTrack: action.payload.track,
        playlist: action.payload.playlist,
      };
    case PlayerActionTypes.NEXT_TRACK:
      return {
        ...state,
        currentTrack:
          state.currentTrack || state.currentTrack === 0
            ? state.currentTrack + 1
            : null,
      };
    case PlayerActionTypes.PREVIOS_TRACK:
      return {
        ...state,
        currentTrack: state.currentTrack ? state.currentTrack - 1 : null,
      };
    default:
      return state;
  }
};
