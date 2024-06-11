export interface Review {
  id : number;
  user: {
    id: number;
    email: string;
  },
  book: {
    id: number;
    title: string;
  }
  title : string;
  description : string;
  rating : string;
  createdAt : string;
  updatedAt : string;
}