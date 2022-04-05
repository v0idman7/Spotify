import { call, fork, put, takeEvery, spawn } from "redux-saga/effects";

import {
  getNewReleases,
  getFeaturedPlaylists,
  getUserTracks,
  getUserAlbums,
} from "../../services/api";

export function* loadNewRelease(): any {
  const newReleases = yield call(getNewReleases);
  yield put({ type: "FETCH_ALBUMS", payload: newReleases });
}

export function* loadUserPlaylists(): any {
  const userPlaylists = yield call(getFeaturedPlaylists);
  yield put({ type: "FETCH_PLAYLISTS", payload: userPlaylists });
}

export function* loadUserTracks(): any {
  const userPlaylists = yield call(getUserTracks);
  yield put({ type: "FETCH_FAVORITE_TRACKS", payload: userPlaylists });
}

export function* loadUserAlbums(): any {
  const userPlaylists = yield call(getUserAlbums);
  yield put({ type: "FETCH_FAVORITE_ALBUMS", payload: userPlaylists });
}

export function* workerLoadDataSaga(): any {
  yield fork(loadNewRelease);
  yield fork(loadUserPlaylists);
}

export function* watchLoadDataSaga() {
  yield takeEvery("LOAD_DATA", workerLoadDataSaga);
}

export function* watchLoadTracksSaga() {
  yield takeEvery("LOAD_TRACKS", loadUserTracks);
}

export function* watchLoadAlbumsSaga() {
  yield takeEvery("LOAD_ALBUMS", loadUserAlbums);
}

export default function* rootSaga() {
  yield spawn(watchLoadDataSaga);
  yield spawn(watchLoadTracksSaga);
  yield spawn(watchLoadAlbumsSaga);
}
