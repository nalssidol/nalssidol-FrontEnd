// store.ts
import { createStore, combineReducers } from "redux";
import weatherReducer from "./reducers";
import initialState from "./state";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = createStore(rootReducer, { weather: initialState });

export default store;
