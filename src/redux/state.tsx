import { ApiVilageFuture } from "../model/apiModel";

// state.ts
export interface WeatherState {
  data: ApiVilageFuture[] | null;
  max: string | null;
  min: string | null;
}

const initialState: WeatherState = {
  data: null,
  max: null,
  min: null,
};

export default initialState;
