/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineStarBorder } from "react-icons/md";
const Book = ({book}) => {
    const {tags,bookName,author,image,category,rating} = book;
    return (
        <Link to={`/book/${book.bookId}`}>
             <div className="card lg:w-96 bg-base-100 shadow-xl border border-[#13131326] transition  hover:scale-105 border-opacity-30">
            <figure className="px-10 pt-10">
              <img
                src={image}
                alt="Book"
                className="rounded-xl h-56"
              />
            </figure>
            
            <div className="card-body  ">
           <div className="lg:flex gap-11 px-4"> {tags.map(tag=><a key={book.bookId} rel="noopener noreferrer" href="#" className="text-base font-medium tracking-wider uppercase hover:underline dark:text-[#23BE0A] mr-4"> #{tag}</a>)}</div>
              <div className=" mt-6" ><div className="h-24">
              <h2 className="card-title text-2xl font-bold font-playfair-display text-black mb-4">{bookName}</h2>
              </div>
              <p className="mb-5 font-medium">By : {author}</p>
              <hr />
              <div className="flex flex-wrap justify-between pt-3 space-x-2  font-medium dark:text-gray-600">
						<span>{category}</span>
						<div className="flex items-center gap-2"><span>{rating}  </span><MdOutlineStarBorder /></div>
					</div></div>
            </div>
         
        
         </div>
        </Link>
    );
};

export default Book;