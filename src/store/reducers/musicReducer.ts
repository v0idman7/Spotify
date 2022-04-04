import { MusicAction, MusicActionTypes, MusicState } from "../../types/music";

const initialState: MusicState = {
  albums: null,
  playlists: null,
};

export const musicReducer = (
  state = initialState,
  action: MusicAction
): MusicState => {
  switch (action.type) {
    case MusicActionTypes.FETCH_ALBUMS:
      return { ...state, albums: action.payload };
    case MusicActionTypes.FETCH_PLAYLISTS:
      return { ...state, playlists: action.payload };
    default:
      return state;
  }
};
