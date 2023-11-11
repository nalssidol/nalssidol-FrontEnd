import styled from "styled-components";

const DoldolimgWrapper = styled.div`
  @media (max-width: 1350px) {
    display: none;
  }
`;
const LeftWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: absolute;
  left: 18%;
  top: 8%;

  img {
    transform: translate(-50%, -50%);
  }
`;
const RightWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: absolute;
  right: 6%;
  top: 8%;

  img {
    transform: translate(-50%, -50%);
  }
`;

const DoldolImg = () => {
  return (
    <DoldolimgWrapper>
      <LeftWrapper>
        <img
          src="/2dol.png"
          alt=""
          style={{
            width: "150px",
            top: "5%",
          }}
        />
        <img
          src="/3dol.png"
          alt=""
          style={{
            width: "170px",
            top: "30%",
          }}
        />
        <img
          src="/7dol.png"
          alt=""
          style={{
            width: "200px",
            top: "56%",
          }}
        />
        <img
          src="/8dol.png"
          alt=""
          style={{
            width: "170px",
            top: "78%",
          }}
        />
      </LeftWrapper>
      <RightWrapper>
        <img
          src="/1dol.png"
          alt=""
          style={{
            width: "150px",
            top: "5%",
          }}
        />
        <img
          src="/5dol.png"
          alt=""
          style={{
            width: "170px",
            top: "30%",
          }}
        />
        <img
          src="/6dol.png"
          alt=""
          style={{
            width: "160px",
            top: "55%",
          }}
        />
        <img
          src="/4dol.png"
          alt=""
          style={{
            width: "150px",
            top: "80%",
          }}
        />
      </RightWrapper>
    </DoldolimgWrapper>
  );
};

export default DoldolImg;
