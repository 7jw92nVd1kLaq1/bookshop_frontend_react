import React from "react";


interface BookReviewProps {
    title: string;
    description: string;
    rating: string;
}

const BookReview : React.FC<BookReviewProps> = ({title, description, rating}) => {
  const ratingNumber = parseInt(rating);
  return (
    <div className="review">
        <div className="rating">
            {'⭐'.repeat(ratingNumber)}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div> 
  )
};

export default BookReview;