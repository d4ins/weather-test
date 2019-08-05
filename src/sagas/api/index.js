import axios from "axios";
import { call } from "redux-saga/effects";

export function* apiGet(url, paramsObject) {
  const params = { APPID: process.env.API_KEY, ...paramsObject };

  return yield call(() => axios({
    url,
    params,
    method: "get",
  }));
}
