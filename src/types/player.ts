import { TrackType } from ".";

export interface PlayerState {
  currentTrack: number | null;
  playlist: Array<TrackType> | null;
}

export enum PlayerActionTypes {
  PLAY_TRACK = "PLAY_TRACK",
  NEXT_TRACK = "NEXT_TRACK",
  PREVIOS_TRACK = "PREVIOS_TRACK",
}

interface PlayTrackAction {
  type: PlayerActionTypes.PLAY_TRACK;
  payload: any;
}

interface NextTrackAction {
  type: PlayerActionTypes.NEXT_TRACK;
}

interface PreviosTrackAction {
  type: PlayerActionTypes.PREVIOS_TRACK;
}

export type PlayerAction =
  | PlayTrackAction
  | NextTrackAction
  | PreviosTrackAction;
