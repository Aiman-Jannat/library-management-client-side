import { Link } from "react-router-dom";
import Star from "../Star";


const ShowAllBooks = ({book}) => {
    const {_id,image,name,author,category,rating,quantity} = book;
    console.log(book);
    return (
        <div className="flex ">
          <div className="card card-side w-full bg-base-100 shadow-xl">
          <figure className="h-80 w-96 p-5"><img className="h-full " src={image} alt="Book" /></figure>
  <div className="p-7 ps-4 flex flex-col justify-start items-center">
    <div className="flex-grow">
  <h2 className="text-3xl mt-2 font-bold ">
      {name}
      
    </h2>
    <div className="badge badge-secondary text-md p-3 mt-2 font-bold px-5">{category}</div>
    <p className="text-md font-bold mt-2">{author}</p>
    <Star stars={rating}
    ></Star>
    {/* <div className="rating flex justify-start mt-2 flex-grow  w-full">
  <input type="radio" name={`rating-${rating}`} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={`rating-${rating}`}  className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name={`rating-${rating}`}  className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={`rating-${rating}`}  className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={`rating-${rating}`}  className="mask mask-star-2 bg-orange-400" />
</div> */}
    </div>
    <div className="mt-0 w-full ">
    
    <div className="flex-grow ">
    <Link to={`/update/${_id}`}><button className="text-white bg-gradient-to-r from-purple-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">Update</button></Link>
    </div>
  </div>
</div>
         
   


    
</div>


    </div>
 
       
    );
};

export default ShowAllBooks;