import { useEffect, useState } from "react"
import { getCart } from "../api/cart.api";
import { CartItem } from "../models/cart.model";


const useCart = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [cartId, setCartId] = useState<number>(0);
    const [error, setError] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        getCart().then((cart) => {
            setCartId(cart.id);
            setCartItems(cart.cartsItems);
            const prices = cart.cartsItems.map((item) => parseInt(item.books.prices[0].price) * item.amount);
            setTotalPrice(prices.reduce((acc, price) => acc + price, 0));
            setIsSuccess(true);
            setIsLoading(false);
        }).catch((error) => {
            setError(error.message);
            setIsError(true);
            setIsSuccess(false);
            setIsLoading(false);
        });
        console.log("Fetching cart items");
    }, []);

    useEffect(() => {
        if (cartItems.length === 0) {
            setTotalPrice(0);
        } else {
            const prices = cartItems.map((item) => parseInt(item.books.prices[0].price) * item.amount);
            setTotalPrice(prices.reduce((acc, price) => acc + price, 0));
        }
        console.log("Calculating total price");
    }, [cartItems]);

    return { cartItems, setCartItems, totalPrice, isLoading, cartId, error, isError, isSuccess };
};

export default useCart;