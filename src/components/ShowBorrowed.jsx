import { Link } from "react-router-dom";
import Star from "../Star";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const ShowBorrowed = ({show}) => {
    const {_id,dummy,image,name,author,category,rating,quantity,selectedDate} = show;
    const handleReturn = ()=>{
        axios.delete(`https://assignment-eleven-library-server-dlu1h69dx-aimans-projects.vercel.app/borrowed/${_id}`)
        .then(res=>{
            if(res.data.acknowledged)
            {
                toast("Good Job!!you have successfully returned the book On time.")
                
                const quantityy=quantity;
                const updatedCount = {name,author,category,image,rating,quantityy};
                axios.put(`https://assignment-eleven-library-server-dlu1h69dx-aimans-projects.vercel.app/books/${dummy}`,updatedCount)
                .then(res=>console.log(res.data))
            }
        })
    }
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
    
     <div className="badge badge-secondary bg-slate-300 rounded-none text-red-500 text-md p-3 mt-2 font-bold py-7 px-5">Borrowing Date:{Date()}</div>
     <div className="badge badge-secondary bg-slate-300 rounded-none text-red-500 text-md p-3 mt-2 font-bold px-5 py-7">Returning Date: {selectedDate}</div>
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
    
    <div className="flex-grow mt-7">
    <button className="text-white bg-gradient-to-r from-purple-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2" onClick={handleReturn}
    >Return Book</button>
    </div>
  </div>
</div>
         
   


    
</div>
<ToastContainer></ToastContainer>

    </div>
    );
};

export default ShowBorrowed;