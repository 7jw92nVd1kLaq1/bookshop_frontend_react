import { httpClient } from "./http";
import { Pagination } from "../models/pagination.model";

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