import { useState } from "react";
import { API } from "../../api/axios";
import NowSelected from "../../components/select/NowSelected";
import SelectAddress from "../../components/select/SelectAddress";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import Loading from "../loading/Loading";

const Select = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>(location.state.city);
  const [gu, setGu] = useState<string>(location.state.gu);
  const cityOnClick = (item: string) => {
    setCity(item);
    setGu("");
  };
  const guOnClick = (item: string) => {
    setGu(item);
  };

  // const handleDataSet = async () => {
  //   setIsLoading(true);

  //   API.get(`/api/location/?city=${city}&gu=${gu}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       const location = response.data;

  //       navigate("/", { state: location });
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("API 요청 실패:", error);
  //       setIsLoading(false);
  //     });
  // };

  const handleDataSet = async () => {
    setIsLoading(true);

    const encodedCity = encodeURIComponent(city);
    const encodedGu = encodeURIComponent(gu);

    const url = `/api/location/?city=${encodedCity}&gu=${encodedGu}`;
    // console.log(url);
    
    const decodedUrl = decodeURIComponent(url);
    // console.log(decodedUrl);
    

    API.get(decodedUrl)
      .then((response) => {
        // console.log(response.data);
        const location = response.data;

        navigate("/", { state: location });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
        setIsLoading(false);
      });
  };

  return (
    <S.SelectWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NowSelected city={location.state.city} gu={location.state.gu} />
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
        </>
      )}
    </S.SelectWrapper>
  );
};

export default Select;
