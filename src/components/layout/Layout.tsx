import React, { ReactNode } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

import { styled } from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

const Layout : React.FC<LayoutProps> = ({children}) => {
  return (
    <LayoutStyle>
      <Header />
      <MainStyle>
        {children}
      </MainStyle>
      <Footer />
    </LayoutStyle>
  )
}

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainStyle = styled.main`
  display: flex;
  flex-grow: 1;
  background-color: ${props => props.theme.color.third};
`;

export default Layout;