/*
{
    "id": 1,
    "cartsItems": [
        {
            "books_id": 22,
            "amount": 1,
            "books": {
                "title": "Understanding Microeconomics",
                "author": {
                    "name": "James Lee2",
                    "id": 4
                },
                "category": {
                    "name": "fiction",
                    "id": 3
                }
            }
        },
        {
            "books_id": 24,
            "amount": 1,
            "books": {
                "title": "Modern Web Development",
                "author": {
                    "name": "James Lee3",
                    "id": 3
                },
                "category": {
                    "name": "fiction",
                    "id": 3
                }
            }
        }
    ]
}
*/

export interface Cart {
    id: number;
    cartsItems: CartItem[];
}

export interface CartItem {
    booksId: number;
    amount: number;
    books: {
        title: string;
        author: {
            name: string;
            id: number;
        };
        category: {
            name: string;
            id: number;
        };
    };
}