import { FavoriteAlbumsType, FavoriteTracksType } from ".";

export interface FavoriteState {
  favoriteTracks: FavoriteTracksType | null;
  favoriteAlbums: FavoriteAlbumsType | null;
}

export enum FavoriteActionTypes {
  FETCH_FAVORITE_TRACKS = "FETCH_FAVORITE_TRACKS",
  FETCH_FAVORITE_ALBUMS = "FETCH_FAVORITE_ALBUMS",
  FETCH_ALBUM = "FETCH_ALBUM",
}

interface FetchFavoriteTracksAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_TRACKS;
  payload: any;
}

interface FetchFavoriteAlbumsAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_ALBUMS;
  payload: any;
}

export type FavoriteAction =
  | FetchFavoriteTracksAction
  | FetchFavoriteAlbumsAction;
