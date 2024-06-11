import { useForm } from "react-hook-form";
import InputText from "../InputText";
import { ReviewForm } from "../../../api/review.api";
import React from "react";


interface BookReviewFormProps {
    submitReview: (data: ReviewForm) => void;
}

const BookReviewForm : React.FC<BookReviewFormProps> = ({
    submitReview
}) => {
    const { register, handleSubmit } = useForm<ReviewForm>();

    return (
        <form onSubmit={handleSubmit(submitReview)}>
            <InputText placeholder="Title" inputType="text" {...register("title")} />
            <InputText placeholder="Description" inputType="text" {...register("description")} />
            <InputText placeholder="Rating" inputType="number" min={0} max={5} {...register("rating")} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BookReviewForm;