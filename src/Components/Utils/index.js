import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};
export const getWishlistBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("wishlist");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};
export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return toast.error("Already Added To Read List!");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Book Added To Read List!");
};
export const saveWishlistBook = (book) => {
  let alreadyRead = getBooks();
  const isRead = alreadyRead.find((b) => b.bookId === book.bookId);
  if (isRead) {
    return toast.error("Already Added To ReadList!");
  } else {
    let books = getWishlistBooks();
    const isExist = books.find((b) => b.bookId === book.bookId);
    if (isExist) {
      return toast.error("Already Added To Wishlist!");
    }else{
    books.push(book);
    localStorage.setItem("wishlist", JSON.stringify(books));
    toast.success("Book Added To Wishlist!");}
  }
};

  

// export const deleteBook = (id) => {
//   let books = getBooks();
//   const remaining = books.filter((b) => b.bookId !== id);
//   localStorage.setItem("books", JSON.stringify(remaining));
//   toast.success("Blog Removed from Bookmark!");
// };
// export const deleteWishListBook = (id) => {
//   let books = getBooks();
//   const remaining = books.filter((b) => b.id !== id);
//   localStorage.setItem("wishlist", JSON.stringify(remaining));
//   toast.success("Blog Removed from Bookmark!");
// };
