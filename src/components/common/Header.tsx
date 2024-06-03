import React, { useContext } from "react";
import { styled } from "styled-components";
import ThemeSwitcher from "../header/ThemeSwitcher";

import icon from "../../assets/images/book.svg"; 
import iconLight from "../../assets/images/book-light.svg";
import { ThemeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";
import { Category } from "../../models/category.model";
import { fetchCategories } from "../../api/category.api";


const Header : React.FC = () => {
  const {themeName} = useContext(ThemeContext);
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <HeaderStyle>
      <Link to="/">
        <div>
          <img src={themeName === 'light' ? iconLight : icon} alt="book icon" />
          <h1>Bookstore</h1>
        </div>
      </Link>
      <nav className="category">
      {
        categories.map((category, index) => (
          <div key={index}>
            <a href={category.id ? `/books?category_id=${category.id}` : `/books`}>{category.name}</a>
          </div>
        ))
      }
      </nav>
      <div>
        <nav className="auth">
          <div>
            <a href="/login">Login</a>
          </div>
          <div>
            <a href="/register">Register</a>
          </div>
        </nav>
        <ThemeSwitcher />
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background-color: ${props => props.theme.color.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;

  div, nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  div h1 {
    color: ${props => props.theme.color.primary};
    font-size: ${props => props.theme.heading.medium.fontSize};
  }

  nav a {
    color: ${props => props.theme.color.primary};
  }

  nav.auth {
    padding-right: 1rem;
  }
`;

export default Header;