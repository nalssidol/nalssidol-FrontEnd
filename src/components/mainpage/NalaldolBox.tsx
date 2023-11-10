import * as S from "./style";
import { ApiVilageFuture } from "../../model/apiModel";
import { IsDoldolComent } from "../../utils/weatherInfo";
import "../../style/styles.css";

type Props = {
  vilageData: ApiVilageFuture[];
  doldol: string;
};

const NalaldolBox = (props: Props) => {
  // 돌돌이 밑 계절이미지
  const today: Date = new Date();
  const month: number = today.getMonth() + 1;
  console.log(month);

  interface MonthToSeasonMap {
    [key: number]: string;
  }

  const MonthToSeason: MonthToSeasonMap = {
    1: "/겨울 아래.png",
    2: "/겨울 아래.png",
    3: "/봄 아래.png",
    4: "/봄 아래.png",
    5: "/봄 아래.png",
    6: "/여름 아래.png",
    7: "/여름 아래.png",
    8: "/여름 아래.png",
    9: "/가을 아래.png",
    10: "/가을 아래.png",
    11: "/가을 아래.png",
    12: "/겨울 아래.png",
  };
  const getSeasonImg = (monthNum: number): string => {
    return MonthToSeason[monthNum] || "/여름 아래.png";
  };
  const SeasonImg: string = getSeasonImg(month);

  return (
    <>
      <S.NalaldolBoxWrapper>
        <S.Nalaldol src={props.doldol || "/doldol.png"} alt="날알돌" />
        <S.SeasonBottom src={SeasonImg} alt="계절 아래" />
        {/* <S.SeasonBottom src="/봄 아래.png" alt="계절 아래" /> */}
        <S.Comment>{IsDoldolComent(props.vilageData)}</S.Comment>
      </S.NalaldolBoxWrapper>
    </>
  );
};

export default NalaldolBox;
