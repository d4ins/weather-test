import { createActions } from "redux-actions";

const ACTION_TYPES = {
  START_SEARCH: "START_SEARCH",
  FINISH_SEARCH: "FINISH_SEARCH"
};

const { startSearch, finishSearch } = createActions({
  [ACTION_TYPES.START_SEARCH]: (city = "") => ({ city, loading: true }),
  [ACTION_TYPES.FINISH_SEARCH]: ({ chartData , error }) => ({
    loading: false, chartData, error
  })
});

export { ACTION_TYPES, startSearch, finishSearch };
