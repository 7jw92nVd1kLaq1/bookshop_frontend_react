import React, { ReactNode } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout : React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;