import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";


const ThemeSwitcher : React.FC = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => {toggleTheme()}}>
      {themeName === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeSwitcher;