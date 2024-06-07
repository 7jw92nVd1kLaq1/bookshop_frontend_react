import { OrderForm, OrderList } from "../models/order.model";
import { httpClient } from "./http"


export const createOrder = async (orderForm: OrderForm) => {
  try {
    const response = await httpClient.post("/orders", orderForm);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchOrder = async (id: number) => {
  try {
    const response = await httpClient.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchOrdersList = async (page: number, amount: number) => {
  try {
    const response = await httpClient.get<OrderList>("/orders?page=" + page + "&amount=" + amount);
    return response.data as OrderList;
  } catch (error) {
    console.error(error);
  }
};