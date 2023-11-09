import { Link, NavLink, useNavigate } from "react-router-dom";
import SimilarCategory from "../pages/SimilarCategory";
import { useEffect, useState } from "react";
import axios from "axios";

export let desired_category=null;
const ShowCategories = ({category}) => {
    const {_id, category_name, image} = category;
   
    const handle = () =>{
    //   axios.post(`https://assignment-eleven-library-server-dlu1h69dx-aimans-projects.vercel.app/books/${category_name}`,categoryName)
    //  .then(res=>console.log(res))
    }
    return (
        
            <div className="card card-compact my-10 bg-slate-200   shadow-xl">
  <figure><img src={image} alt="Shoes" className="w-full h-56"/></figure>
  <div className="card-body">
    <h2 className="card-title bg-yellow-200 px-8 font-bold py-1 w-fit rounded-md text-red-800">{category_name}</h2>
    
    
     <Link to={`/similar/${_id}`} ><button className="text-white bg-gradient-to-r from-purple-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 w-full" onClick={handle}  >See Books</button></Link> 
    
  </div>
  </div>

        
    );
};

export default ShowCategories;