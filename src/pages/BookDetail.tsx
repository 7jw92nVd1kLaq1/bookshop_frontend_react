import { useParams } from "react-router-dom";
import styled from "styled-components";
import useSingleBook from "../hooks/useSingleBook";
import { getDemoImageURL } from "../utils/image";
import { formatDate, formatNumber } from "../utils/format";
import { Link } from "react-router-dom";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";
import { useEffect, useState } from "react";
import { addToCart as addToCartAPI } from "../api/cart.api";
import useSingleBookReviews from "../hooks/useSingleBookReviews";
import BookReview from "../components/common/bookDetail/BookReview";
import { ReviewForm, createBookReview } from "../api/review.api";
import BookReviewForm from "../components/common/bookDetail/BookReviewForm";


const BookDetail = () => {
  const {id} = useParams<{id: string}>();
  const [itemInCart, setItemInCart] = useState<boolean>(false);
  const { cart, addToCart } = useCartStore();
  const { 
    book, 
    loading, 
    error,
    handleLikeBook,
    handleUnlikeBook,
  } = useSingleBook(id);
  const { 
    reviews, 
    loading: reviewsLoading, 
    error: reviewsError,
    refreshReviews,
  } = useSingleBookReviews(id ? parseInt(id) : undefined);
  const { isLoggedIn } = useAuthStore();

  const submitReview = (data: ReviewForm) => {
    if (!id) {
      return;
    }
    createBookReview(parseInt(id), data).then((responseData) => {
      if (!responseData) {
        return;
      }
      refreshReviews();
    });
  };

  useEffect(() => {
    if (!id) {
        return;
    }
    const isItemInCart = cart.cartsItems.find((item) => item.booksId === parseInt(id));
    if (isItemInCart) {
        setItemInCart(true);
    } else {
        setItemInCart(false);
    }
  }, []);

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  if (error) {
    return (
      <div>
        {error}
      </div>
    )
  }
  if (!book) {
    return (
      <div>
        No book found
      </div>
    )
  }
  return (
    <BooksItemStyle>
        <ImageAndInfoStyle>
            <div>
                <img src={getDemoImageURL(500, 500)} alt="book" />
            </div>
            <div className="book-info-box">
                <Title size="large">
                    {book.title}
                </Title>
                <div className="top-book-info">
                    <label>Author</label>
                    <p>{book.author.name}</p>
                </div>
                <div className="top-book-info">
                    <label>Form</label>
                    <p>{book.form}</p>
                </div>
                <div className="top-book-info">
                    <label>Category</label>
                    <Link to={'/books?category_id=2'}><p>{book.category.name}</p></Link>
                </div>
                <div className="top-book-info">
                    <label>Publishers</label>
                    <p>{book.publishers}</p>
                </div>
                <div className="top-book-info">
                    <label>Published Date</label>
                    <p>{formatDate(book.pubDate)}</p>
                </div>
                <div className="top-book-info">
                    <label>Page Number</label>
                    <p>{book.pageNumber}</p>
                </div>
                <div className="price-likes">
                    <p>{formatNumber(13000)}{'원'}</p>
                    <Button 
                        size="medium" 
                        scheme="primary" 
                        disabled={!isLoggedIn}
                        onClick={book.liked ? handleUnlikeBook : handleLikeBook}
                    > 
                        {book.likes} Like
                    </Button>
                    
                </div>
                <Button size="large" scheme="primary" disabled={itemInCart} onClick={
                    () => {
                        addToCart(book);
                        setItemInCart(true);
                        addToCartAPI(cart.id, book.id, 10).then(() => {
                            console.log("Added to cart");
                        });
                    }
                }>
                    {itemInCart ? "Added to Cart" : "Add to Cart"}
                </Button>
            </div>
        </ImageAndInfoStyle>
        <Title size="medium">
            Description
        </Title>
        <p id="description">
            {book.description}
        </p>
        <div id="review-form">
          <Title size="medium">
              Add Review
          </Title>
          <BookReviewForm submitReview={submitReview} />
        </div>
        <div id="reviews">
            <Title size="medium">
                Reviews
            </Title>
            {reviewsLoading && <p>Loading...</p>}
            {reviewsError && <p>{reviewsError}</p>}
            {reviews && reviews.map((review) => {
                return (
                  <BookReview 
                    key={review.id} 
                    title={review.title} 
                    rating={review.rating}
                    description={review.description} 
                  />
                )
            })}
        </div>
    </BooksItemStyle>
  )
}

const BooksItemStyle = styled.div`
  display: flex;
  width: 80%;
    margin: 0 auto;
  flex-direction: column;
  align-items: start;
  padding: 1.5rem;
  border-radius: 0.5rem;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  #description {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.color.primary};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
  }
  #reviews {
    margin-top: 2rem;
    .review {
        .rating {
          display: flex;
        }
        margin-top: 1rem;
        color: ${props => props.theme.color.primary};
        h3 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
        }
    }
  }
`; 

const ImageAndInfoStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  gap: 2rem;
  color: ${props => props.theme.color.primary};
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.background};
  }

  .book-info-box {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;

    .top-book-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        label {
            color: ${props => props.theme.color.secondary};
            opacity: 0.7;
        }
    }
    .price-likes {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: end;
      margin-top: 1rem;
      p {
        margin: 0;
        font-size: 1.5rem;
        color: ${props => props.theme.color.primary};
      }
    }
  }
`;

export default BookDetail;