import { useEffect, useState } from 'react';

import { getBooks } from '../Utils';
import CustomChart from '../CustomChart/CustomChart';
const PagesToRead = () => {
    const [books,setBooks]= useState([]);
    useEffect(() => {
        const storedBooks = getBooks()
        setBooks(storedBooks);
    },[]);
    return (
        <div>
            <CustomChart key={books.bookId} books={books}></CustomChart>
        </div>
    );
};

export default PagesToRead;