import { combineReducers } from "redux";

import weather from "./modules/weather/reducer";

const reducers = combineReducers({
  weather
});

export default reducers;
