import React from "react";
import { CartItem as CartItemType } from "../../../models/cart.model";
import { formatNumber } from "../../../utils/format";
import styled from "styled-components";
import Title from "../Title";
import Button from "../Button";


interface CartItemProps {
  item: CartItemType,
  checked: boolean,
  onCheck: (id: number) => void,
  onRemove: (id: number) => void
}

const CartItem : React.FC<CartItemProps> = ({item, onRemove, checked, onCheck}) => {
  return (
    <CartItemStyle>
        <Title size="medium">{item.books.title}</Title>
        <p>Author: {item.books.author.name}</p>
        <p>Category: {item.books.category.name}</p>
        <p>Amount: {item.amount}</p>
        <p>Price: {formatNumber(parseInt(item.books.prices[item.books.prices.length-1].price.slice(0, -3)))}</p>
        <div>
            <input type="checkbox" checked={checked} onChange={() => onCheck(item.booksId)} />
            <Button onClick={() => onRemove(item.booksId)} scheme="primary" size="small">Checkout</Button>
        </div>
    </CartItemStyle>
  )
};

const CartItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({theme}) => theme.color.primary};
  padding: 1rem;

  p {
    margin: 0.5rem 0;
  }

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
  }
`;

export default CartItem;