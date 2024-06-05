import { httpClient } from "./http";
import { Pagination } from "../models/pagination.model";
import { Book } from "../models/book.model";

type LoadBooksParams = {
    page?: number;
    amount?: number;
}

export const loadBooks = async ({page, amount} : LoadBooksParams) => {
    let url : string = "/books";
    if (page) {
        url += `?page=${page}`;
        if (amount) {
            url += `&amount=${amount}`;
        }
    } else if (amount) {
        url += `?amount=${amount}`;
    }
        
    const response = await httpClient.get<Pagination>(url);
    return response.data as Pagination;
}

export const loadSingleBook = async (id: string) => {
    const response = await httpClient.get<Book>(`/books/${id}`);
    if (response.status === 404) {
        return null;
    }
    return response.data as Book;
}

export const likeBook = async (id: string) => {
    const response = await httpClient.post(`/books/${id}/likes`);
    if (response.status === 401) {
        return null;
    }
    return response.status === 200;
}

export const unlikeBook = async (id: string) => {
    const response = await httpClient.delete(`/books/${id}/likes`);
    if (response.status === 401) {
        return null;
    }
    return response.status === 200;
}