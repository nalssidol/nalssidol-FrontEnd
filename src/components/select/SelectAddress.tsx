import * as S from "./styled";
import Address from "../../data/address_data.json";

type Props = {
  city: string;
  gu: string;
  cityOnClick(item: string): void;
  guOnClick(item: string): void;
};

const SelectAddress = (props: Props) => {
  const address = Address;
  // 중복된 si 값을 제거하여 유니크한 si 배열 생성
  const uniqueSiValues = [...new Set(address.map((item) => item.si))];

  return (
    <S.SelectAddressWrap>
      <S.SelectBar>지역명 선택</S.SelectBar>
      <S.SelectWrapper>
        <S.CitySection>
          <S.CityText>시/도</S.CityText>
          <S.UnderLine />
          {uniqueSiValues.map((data, index) => (
            <S.CityContext
              key={index}
              bgcolor={props.city === data ? "#F1A000" : "#fff"}
              fontcolor={props.city === data ? "#fff" : ""}
              onClick={() => props.cityOnClick(data)}
            >
              {data}
            </S.CityContext>
          ))}
        </S.CitySection>
        <S.GuSection>
          <S.CityText>구/군</S.CityText>
          <S.UnderLine />
          {address
            .filter((data) => data.si === props.city)
            .map((data, index) => (
              <S.GuContext
                key={index}
                bgcolor={props.gu === data.gu ? "#F1A000" : "#fff"}
                fontcolor={props.gu === data.gu ? "#fff" : ""}
                onClick={() => props.guOnClick(data.gu)}
              >
                {data.gu}
              </S.GuContext>
            ))}
        </S.GuSection>
      </S.SelectWrapper>
    </S.SelectAddressWrap>
  );
};

export default SelectAddress;
