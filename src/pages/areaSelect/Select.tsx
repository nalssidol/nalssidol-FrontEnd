import { useState } from "react";
import { API } from "../../api/axios";
import NowSelected from "../../components/select/NowSelected";
import SelectAddress from "../../components/select/SelectAddress";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";

const Select = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  //-------------------------------------------

  const [city, setCity] = useState<string>("서울특별시");
  const [gu, setGu] = useState<string>("중구");
  const cityOnClick = (item: string) => {
    setCity(item);
    setGu("");
    // console.log(city);
  };
  const guOnClick = (item: string) => {
    setGu(item);
    // console.log(gu);
  };

  const handleDataSet = async () => {
    API.get(`/api/location/?city=${city}&gu=${gu}`)
      .then((response) => {
        console.log(response.data);
        const location = response.data;

        navigate("", { state: location });
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  };

  return (
    <S.SelectWrapper>
      <NowSelected city={city} gu={gu} />
      <S.SubWrapper>
        <SelectAddress
          city={city}
          gu={gu}
          cityOnClick={cityOnClick}
          guOnClick={guOnClick}
        />
        <S.LocationBtn onClick={() => handleDataSet()}>
          지역 설정하기
        </S.LocationBtn>
      </S.SubWrapper>
    </S.SelectWrapper>
  );
};

export default Select;
