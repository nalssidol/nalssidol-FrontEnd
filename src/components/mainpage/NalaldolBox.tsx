import * as S from "./style";
import { ApiVilageFuture } from "../../model/apiModel";
import { IsDoldolComent } from "../../utils/weatherInfo";

type Props = {
  vilageData: ApiVilageFuture[];
};

const NalaldolBox = (props: Props) => {
  return (
    <>
      <S.NalaldolBoxWrapper>
        <S.Nalaldol src="/날알돌 예시.png" alt="날알돌" />
        <S.SeasonBottom src="가을 아래.png" alt="계절 아래" />
        <S.Comment>{IsDoldolComent(props.vilageData)}</S.Comment>
      </S.NalaldolBoxWrapper>
    </>
  );
};

export default NalaldolBox;
