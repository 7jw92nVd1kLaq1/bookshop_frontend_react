import { Cart } from '../models/cart.model';
import { httpClient } from './http';


export const getCart = async () => {
    const response = await httpClient.get<Cart>(`/carts/user`);
    return response.data as Cart;
}

export const addToCart = async (cartId: number, id: number, quantity: number) => {
    const response = await httpClient.post(`/carts/${cartId}/items`, { booksId: id, quantity });
    return response.status === 200;
}

export const deleteFromCart = async (cartId: number, id: number) => {
    const response = await httpClient.delete(`/carts/${cartId}/items/${id}`);
    console.log(response.status);
    return response.status === 200;
}