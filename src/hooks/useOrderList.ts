import { useEffect, useState } from "react"
import { OrderList } from "../models/order.model"
import { fetchOrdersList } from "../api/order.api";


const useOrderList = () => {
  const [pagination, setPagination] = useState<{ currentPage: number, totalPages: number, totalItems: number}>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0
  });
  const [orderList, setOrderList] = useState<Omit<OrderList, 'pagination'> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setIsError(false);
    setIsSuccess(false);
    setIsLoading(true);
    fetchOrdersList(page, 10).then((response) => {
      if (!response) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      setPagination(response.pagination);
      setOrderList(response.orders)
      setIsSuccess(true);
      setIsLoading(false);
    }).catch((error) => {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    });
  }, [page]);

  return { orderList, isLoading, isError, isSuccess, error, page, setPage, pagination };
};

export default useOrderList;