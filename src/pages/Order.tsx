import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import { useForm } from "react-hook-form";
import { Address, OrderForm } from "../models/order.model";
import Button from "../components/common/Button";
import { createOrder } from "../api/order.api";


const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state;
  const books = orderData.cartItems.filter(
    (item: any) => orderData.checkedItems.includes(item.booksId)
  ).map((item: any) => {
    return {
      booksId: item.booksId,
      amount: item.amount
    }
  });


  const { handleSubmit, register } = useForm<Address>();

  const onSubmit = (data: Address) => {
    const orderForm: OrderForm = {
      books: books,
      address: data
    }

    createOrder(orderForm).then((response) => {
      navigate("/");
    });
  }

  return (
    <OrderStyle>
      <div id="information-and-address">
        <Title size="large">Order</Title>
        <Title size="medium">Thank you for your order!</Title>
        <hr />
        <h3>Enter Shipping Address</h3>
        <InputText placeholder="Recipient" inputType="text" {...register("recipient")}/>
        <InputText placeholder="Address 1" inputType="text" {...register("address1")}/>{/* TODO: Add register for address1 */}
        <InputText placeholder="Address 2" inputType="text" {...register("address2")}/>{/* TODO: Add register for address2 */}
        <InputText placeholder="City" inputType="text" {...register("city")}/>{/* TODO: Add register for city */}
        <InputText placeholder="State" inputType="text" {...register("state")}/>{/* TODO: Add register for state */}
        <InputText placeholder="Country" inputType="text" {...register("country")}/>{/* TODO: Add register for country */}
        <InputText placeholder="Postal Code" inputType="text" {...register("postalCode")}/>{/* TODO: Add register for postalCode */}
        <InputText placeholder="Phone Number" inputType="text" {...register("phoneNumber")}/>{/* TODO: Add register for phoneNumber */}
      </div>
      <div id="items-and-create-order">
        <Button onClick={handleSubmit(onSubmit)} scheme="primary" size="large">Create Order</Button>
      </div>
    </OrderStyle>
  )
};

const OrderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 80%;
  margin: 50px auto;

  #information-and-address {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 50px;
    h3 {
      color: ${props => props.theme.color.primary};
      margin: 20px 0 10px 0;
    }
  }

  #items-and-create-order {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

export default Order;