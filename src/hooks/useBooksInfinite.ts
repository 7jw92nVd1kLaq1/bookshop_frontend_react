import { useEffect, useState } from "react";
import { Pagination } from "../models/pagination.model";
import { loadBooks } from "../api/book.api";


type UseBooksInfiniteParams = {
    page?: number;
    amount?: number;
};

const useBooksInfinite = ({page, amount} : UseBooksInfiniteParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(page ? page : 1);
  const [currentAmount, setCurrentAmount] = useState<number>(amount ? amount : 10);
  const [books, setBooks] = useState<Pagination>({
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
    },
    books: [],
  });

  const handleNextPage = () => {
    if (currentPage + 1 > books.pagination.totalPages) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const handleAmountChange = (amount: number) => {
    if (amount < 1) {
      setCurrentAmount(10);
    } else if (amount > 100) {
      setCurrentAmount(100);
    } else if (amount > books.pagination.totalItems) {
      setCurrentAmount(books.pagination.totalItems);
    } else {
      setCurrentAmount(amount);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    loadBooks({ page: currentPage, amount: currentAmount }).then((data) => {
      setBooks({
        pagination: {
          currentPage: data.pagination.currentPage,
          totalPages: data.pagination.totalPages,
          totalItems: data.pagination.totalItems,
        },
        books: [...books.books, ...data.books],
      });
      setIsLoading(false);
    }).catch((error) => {
      setError(error.message);
      setBooks({
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalItems: 0,
        },
        books: [],
      });
      setIsLoading(false);
    });
  }, [currentPage]);

  return { 
    isLoading, 
    error,
    books: books.books, 
    handleNextPage,
    handleAmountChange,
    pagination: books.pagination, 
    setIsLoading, 
    setBooks 
  };
};

export default useBooksInfinite;