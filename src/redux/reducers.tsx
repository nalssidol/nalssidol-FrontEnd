// reducer.ts
import { WeatherState } from "./state";
import initialState from "./state";
import { WeatherAction, WeatherActionTypes } from "./actions";

const weatherReducer = (
  state: WeatherState = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.SET_WEATHER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case WeatherActionTypes.SET_MAX_TEMP:
      return {
        ...state,
        max: action.payload,
      };
    case WeatherActionTypes.SET_MIN_TEMP:
      return {
        ...state,
        min: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
