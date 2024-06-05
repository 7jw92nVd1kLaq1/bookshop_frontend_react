import { useEffect, useState } from "react";
import { Book } from "../models/book.model";
import { loadSingleBook, likeBook, unlikeBook } from "../api/book.api";


const useSingleBook = (id: string | undefined) => {
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleLikeBook = async () => {
        if (!id) {
            return;
        }

        try {
            const liked = await likeBook(id);
            if (!liked) {
                alert("You need to be logged in to like a book");
                return;
            }
            console.log("liked");
            setBook((prevBook) => {
                if (!prevBook) {
                    return prevBook;
                }
                return {
                    ...prevBook,
                    likes: prevBook.likes + 1,
                    liked: true,
                };
            });
        } catch (error) {
            return;
        }
    }

    const handleUnlikeBook = async () => {
        if (!id) {
            return;
        }

        try {
            await unlikeBook(id);
            setBook((prevBook) => {
                if (!prevBook) {
                    return prevBook;
                }
                return {
                    ...prevBook,
                    likes: prevBook.likes - 1,
                    liked: false,
                };
            });
        } catch (error) {
            return;
        }
    }

    useEffect(() => {
        setLoading(true);
        if (!id) {
            setError("No book id provided");
            setLoading(false);
            return;
        }
        loadSingleBook(id).then((data) => {
            setBook(data);
            setLoading(false);
        }).catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, [id]);

    return {
        book, 
        loading, 
        error,
        handleLikeBook,
        handleUnlikeBook,
    };
};

export default useSingleBook;