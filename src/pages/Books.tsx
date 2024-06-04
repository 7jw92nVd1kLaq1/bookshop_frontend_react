import styled from 'styled-components';
import BooksFilter from '../components/common/books/BooksFilter';
import BooksList from '../components/common/books/BooksList';
import BooksPagination from '../components/common/books/BooksPagination';
import BooksItem from '../components/common/books/BooksItem';
import { useState } from 'react';
import useCategory from '../hooks/useCategory';
import { useSearchParams } from 'react-router-dom';
import { booksQueryString } from '../constants/queryString';
import useBooks from '../hooks/useBooks';


const Books = () => {
  const [sortByNew, setSortByNew] = useState<boolean | undefined>(true);
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(0);
  const { categories: availableCategories } = useCategory();
  const { 
    books, 
    pagination, 
    error, 
    isLoading, 
    handlePageChange,
    /*handleAmountChange*/
  } = useBooks({page: 1, amount: 10});

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

  const handlePageNumberChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page > 0) {
      params.set(PAGE, page.toString());
    } else {
      params.delete(PAGE);
    }
    handlePageChange(page > 0 ? page : 1);
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
        { books.length === 0 && <p>No books found</p>}
        { error && <p>{error}</p> }
        { isLoading && <p>Loading...</p> }
        <BooksPagination 
            pagination={pagination}
            handlePageChange={handlePageNumberChange}
        />
    </BooksStyle>
  )
};

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Books;