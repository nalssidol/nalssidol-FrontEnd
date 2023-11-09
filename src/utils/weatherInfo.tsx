import { ApiVilageFuture } from "../model/apiModel";

export const IsDoldolComent = (data: ApiVilageFuture[]) => {
  let doldolComent;
  if (
    data?.some(
      (filteredData) =>
        filteredData.category === "PTY" &&
        (filteredData.fcstValue === "1" || // 비
          filteredData.fcstValue === "2" || // 비+눈
          filteredData.fcstValue === "4") // 소나기
    )
  ) {
    doldolComent = (
      <p>
        비가 올 예정이돌
        <br />
        우산을 챙겨가돌!!
      </p>
    );
  } else if (
    data?.some(
      (filteredData) =>
        filteredData.category === "PTY" && filteredData.fcstValue === "3"
    )
  ) {
    doldolComent = (
      <p>
        눈이 올 예정이돌
        <br />
        우산을 챙겨가돌!!
      </p>
    );
  } else
    doldolComent = (
      <p>
        날씨가 맑돌!😎 <br /> 외출하자돌!👍
      </p>
    );
  return doldolComent;
};

export const IsRainy = (data: ApiVilageFuture[]) => {
  return data?.some((filteredData) => {
    return (
      filteredData.category === "PTY" &&
      (filteredData.fcstValue === "1" || filteredData.fcstValue === "2")
    );
  });
};

export const IsSnow = (data: ApiVilageFuture[]) => {
  const result = data?.some(
    (filteredData) =>
      filteredData.category === "PTY" && filteredData.fcstValue === "3"
  );
  return result ? (
    <p>
      눈이 올 예정이돌
      <br />
      우산을 챙겨가돌!!
    </p>
  ) : (
    <p>날씨 개꿀 😎👍</p>
  );
};

const today = new Date();
const year = String(today.getFullYear());
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate() - 1).padStart(2, "0");

export const FormattedDate: string = `${year}${month}${day}`;

type defaultType = {
  nx: number;
  ny: number;
  city: string;
  gu: string;
};
export const DefaultNx = (state: defaultType): number => {
  if (state && typeof state.nx === "number") {
    return state.nx;
  } else {
    return 55;
  }
};
export const DefaultNy = (state: defaultType): number => {
  if (state && typeof state.ny === "number") {
    return state.ny;
  } else {
    return 127;
  }
};
export const DefaultCity = (state: defaultType): string => {
  if (state && typeof state.city === "string") {
    return state.city;
  } else {
    return "서울특별시";
  }
};
export const DefaultGu = (state: defaultType): string => {
  if (state && typeof state.gu === "string") {
    return state.gu;
  } else {
    return "중구";
  }
};
