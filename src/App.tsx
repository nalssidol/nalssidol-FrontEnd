import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import DoldolImg from "./components/doldol/DoldolImg";

const BackGroundColor = styled.div`
  width: 100vw;
  min-width: 320px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ebebeb;
`;

const Wrapper = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 430px;
  height: 100%;
  max-height: 935px;

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
        <DoldolImg />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </BackGroundColor>
    </>
  );
};

export default App;
