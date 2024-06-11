import { useState, useEffect } from "react";
import { Review } from "../models/review.model";
import { fetchBookReviews } from "../api/review.api";

const useSingleBookReviews = (bookId: number | undefined) => {
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!bookId) {
            setError("No book id provided");
            setLoading(false);
            return;
        }
        setLoading(true);
        fetchBookReviews(bookId).then((data) => {
            if (!data) {
                setError("No reviews found");
                setLoading(false);
                return;
            }
            setReviews(data);
            setLoading(false);
        });
    }, [bookId]);

    const refreshReviews = async () => {
        if (!bookId) {
            setError("No book id provided");
            setLoading(false);
            return;
        }
        setLoading(true);
        fetchBookReviews(bookId).then((data) => {
            if (!data) {
                setError("No reviews found");
                setLoading(false);
                return;
            }
            setReviews(data);
            setLoading(false);
        });
    }

    return { reviews, loading, error, refreshReviews };
};

export default useSingleBookReviews;