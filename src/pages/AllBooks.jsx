import { useLoaderData } from "react-router-dom";
import ShowAllBooks from "../components/ShowAllBooks";


const AllBooks = () => {
    const books = useLoaderData();
    return (
        <div className="lg:px-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                books.map(book=><ShowAllBooks key={book._id} book={book}></ShowAllBooks>)
            }
        </div>
        </div>
    );
};

export default AllBooks;