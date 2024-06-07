import { useEffect, useState } from "react";
import { Order } from "../models/order.model";
import { fetchOrder } from "../api/order.api";


const useOrder = (id: number) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsError(false);
    setIsSuccess(false);
    setIsLoading(true);
    fetchOrder(id).then((response) => {
      if (!response) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      setOrder(response);
      setIsSuccess(true);
      setIsLoading(false);
    }).catch((error) => {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    });
  }, [id]);

  return { order, isLoading, isError, isSuccess, error };
};

export default useOrder;