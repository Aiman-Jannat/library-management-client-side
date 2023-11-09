import { useLoaderData } from "react-router-dom";
import ShowAllBooks from "../components/ShowAllBooks";
import { useState } from "react";

let p=true;
const AllBooks = () => {
    let books = useLoaderData();
//    let bookss = Object.entries(books).map(([key, value]) => ({ key, value }));
    // console.log(books,bookss)
    let filtering=books;
    
    const handleSubmit = () =>{
        // filtering = books.toArray().filter(data =>data.quantity>0);
        p=false;
     }
     
    
    return (
        <div className="lg:px-24">

<button onClick={handleSubmit} className="w-full mt-14 btn btn-success text-white font-bold">Filter Available Books</button>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {
             books.map(book=><ShowAllBooks key={book._id} book={book}></ShowAllBooks>)
            }
        </div>
        </div>
    );
};

export default AllBooks;