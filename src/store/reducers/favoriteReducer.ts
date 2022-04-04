import {
  FavoriteAction,
  FavoriteActionTypes,
  FavoriteState,
} from "../../types/favorite";

const initialState: FavoriteState = {
  favoriteAlbums: null,
  favoriteTracks: null,
};

export const favoriteReducer = (
  state = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case FavoriteActionTypes.FETCH_FAVORITE_ALBUMS:
      return { ...state, favoriteAlbums: action.payload };
    case FavoriteActionTypes.FETCH_FAVORITE_TRACKS:
      return { ...state, favoriteTracks: action.payload };
    default:
      return state;
  }
};
