import React, { useState } from "react";
import { API } from "../../api/axios";
import NowSelected from "../../components/select/NowSelected";
import SelectAddress from "../../components/select/SelectAddress";

const Select = () => {
  //navigate 로 정보 담아주거나 context or recoil 사용
  const [nx, setNx] = useState<number>();
  const [ny, setNy] = useState<number>();
  //-------------------------------------------

  const [firstAddress, setFirstAddress] = useState<string>("서울특별시");
  const [secondAddress, setSecondAddress] = useState<string>("종로구");
  const firstOnClick = (item: string) => {
    setFirstAddress(item);
    setSecondAddress("");
    // console.log(firstAddress);
  };
  const secondOnClick = (item: string) => {
    setSecondAddress(item);
    // console.log(secondAddress);
  };

  const handleDataSet = async () => {
    API.get(`/api/location/?city=${firstAddress}&gu=${secondAddress}`)
      .then((response) => {
        console.log(response.data);
        setNx(response.data.nx);
        setNy(response.data.ny);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  };

  return (
    <div>
      <NowSelected firstAddress={firstAddress} secondAddress={secondAddress} />
      <hr />
      <SelectAddress
        firstAddress={firstAddress}
        firstOnClick={firstOnClick}
        secondOnClick={secondOnClick}
      />
      <div onClick={() => handleDataSet()}>지역 설정하기</div>
    </div>
  );
};

export default Select;
