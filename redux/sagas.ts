import { put, all, takeEvery } from "redux-saga/effects";
import {FETCH_DATA, RECEIVED_PAGE_DATA} from './actions/actions'


function* fetchData() {
  const data = yield fetch(
    `http://localhost:4000/pageData`
  ).then((res) => res.json())
  yield put({ type: RECEIVED_PAGE_DATA, payload: data });
}

function* dataWatcher() {
  yield takeEvery(FETCH_DATA, fetchData);
}

export default function* watcherSaga() {
  yield all([dataWatcher()]);
}
