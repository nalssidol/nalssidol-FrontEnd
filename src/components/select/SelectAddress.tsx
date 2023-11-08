import Address from "../../data/address_data.json";

type Props = {
  firstAddress: string;
  firstOnClick(item: string): void;
  secondOnClick(item: string): void;
};

const SelectAddress = (props: Props) => {
  const address = Address;
  // 중복된 si 값을 제거하여 유니크한 si 배열 생성
  const uniqueSiValues = [...new Set(address.map((item) => item.si))];

  return (
    <div>
      <div>지역명 선택</div>
      <div style={{ display: "flex" }}>
        <div>
          <div>시/도</div>
          {uniqueSiValues.map((data) => (
            <div onClick={() => props.firstOnClick(data)}>{data}</div>
          ))}
        </div>
        <div>
          <div>구/군</div>
          {address
            .filter((data) => data.si === props.firstAddress)
            .map((data) => (
              <div onClick={() => props.secondOnClick(data.gu)}>{data.gu}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
