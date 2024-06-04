import React, { ReactNode } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

import { styled } from "styled-components";

type LayoutProps = {
  children: ReactNode;
  flex?: boolean;
  center?: boolean;
};

const Layout : React.FC<LayoutProps> = ({children, flex, center}) => {
  return (
    <LayoutStyle>
      <Header />
      <MainStyle flex={flex} center={center}>
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

const MainStyle = styled.main<Omit<LayoutProps, "children">>`
  display: ${props => props.flex ? "flex" : "block"};
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.center ? "center" : "flex-start"};
  min-height: 100%;
  min-width: 100%;
  flex-grow: 1;
  background-color: ${props => props.theme.color.third};
`;

export default Layout;