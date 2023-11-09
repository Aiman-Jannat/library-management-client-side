import { Link, useLoaderData } from "react-router-dom";
import Star from "../Star";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import DatePicker from 'react-datepicker';

const Details = () => {
    const {_id,name,author,category,image,description,rating,quantity} = useLoaderData()
    const print = useLoaderData()
    const {userr} = useContext(AuthContext);
    const  [selectedDate,setSelectedDate] = useState();
  
    const [insert, setInsert] = useState([])
    console.log(print);
    const handleInformation=(e)=>{
        e.preventDefault();
        const email = userr?.email;
        const dummy = _id;
        const borrowquanta = quantity;
        const info = {dummy,name,author,borrowquanta, email,category,image,description,rating,quantity,selectedDate};
        console.log(info)
        axios.post('https://assignment-eleven-library-server-dlu1h69dx-aimans-projects.vercel.app/borrowed',info)
        .then(res=>{
            // console.log(res);
            if(insert.includes(res.insertedId))
            {
                toast("You have already added this book!!");

            }
            else{
            setInsert([...insert, res.insertedId]);

            if(res.data.acknowledged)
            {
                toast("Congratulation!! you borrowed the famous book. Please return it on time.")
           const quantityy=quantity-1;
           
           const updatedCount = {name,author,category,image,rating,quantityy};
                axios.put(`https://assignment-eleven-library-server-dlu1h69dx-aimans-projects.vercel.app/books/${_id}`,updatedCount)
                .then(res=>console.log(res.data))
            
            }
        }
        })
    }
    useEffect(() => {
        const today = new Date();
        
        const returnDate = new Date(today);
        returnDate.setDate(today.getDate() + 15); // Add 15 days
    
        setSelectedDate(returnDate);
      }, []);
    return (
        <div>
        <div className="flex px-2 lg:px-32 py-5 lg:py-14  ">
     <div className="card card-side w-full bg-base-100 shadow-xl">
     <figure className="h-80 w-fit p-5"><img className="h-full w-96" src={image} alt="Book" /></figure>
<div className="p-7 ps-4 flex flex-col justify-start items-center">
<div className="flex-grow">
<h2 className="text-3xl mt-2 font-bold ">
 {name}
 
</h2>
<div className="badge badge-secondary text-md p-3 mt-2 font-bold px-5">{category}</div>
<p className="text-md font-bold mt-2">{author}</p>
<p className="text-red-500 font-bold bg">
   Quantity: {quantity}
</p>
<p>{description}</p>

<Star  stars={rating}></Star>
</div>
<div className="mt-0 w-full ">

<div className="flex-grow mt-5 ">
<Link><button onClick={()=>document.getElementById('my_modal_2').showModal()} className="mt-3 text-white bg-gradient-to-r from-purple-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2" >Borrow</button></Link>
{/* //modal */}
<dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle ">
  <div className="modal-box bg-gradient-to-r from-purple-700 to-pink-800  flex-shrink-0 shadow-2xl">
   <p className="text-center text-white">Press ESC key to close the modal</p>
    <div className="mt-2 h-full w-full modal-action ">
    <form className="card-body " onSubmit={handleInformation}>
    
    <div className="form-control text-black">
      <label className="label">
        <span className="label-text text-orange-400 text-md">Name</span>
      </label>
      <input type="text" defaultValue={userr?.displayName} placeholder="email" className="input rounded-none" name="email" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-orange-400 text-md">Email</span>
      </label>
      <input type="text" defaultValue={userr?.email} placeholder="password" className="input rounded-none" name="password" required />
      
    </div>
    <div className="flex justify-center w-full items-center gap-10 mt-5">
    <div className="bg-slate-50 p-3">
      <h2 className="text-xl  text-red-500 font-bold ">Book's Return Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      <input
        type="text"
        value={selectedDate ? selectedDate.toDateString() : ''}
        readOnly
      />
    </div>
        {/* <input className=" bg-gradient-to-r from-blue-700 to-black  flex-shrink-0 shadow-2xl">Date Picker</input> */}
        <button  className={quantity>0?'btn btn-secondary px-8 bg-gradient-to-r from-blue-700 to-black  flex-shrink-0 shadow-2xl':'btn btn-secondary px-8 bg-gradient-to-r from-blue-700 to-black  flex-shrink-0 shadow-2xl pointer-events-none opacity-50'}>Submit</button>
        
    </div><ToastContainer></ToastContainer>
    </form>
    </div>
  </div>
</dialog>
<Link><button onClick={()=>document.getElementById('my_modal_1').showModal()} className="mt-3 text-white bg-gradient-to-r from-purple-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">Read</button></Link>
{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Dear {userr?.displayName}</h3>
    <p className="py-4">Here is the Books short description. That's why you can know about this book and it will
    help you to choose books easily</p>
    <p>Description of <span className=" font-bold">{name}</span>: {description}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
</div>
</div>
    




</div>


</div>

  
   </div>
    );
};

export default Details;