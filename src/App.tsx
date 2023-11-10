import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ebebeb;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;

  font-family: Gmarket Sans; /* 기본 폰트 재설정 */
  color: #000;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BackGroundColor>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </BackGroundColor>
    </>
  );
};

export default App;
