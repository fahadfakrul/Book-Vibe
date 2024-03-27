import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWishlistBook } from "../Utils";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);
  console.log(book);

  const handleReadClick = book =>{console.log(book);
    saveBook(book);}
  const handleWishlistClick = book => {console.log(book);
  saveWishlistBook(book);}
  return (
    <div className="container mx-auto">
      <section className="">
        <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between ">
          <div className="flex items-center justify-center lg:w-1/2 p-6 mt-8 lg:mt-0  ">
            <img
              src={book.image}
              alt=""
              className="  rounded-2xl "
            />
          </div>
          <div className="flex flex-col  text-center rounded-sm lg:w-1/2 lg:text-left ">
            <h1 className="text-4xl font-bold leading-none sm:text-3xl font-playfair-display text-black">
              {book.bookName}
            </h1>
            <p className="mt-6 mb-8 text-lg font-medium sm:mb-12">
              <p
                className="text-[#131313CC
                ] mb-4 lg:mb-6"
              >
                By : {book.author}
              </p>
              <hr className="mb-4" />
              <p
                className="text-[#131313CC
                ] my-6"
              >
                {book.category}
              </p>
              <hr className="mb-4" />
              <p
                className="text-[#0D0D0DB3] text-base font-normal"
              >
              <span className="text-black font-bold text-base"> Review: </span>{book.review}
              </p>
              <p
                className="text-[#0D0D0DB3] text-base font-normal my-6"
              >
              <span className="text-black font-bold text-base  mr-4"> Tag:{book.tags.map(tag=><a key={book.bookId} rel="noopener noreferrer" href="#" className="text-base font-medium tracking-wider uppercase hover:underline dark:text-[#23BE0A] mr-4"> #{tag}</a>)} </span>
              </p>
              <hr className="mb-4" />
              <p
                className="text-black  font-bold text-base mb-3"
              >
              <span className=" text-[#0D0D0DB3] text-base font-normal inline-block w-40">Number of Pages: </span>{book.totalPages}
              </p>
              <p
                className="text-black  font-bold text-base mb-3"
              >
              <span className=" text-[#0D0D0DB3] text-base font-normal inline-block  w-40">Publisher: </span>{book.publisher}
              </p>
              <p
                className="text-black  font-bold text-base mb-3"
              >
              <span className=" text-[#0D0D0DB3] text-base font-normal inline-block w-40">Year of Publishing: </span>{book.yearOfPublishing}
              </p>
              <p
                className="text-black  font-bold text-base mb-3"
              >
              <span className=" text-[#0D0D0DB3] text-base font-normal inline-block w-40">Rating: </span>{book.rating}
              </p>
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              
              <div
                onClick={()=> handleReadClick(book)}
                className=" btn px-8 py-3 text-lg text-[#131313] font-semibold border rounded-lg dark:border-[#0D0D0D4D]"
              >
                Read
              </div>
              <div
               onClick={() => handleWishlistClick(book)}
                className="btn px-8 py-3 text-lg font-semibold rounded-lg dark:bg-[#50B1C9] dark:text-gray-50"
              >
                Wishlist
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
