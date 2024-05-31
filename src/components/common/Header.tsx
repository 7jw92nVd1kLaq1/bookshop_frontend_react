import React from "react";
import { styled } from "styled-components";
import ThemeSwitcher from "../header/ThemeSwitcher";


const Header : React.FC = () => {
  return (
    <HeaderStyle>
      <h1>Bookstore</h1>
      <ThemeSwitcher/>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background-color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: space-between;
  items-align: center;
  width: 100%;
  padding: 1rem;
`;

export default Header;