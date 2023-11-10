import * as S from "./styled";
import Address from "../../data/address_data.json";
import { useState } from "react";

type Props = {
  city: string;
  gu: string;
  cityOnClick(item: string): void;
  guOnClick(item: string): void;
};

const SelectAddress = (props: Props) => {
  const address = Address;
  const uniqueSiValues = [...new Set(address.map((item) => item.si))];

  const [selectedCity, setSelectedCity] = useState("지역명 선택");
  const [selectedGu, setSelectedGu] = useState("");

  return (
    <S.SelectAddressWrap>
      <S.SelectBar>
        {selectedCity} {selectedGu}{" "}
        <S.DropDown src="/select/dropdown.png" alt="" />
      </S.SelectBar>
      <S.SelectWrapper>
        <S.CitySection>
          <S.CityText>시/도</S.CityText>
          <S.UnderLine />
          <S.CityScroll>
            {uniqueSiValues.map((data, index) => (
              <S.CityContext
                key={index}
                bgcolor={props.city === data ? "#F1A000" : "#fff"}
                fontcolor={props.city === data ? "#fff" : ""}
                onClick={() => {
                  props.cityOnClick(data);
                  setSelectedCity(data);
                  setSelectedGu("");
                }}
              >
                {data}
              </S.CityContext>
            ))}
          </S.CityScroll>
        </S.CitySection>
        <S.GuSection>
          <S.CityText>구/군</S.CityText>
          <S.UnderLine />
          <S.CityScroll>
            {address
              .filter((data) => data.si === props.city)
              .map((data, index) => (
                <S.GuContext
                  key={index}
                  bgcolor={props.gu === data.gu ? "#F1A000" : "#fff"}
                  fontcolor={props.gu === data.gu ? "#fff" : ""}
                  onClick={() => {
                    props.guOnClick(data.gu);
                    setSelectedGu(data.gu);
                  }}
                >
                  {data.gu}
                </S.GuContext>
              ))}
          </S.CityScroll>
        </S.GuSection>
      </S.SelectWrapper>
    </S.SelectAddressWrap>
  );
};

export default SelectAddress;
