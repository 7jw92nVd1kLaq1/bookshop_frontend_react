import styled from "styled-components";
import { Pagination } from "../../../models/pagination.model";


interface BooksPaginationProps {
  pagination: Pagination["pagination"];
  handlePageChange: (page: number) => void;
}


const BooksPagination : React.FC<BooksPaginationProps> = ({
  pagination,
  handlePageChange,
}) => {
  const { currentPage, totalPages, totalItems } = pagination;

  return (
    <BooksPaginationStyle>
      { currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
      )}
      <span className="current">Page {currentPage} of {totalPages} ({totalItems} items)</span>
      { totalPages > currentPage && (
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      )}
    </BooksPaginationStyle>
  );
}

const BooksPaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
  button {
    padding: 0.5rem;
    border: 1px solid ${props => props.theme.color.primary};
    background-color: ${props => props.theme.color.primary};
    color: white;
    cursor: pointer;
  }
  .current {
    padding: 0.5rem;
    color: ${props => props.theme.color.secondary};
    border: 1px solid ${props => props.theme.color.secondary};
    background-color: ${props => props.theme.color.background};
  }
`;

export default BooksPagination;