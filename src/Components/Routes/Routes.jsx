import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import BookDetails from "../BookDetails/BookDetails";
import ListedBooks from "../ListedBooks/ListedBooks";

import ErrorPage from "../../Pages/error-page";
import PagesToRead from "../PagesToRead/PagesToRead";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element:<Home />,
          loader: () => fetch('/books.json')
        },
        {
          path: '/book/:id',
          element:<BookDetails></BookDetails>,
          loader: () => fetch('/books.json')
        },
        {
            path: '/listedBooks',
            element:<ListedBooks></ListedBooks>,
        },
        {
            path: '/pagestoread',
            element: <PagesToRead></PagesToRead>
        }
      ]
    },
    
  ]);