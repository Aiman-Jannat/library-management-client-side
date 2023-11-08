import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ShowBorrowed from "../components/ShowBorrowed";


const BorrowedBooks = () => {

    const [similar,setSimilar]  = useState([]);
  const {userr} = useContext(AuthContext);
  
  
    // console.log(email)
  
    useEffect(()=>{
        fetch(`http://localhost:5000/borrowed?email=${userr.email}`)
        .then(res=>res.json())
        .then(data=>setSimilar(data))
    },[])
    console.log(similar)
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                similar.map(show=><ShowBorrowed key={show._id} show={show}></ShowBorrowed>)
            }
        </div>
    );
};

export default BorrowedBooks;