import styled from 'styled-components';
import BooksFilter from '../components/common/books/BooksFilter';
import BooksList from '../components/common/books/BooksList';
import BooksItem from '../components/common/books/BooksItem';
import { useEffect, useRef, useState } from 'react';
import useCategory from '../hooks/useCategory';
import { useSearchParams } from 'react-router-dom';
import { booksQueryString } from '../constants/queryString';
import useBooks from '../hooks/useBooks';
import useBooksInfinite from '../hooks/useBooksInfinite';


const Books = () => {
  const nextPageElement = useRef<HTMLDivElement>(null);
  const [sortByNew, setSortByNew] = useState<boolean | undefined>(true);
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(0);
  const { categories: availableCategories } = useCategory();
  const { 
    books, 
    pagination, 
    error, 
    isLoading, 
    handleNextPage
    /*handleAmountChange*/
  } = useBooksInfinite({page: 1, amount: 10});

  const [searchParams, setSearchParams] = useSearchParams();
  const { CATEGORY_ID, NEW, PAGE, /*AMOUNT*/ } = booksQueryString;

  const handleCategoryURLChange = (category: number | undefined) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set(CATEGORY_ID, category.toString());
    } else {
      params.delete(CATEGORY_ID);
    }
    setSearchParams(params.toString());
  }

  const handleNewOldURLChange = (newOld: boolean | undefined) => {
    const params = new URLSearchParams(searchParams);
    if (typeof newOld === "boolean") {
      params.set(NEW, newOld.toString());
    } else {
      params.delete(NEW);
    }
    setSearchParams(params.toString());
  };

//   const handleAmountPerPageChange = (amount: number) => {
//     const params = new URLSearchParams(searchParams);
//     if (amount > 0) {
//       params.set(AMOUNT, amount.toString());
//     } else {
//       params.delete(AMOUNT);
//     }
//     handlePageChange(1);
//     handleAmountChange(amount);
//     setSearchParams(params.toString());
//   };

  useEffect(() => {
    setInterval(() => {
      if (nextPageElement.current) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            handleNextPage();
          }
        }, { threshold: 1 });
        observer.observe(nextPageElement.current);
        return () => observer.disconnect();
      }
    }, 1000);
  });

  return (
    <BooksStyle>
        <BooksFilter 
          sortByNew={sortByNew} 
          setSortByNew={setSortByNew} 
          categories={availableCategories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          handleCategoryURLChange={handleCategoryURLChange}
          handleNewOldURLChange={handleNewOldURLChange}
        />
        { books.length > 0 && (
            <BooksList>
                {books.map((book) => (
                    <BooksItem key={book.id} book={book} />
                ))}
            </BooksList>
        )}
        <div ref={nextPageElement}></div>
        { books.length === 0 && <p>No books found</p>}
        { error && <p>{error}</p> }
        { isLoading && <p>Loading...</p> }
    </BooksStyle>
  )
};

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Books;