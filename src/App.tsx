import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import { Provider } from "react-redux";
import store from "./redux/store";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fefdf9;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fefdf9;
  /* background-image: url('/bgImg.png');
  background-size: 100% auto;
  background-size: cover; */
  font-family: NotoSansRegular; /* 기본 폰트 재설정 */
  color: #000;
`;

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <BackGroundColor>
          <Wrapper>
            <Outlet />
          </Wrapper>
        </BackGroundColor>
      </Provider>
    </>
  );
};

export default App;
