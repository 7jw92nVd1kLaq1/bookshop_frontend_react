export interface Address {
  recipient: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
}


export interface OrderForm {
  books: Array<{
    booksId: number;
    amount: number;
  }>;
  address: Address;
}
/*
{
    "orderId": 4,
    "createdAt": "2024-06-06T14:49:05.000Z",
    "updatedAt": "2024-06-06T14:49:05.000Z",
    "address": {
        "addressId": 4,
        "recipient": "Jame Lee",
        "phoneNumber": "123-123-1233",
        "address1": "James Street 1",
        "address2": "",
        "city": "New York City",
        "state": "New York",
        "country": "US",
        "postalCode": "15284"
    },
    "status": {
        "name": "created",
        "statusId": 200
    },
    "books": [
        {
            "bookId": 22,
            "title": "Understanding Microeconomics",
            "description": "A comprehensive guide to the principles of microeconomics.",
            "authorId": 4,
            "authorName": "James Lee2",
            "categoryId": 3,
            "categoryName": "fiction",
            "price": "20000.00",
            "amount": 10,
            "totalPrice": "200000.00"
        },
        {
            "bookId": 28,
            "title": "The World of Programming",
            "description": "A beginner's guide to coding and the theories behind software development.",
            "authorId": 3,
            "authorName": "James Lee3",
            "categoryId": 3,
            "categoryName": "fiction",
            "price": "10000.00",
            "amount": 10,
            "totalPrice": "100000.00"
        }
    ]
}
*/

export interface Order {
  orderId: number;
  createdAt: string;
  updatedAt: string;
  address: {
    addressId: number;
    recipient: string;
    phoneNumber: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  status: {
    name: string;
    statusId: number;
  };
  books: Array<{
    bookId: number;
    title: string;
    description: string;
    authorId: number;
    authorName: string;
    categoryId: number;
    categoryName: string;
    price: string;
    amount: number;
    totalPrice: string;
  }>;
}

/*
orders": [
        {
            "ordersId": 6,
            "status": "created",
            "books": [
                {
                    "ordersId": 6,
                    "booksId": 30,
                    "booksTitle": "The Science of Nutrition",
                    "authorsId": 4,
                    "author": "James Lee2",
                    "price": "10000.00",
                    "amount": 10,
                    "totalPrice": "100000.00"
                }
            ]
        },
*/

export interface OrderList {
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
  orders: Array<{
    ordersId: number;
    status: string;
    books: Array<{
      ordersId: number;
      booksId: number;
      booksTitle: string;
      authorsId: number;
      author: string;
      price: string;
      amount: number;
      totalPrice: string;
    }>;
  }>;
}