import { all } from "redux-saga/effects";

import weather from "./modules/weather";

export default function* root() {
  yield all([
    weather(),
  ]);
}
