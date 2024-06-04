import styled from "styled-components";


interface BooksListProps {
  children: React.ReactNode;
}

const BooksList : React.FC<BooksListProps> = ({ children }) => {
  return (
    <BooksListStyle>
      {children}
    </BooksListStyle>
  )
}

const BooksListStyle = styled.div`
  display: grid;
  gap: 1rem;
  width: 80%;
  margin: 4rem auto;
  grid-template-columns: repeat(4, minmax(0, 1fr));   
`;

export default BooksList;