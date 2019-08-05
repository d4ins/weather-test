import { applyMiddleware, createStore, compose  } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "@sagas";
import reducers from "@redux/reducers";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
