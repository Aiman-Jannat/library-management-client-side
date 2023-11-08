import { useEffect, useState } from "react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { desired_category } from "../components/ShowCategories";
import SameCategories from "./SameCategories";



const SimilarCategory = () => {

    const {category_name} = useLoaderData();
    const [similar,setSimilar]  = useState([]);
    console.log(category_name);
    
    const url = `http://localhost:5000/books?category=${category_name}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSimilar(data))
    },[])
    // console.log(similar);
    return (
        <div  className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-5 lg:p-14" >
            {similar.map(data=><SameCategories key={data._id} book={data}></SameCategories>)}
        </div>
    );
};

export default SimilarCategory;
