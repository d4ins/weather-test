import { handleActions } from "redux-actions";

import { ACTION_TYPES } from "./actions";

const INITIAL_STATE = {
  city: "",
  loading: false,
  error: null,
  chartData: {
    labels: null,
    data: null
  },
};

export default handleActions(
  {
    [ACTION_TYPES.START_SEARCH]: (state, action) => ({
      ...state,
      city: action.payload.city,
      loading: action.payload.loading,
    }),

    [ACTION_TYPES.FINISH_SEARCH]: (state, { payload }) => ({
      ...state,
      error: payload.error,
      loading: payload.loading,
      chartData: payload.chartData || INITIAL_STATE.chartData,
    })
  },
  INITIAL_STATE
);
