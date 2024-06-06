import styled from "styled-components";
import Title from "../components/common/Title";
import CartItem from "../components/common/cart/CartItem";
import useCart from "../hooks/useCart";
import { formatNumber } from "../utils/format";
import React from "react";
import { deleteFromCart } from "../api/cart.api";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const navigate = useNavigate();
  const {
    cartId,
    cartItems,
    setCartItems,
    totalPrice,
    isLoading,
    isError,
    isSuccess,
    error
  } = useCart();
  const [checkedItems, setCheckedItems] = React.useState<number[]>([]);
  
  const handleCheck = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleDelete = (itemId: number) => {
    deleteFromCart(cartId, itemId).then((result) => {
        if (!result) {
            return;
        }
        setCartItems(cartItems.filter((item) => item.booksId !== itemId));
    }).catch((error) => {
        console.error(error);
    });
  }

  return (
    <CartStyle>
        <div id="summary">
            <Title size="large">Cart Summary</Title>
            <div id="cart-id">
                <h3>Cart ID: {cartId}</h3>
            </div>
            <div id="total-price">
                <Title size="medium">Total Price</Title>
                <h3>Total Price: {formatNumber(totalPrice)}</h3>
            </div>
            <div id="checkout">
                <Button
                    onClick={() => {
                        console.log("Checkout");
                        navigate("/order", { state: { cartId, checkedItems, cartItems } });
                    }}
                    scheme="primary"
                    size="large"
                    disabled={checkedItems.length === 0}
                >Checkout</Button>
            </div>
        </div>
        <div id="items">
            {isLoading && <p>Loading...</p>}
            {isError && <p>{error}</p>}
            {(isSuccess && cartItems.length) && cartItems.map((item) => (
                <CartItem 
                    key={item.booksId} 
                    item={item} 
                    onRemove={handleDelete} 
                    checked={checkedItems.includes(item.booksId)} 
                    onCheck={handleCheck}
                />
            ))}
            {isSuccess && !cartItems.length && <p>No items in cart</p>}
        </div>
    </CartStyle>
  );
}

const CartStyle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  justify-content: center;
  width: 80%;
  margin: 0 auto;

  #summary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30%;
    align-items: start;

    #total-price {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: ${({theme}) => theme.color.primary};
    }
  }
`;

export default Cart;