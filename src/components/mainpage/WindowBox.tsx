import { ApiVilageFuture } from "../../model/apiModel";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

type Props = {
  vilageData: ApiVilageFuture[];
  city: string;
  gu: string;
};

const WindowBox = (props: Props) => {
  const navigate = useNavigate();
  const min =
    props.vilageData.length > 0
      ? props.vilageData.filter((item) => item.category === "TMN")[0].fcstValue
      : "0";
  const max =
    props.vilageData.length > 0
      ? props.vilageData.filter((item) => item.category === "TMX")[0].fcstValue
      : "0";
  // console.log(min, max);

  return (
    <>
      <S.WindowBoxWrapper>
        <S.Location onClick={() => navigate("select", { state: props })}>
          {/* 서울특별시 용산구 */}
          {props.city} {props.gu}
          <img src="/search.png" alt="검색" />
        </S.Location>
        <S.Temperature>15℃</S.Temperature>
        <S.HighAndLow>
          최고 {parseInt(max)}℃ | 최저 {parseInt(min)}℃
        </S.HighAndLow>
      </S.WindowBoxWrapper>
    </>
  );
};

export default WindowBox;
