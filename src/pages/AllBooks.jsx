import { useLoaderData } from "react-router-dom";
import ShowAllBooks from "../components/ShowAllBooks";
import { useState } from "react";
import { useEffect } from "react";

let p=true;
const AllBooks = () => {
   const [books, setBooks] = useState([]);
   useEffect(()=>{
    fetch('https://assignment-eleven-library-server-dlu1h69dx-aimans-projects.vercel.app/books')
    .then(res=>res.json())
    .then(data=>setBooks(data))
   },[]);
//    let bookss = Object.entries(books).map(([key, value]) => ({ key, value }));
    // console.log(books,bookss)
    
    
    const handleSubmit = () =>{
        const filtering = books.filter(data =>data.quantity>0);
        setBooks(filtering);
    }
     
    
    return (
        <div className="lg:px-24">

<button onClick={handleSubmit} className="w-full mt-14 btn bg-gradient-to-r from-purple-500 to-black text-white font-bold">Filter Available Books</button>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {
            books.map(book=><ShowAllBooks key={book._id} book={book}></ShowAllBooks>)
            }
        </div>
        </div>
    );
};

export default AllBooks;