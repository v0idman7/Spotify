import { ListOfAlbumType, ListOfPlaylistsType } from ".";

export interface MusicState {
  albums: ListOfAlbumType | null;
  playlists: ListOfPlaylistsType | null;
}

export enum MusicActionTypes {
  FETCH_ALBUMS = "FETCH_ALBUMS",
  FETCH_PLAYLISTS = "FETCH_PLAYLISTS",
}

interface FetchAlbumsAction {
  type: MusicActionTypes.FETCH_ALBUMS;
  payload: any;
}

interface FetchPlaylistsAction {
  type: MusicActionTypes.FETCH_PLAYLISTS;
  payload: any;
}

export type MusicAction = FetchAlbumsAction | FetchPlaylistsAction;
