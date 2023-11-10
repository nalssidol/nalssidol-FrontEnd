import styled from "styled-components";

export const MainpageWrapper = styled.div`
  /* border: 1px solid red; */

  /* @media (min-height: 320px) {
    width: 320px;
  } */

  max-width: 430px;
  /* min-height: 100vh; */
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-image: url("/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  font-family: Gmarket Sans; /* 기본 폰트 재설정 */
  color: #000;
`;
