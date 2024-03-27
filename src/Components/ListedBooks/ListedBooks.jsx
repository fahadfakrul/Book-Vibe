import { IoChevronDown } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../ReadBooks/ReadBooks";
import Wishlist from "../Wishlist/Wishlist";
import { useEffect, useState } from "react";
import { getBooks, getWishlistBooks } from "../Utils";

const ListedBooks = () => {
    const [books,setBooks]= useState([]);
    const [wishList,setWishlistBooks]= useState([]);
    const [displayBooks,setDisplayBooks]= useState([]);
    const [displayWishlistBooks,setDisplayWishlistBooks]= useState([]);
   
    

    
    const handleBooksFilter = (filter) => {
        let sortedBooks = [...books]; 
        let sortedWishlistBooks = [...wishList];
      
        switch (filter) {
          case "Rating":
            sortedBooks.sort((a, b) => b.rating - a.rating); 
            sortedWishlistBooks.sort((a, b) => b.rating - a.rating);  
            break;
          case "Number of pages":
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);  
            sortedWishlistBooks.sort((a, b) => b.totalPages - a.totalPages); 
            break;
          case "Publishing year":
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); 
            sortedWishlistBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); 
            break;
          default:
            break;
        }
      
        setDisplayBooks(sortedBooks); 
        setDisplayWishlistBooks(sortedWishlistBooks);
      };
      
    
    useEffect(() => {
        const storedBooks = getBooks()
        setBooks(storedBooks);
        setDisplayBooks(storedBooks);
    },[]);
    useEffect(() => {
        const storedWishListBooks = getWishlistBooks()
        setWishlistBooks(storedWishListBooks);
        setDisplayWishlistBooks(storedWishListBooks);
    },[]);

    
  return (
    <div className="container mx-auto">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-black text-3xl font-bold">
        Books
      </div>
      <div className="text-center mt-8">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#23BE0A] text-white px-5 text-lg font-semibold">
            Sort By <IoChevronDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 items-center">
            <li onClick={() => handleBooksFilter("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleBooksFilter("Number of pages")}>
              <a >Number of pages</a>
            </li>
            <li onClick={() => handleBooksFilter("Publishing year") }>
              <a>Publishing year</a> 
            </li>
          </ul>
        </details>
      </div>
      <div className="mt-28">
        <Tabs>
          <div className="mb-8">
            <TabList>
              <Tab>Read Books</Tab>
              <Tab>Wishlist Books</Tab>
            </TabList>
          </div>

          <TabPanel>
               {displayBooks.map(book =>(<ReadBooks key={book.bookId} book={book}></ReadBooks>))}
           
          </TabPanel>
          <TabPanel>
          {displayWishlistBooks.map(wishList =>(<Wishlist key={wishList.bookId} wishList={wishList}></Wishlist>))}
          
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
