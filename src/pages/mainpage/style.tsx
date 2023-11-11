import styled from "styled-components";

export const MainpageWrapper = styled.div`
  /* border: 1px solid red; */

  width: 100vw;
  max-width: 430px;
  min-width: 320px;
  height: 100vh;
  max-height: 935px;

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
