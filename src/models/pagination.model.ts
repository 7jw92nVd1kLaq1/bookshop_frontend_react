import { Book } from "./book.model";

export interface Pagination {
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  },
  books: Book[];
}