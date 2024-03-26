import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";


const Books = () => {
    const books = useLoaderData();
    console.log(books);
  return (
    <div className="container mx-auto">
      <section className="  ">
        <div className="container  mx-auto space-y-8">
          <div className=" text-center">
            <h2 className="text-3xl font-bold font-playfair-display">Books</h2>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            books.map(book => <Book key={book.bookId} book={book}></Book>)
           }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
