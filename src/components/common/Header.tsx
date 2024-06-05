import React, { useContext } from "react";
import { styled } from "styled-components";
import ThemeSwitcher from "../header/ThemeSwitcher";

import icon from "../../assets/images/book.svg"; 
import iconLight from "../../assets/images/book-light.svg";
import { ThemeContext } from "../../context/themeContext";
import { Link, useLocation } from "react-router-dom";
import { Category } from "../../models/category.model";
import { fetchCategories } from "../../api/category.api";
import { checkTokenValidity } from "../../api/auth.api";
import { useAuthStore } from "../../store/authStore";
import { useCartStore } from "../../store/cartStore";
import { getCart } from "../../api/cart.api";


const Header : React.FC = () => {
  const {themeName} = useContext(ThemeContext);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const { storeLogin } = useAuthStore();
  const { setCart, cart } = useCartStore();
  const location = useLocation();

  React.useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
    checkTokenValidity().then((data) => {
      console.log(data);
      if (data.token) {
        console.log(data.token);
        storeLogin(data.token);
      }
    });
    getCart().then((data) => {
      setCart(data);
    });
    console.log("location changed");
  }, [location]);

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
            Cart Item Count: {cart.cartsItems.length}
          </div>
          <div>
            <Link to="/login">
              <button>Login</button>
            </Link>
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