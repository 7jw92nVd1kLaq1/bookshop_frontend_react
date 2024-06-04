import styled from "styled-components";
import { getDemoImageURL } from "../../../utils/image";
import { Book } from "../../../models/book.model";
import { formatNumber } from "../../../utils/format";


interface BooksItemProps {
  book: Book;
}

const BooksItem : React.FC<BooksItemProps> = ({book}) => {
  return (
    <BooksItemStyle>
        <img src={getDemoImageURL(600, 600)} alt="book" />
        <h3>{book.title}</h3>
        <p>{book.author.name}</p>
        <div className="price-likes">
            <p>{formatNumber(10000)}{'원'}</p>
            <div>
                Like
            </div>
        </div>
    </BooksItemStyle>
  );
};

const BooksItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1.5rem;
  border-radius: 0.5rem;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  background-color: ${props => props.theme.color.background};
  .price-likes {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: end;
    margin-top: 1rem;
    p {
        margin: 0;
        color: ${props => props.theme.color.primary};
    }
    div {
        color: ${props => props.theme.color.secondary};
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }    
  h3 {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    color: ${props => props.theme.color.primary};
  }
  p {
    margin: 0.5rem 0;
    color: ${props => props.theme.color.secondary};
  }
`;

export default BooksItem;