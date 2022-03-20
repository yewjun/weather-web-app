import * as React from "react";

const localStorageLabel = "localWeatherSearchHistory";

// custom hook to manage history state using reducer
export const useCustomHistoryState = (history) => {
  const [state, dispatch] = React.useReducer(
    customReducer,
    history,
    (initialHistory) => {
      const storage = localStorage.getItem(localStorageLabel); // get existing history records in local storage if any

      const initialValue = storage // initialise store with either default values or local storage values
        ? JSON.parse(storage).values
        : initialHistory;

      return customReducer(baseState, {
        // dispatch init action to initialise
        type: "init",
        history: initialValue,
      });
    }
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageLabel, JSON.stringify(state)); // update local storage with latest history state
  }, [state]);

  const setHistory = React.useCallback(
    // dispatch function to set history into store
    (value) =>
      dispatch({
        type: "setValue",
        value,
      }),
    []
  );

  const removeHistory = React.useCallback(
    // dispatch function to remove history value in store
    (value) =>
      dispatch({
        type: "removeValue",
        value,
      }),
    []
  );

  return {
    values: state.values,
    setHistory,
    removeHistory,
  };
};

const baseState = {
  values: {},
};

const remove = (actions, values) => {
  // to filter out value that going to remove by matching weather ID and search timestamp
  return values.filter(
    (value) => value.id !== actions.id || value.searchAt !== actions.searchAt
  );
};

const customReducer = (state, action) => {
  // reducer function to manage dispatched action
  switch (action.type) {
    case "init":
      return {
        ...state,
        values: action.history,
      };
    case "setValue":
      return {
        ...state,
        values: [...state.values, action.value],
      };
    case "removeValue": {
      return {
        ...state,
        values: remove(action.value, state.values),
      };
    }
    default:
      return state;
  }
};
