import { put, all, takeEvery } from "redux-saga/effects";
import {FETCH_DATA, RECEIVED_PAGE_DATA} from './actions/actions'
import { FETCH_SONG_PAGE_DATA, RECEIVED_SONG_PAGE_DATA } from './actions/musicAction'


function* fetchData() {
  const data = yield fetch(
    `http://localhost:4000/pageData`
  ).then((res) => res.json())
  yield put({ type: RECEIVED_PAGE_DATA, payload: data });
}

function* fetchSongPageData() {
  const data = yield fetch(
    `http://localhost:4000/songData`
  ).then((res) => res.json())
  yield put({ type: RECEIVED_SONG_PAGE_DATA, payload: data });
}

function* dataWatcher() {
  yield takeEvery(FETCH_DATA, fetchData);
}

function* dataSongWatcher() {
  yield takeEvery(FETCH_SONG_PAGE_DATA, fetchSongPageData);
}



export default function* watcherSaga() {
  yield all([dataWatcher(), dataSongWatcher()]);
}
