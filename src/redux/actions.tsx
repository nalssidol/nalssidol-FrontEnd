// actions.ts
import { ApiVilageFuture } from "../model/apiModel";
import { Action } from "redux";

export enum WeatherActionTypes {
  SET_WEATHER_DATA = "SET_WEATHER_DATA",
  SET_MAX_TEMP = "SET_MAX_TEMP",
  SET_MIN_TEMP = "SET_MIN_TEMP",
}

export interface WeatherState {
  data: ApiVilageFuture[] | null;
  max: string | null;
  min: string | null;
}

export interface SetWeatherDataAction
  extends Action<typeof WeatherActionTypes.SET_WEATHER_DATA> {
  payload: ApiVilageFuture[];
}

export interface SetMaxTempAction
  extends Action<typeof WeatherActionTypes.SET_MAX_TEMP> {
  payload: string;
}

export interface SetMinTempAction
  extends Action<typeof WeatherActionTypes.SET_MIN_TEMP> {
  payload: string;
}

export type WeatherAction =
  | SetWeatherDataAction
  | SetMaxTempAction
  | SetMinTempAction;

export const setWeatherData = (
  data: ApiVilageFuture[]
): SetWeatherDataAction => ({
  type: WeatherActionTypes.SET_WEATHER_DATA,
  payload: data,
});

export const setMaxTemp = (max: string): SetMaxTempAction => ({
  type: WeatherActionTypes.SET_MAX_TEMP,
  payload: max,
});

export const setMinTemp = (min: string): SetMinTempAction => ({
  type: WeatherActionTypes.SET_MIN_TEMP,
  payload: min,
});
