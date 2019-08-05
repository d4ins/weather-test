import { put, takeEvery, call } from "redux-saga/effects";

import { apiGet } from "@sagas/api";

import { normalizeWeather } from "@normalizers";

import { ACTION_TYPES, finishSearch } from "@redux/modules/weather";

function* fetchWeatherWorker(action) {
  try {
    const { API_HOST } = process.env;
    const { payload: { city }} = action;

    const response = yield call(apiGet, API_HOST, { q: city });
    const chartData = yield call(normalizeWeather, response.data);

    yield put(finishSearch({ chartData, error: null }));
  } catch (e) {
    const { response: { status } } = e;

    yield put(finishSearch({ error: {
      status, text: status === 404
        ? "Sorry, try a different search"
        : "Sorry, something went wrong"
      }
    }));
  }
}

export default function* root() {
  yield takeEvery(ACTION_TYPES.START_SEARCH, fetchWeatherWorker);
}
