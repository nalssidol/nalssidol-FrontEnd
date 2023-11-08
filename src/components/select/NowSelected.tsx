import React from "react";
type Props = { firstAddress: string; secondAddress: string };

const NowSelected = (props: Props) => {
  return (
    <>
      <div>
        <img src="/select/prev.png" alt="<" />
      </div>
      <div>
        <div>현재지역</div>
        <div>
          {props.firstAddress} {props.secondAddress}
        </div>
      </div>
    </>
  );
};

export default NowSelected;
