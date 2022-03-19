import * as React from "react";

const localStorageLabel = "localWeatherSearchHistory";

export const useCustomHistoryState = (history) => {
  const [state, dispatch] = React.useReducer(
    customReducer,
    history,
    (initialHistory) => {
      const storage = localStorage.getItem(localStorageLabel);
      const initialValue = storage
        ? JSON.parse(storage).values
        : initialHistory;
      return customReducer(baseState, {
        type: "init",
        history: initialValue,
      });
    }
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageLabel, JSON.stringify(state));
  }, [state]);

  const setHistory = React.useCallback(
    (value) =>
      dispatch({
        type: "setValue",
        value,
      }),
    []
  );

  const removeHistory = React.useCallback(
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
  return values.filter(
    (value) => value.id !== actions.id || value.searchAt !== actions.searchAt
  );
};

const customReducer = (state, action) => {
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
