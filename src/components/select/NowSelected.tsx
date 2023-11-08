import { useNavigate } from "react-router-dom";
import * as S from "./styled";

type Props = { city: string; gu: string };

const NowSelected = (props: Props) => {
  const navigate = useNavigate();
  return (
    <S.NowSelectedWrap>
      <S.PrevArrow
        src="/select/prev.png"
        alt="<"
        onClick={() => navigate("/")}
      />
      <div>
        <S.SubText>현재지역</S.SubText>
        <S.MainText>
          {props.city} {props.gu}
        </S.MainText>
      </div>
    </S.NowSelectedWrap>
  );
};

export default NowSelected;
