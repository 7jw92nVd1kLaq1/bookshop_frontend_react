import { httpClient } from "./http";


export interface ReviewForm {
    title: string;
    description: string;
    rating: number;
}

export const fetchBookReviews = async (bookId : number) => {
  try {
    const response = await httpClient.get(`books/${bookId}/reviews`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const createBookReview = async (bookId : number, reviewForm : ReviewForm) => {
  try {
    const response = await httpClient.post(`books/${bookId}/reviews`, reviewForm);
    if (response.status != 201) {
        return null
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
}