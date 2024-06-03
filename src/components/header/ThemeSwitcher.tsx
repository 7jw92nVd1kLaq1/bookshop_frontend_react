import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import styled from "styled-components";


const ThemeSwitcher : React.FC = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeSwitcherStyle onClick={() => {toggleTheme()}}>
      {themeName === "light" ? "Dark" : "Light"}
    </ThemeSwitcherStyle>
  );
};

const ThemeSwitcherStyle = styled.button`
  color: ${props => props.theme.color.primary};
  background-color: ${props => props.theme.color.third};
  padding: 0.5rem;
  border: 0;
`;

export default ThemeSwitcher;