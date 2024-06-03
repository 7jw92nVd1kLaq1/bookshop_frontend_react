/*
 {
            "id": 23,
            "title": "The Art of Pottery",
            "description": "A detailed look at the craft and techniques behind beautiful pottery.",
            "pageNumber": 180,
            "ISBN": "978-1-23-456789-0",
            "pubDate": "2020-03-22T00:00:00.000Z",
            "publishers": "Artistic Creations",
            "form": "eBook",
            "createdAt": null,
            "updatedAt": null,
            "category": {
                "id": 2,
                "name": "non-fiction"
            },
            "author": {
                "id": 1,
                "name": "James Lee"
            },
            "likes": 0,
            "liked": false
        },
*/

export interface Book {
  id: number;
  title: string;
  description: string;
  pageNumber: number;
  ISBN: string;
  pubDate: Date;
  publishers: string;
  form: string;
  createdAt: Date;
  updatedAt: Date;
  category: {
    id: number;
    name: string;
  };
  author: {
    id: number;
    name: string;
  };
  likes?: number;
  liked?: boolean;
}