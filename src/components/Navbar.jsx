import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
   const {userr,logout} = useContext(AuthContext);
   const [theme, setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
console.log(userr?.photoURL)
   useEffect(()=>{
  localStorage.setItem("theme",theme);
  const localTheme = localStorage.getItem('theme');
  document.querySelector("html").setAttribute('data-theme',localTheme);
},[theme])
    
    const handleToggle = e =>{
      if(!e.target.checked){
        setTheme("dark");
      }
      else{
        setTheme("light");
      }
    }
    return (
        <div className=" pb-2 px-10 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500 ...">
        <div className="text-white text-base">
<div className="  flex px-5 justify-between w-full py-2 ">
 <div className="dropdown">
   <label tabIndex={0} className="btn btn-ghost flex-col-reverse lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 mr-5 z-[1] p-2   ">
     <NavLink to = "/" className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-black"  : ""
} >Home</NavLink>
     <NavLink to = '/addBooks' className={({ isActive}) =>   
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-black"  : ""
} >Add Books</NavLink>
     <NavLink to = '/allBooks' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-black"  : ""
}>All Books</NavLink>
     <NavLink to = '/borrowedBooks' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-black"  : ""
}>borrowedBooks Books</NavLink>
     {/* {userr&&<>
       <NavLink to = '/dashboard' className={({ isActive}) =>
       isActive ? "text-[#FF444A] underline" : ""
     }>Dashboard</NavLink>
           <NavLink to = '/profile' className={({ isActive}) =>
       isActive ? "text-[#FF444A] underline" : ""
     }>Profile</NavLink>
     </>
     } */}
     
   </ul>
 </div>
 <img className="hidden h-10  " src='https://i.ibb.co/ng91SPs/logo.png' alt="" />
</div>
<div className="flex justify-between">
 <div>
 <img className="h-10" src='https://i.ibb.co/ng91SPs/logo.png' alt="" />
 </div>
<div className=" hidden lg:flex h-10 font-bold  py-2 items-center ">
 <ul className="flex gap-5 text-sm  ">
 <NavLink to='/' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-black" : ""
} >Home</NavLink>
     <NavLink to = '/addBooks' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-black" : ""
} >Add Books</NavLink>
     <NavLink to = '/allBooks' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-black" : ""
}>All Books</NavLink>
<NavLink to = '/borrowedBooks' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-black" : ""
}>Borrowed Books</NavLink>
     {/* {userr&&<>
       <NavLink to = '/myCart' className={({ isActive}) =>
       isActive ? "text-[#FF444A] underline" : ""
     }>My Carts</NavLink>
           
     </>
     } */}
 </ul>
 
</div>
<div className="flex justify-center gap-3 items-center">
{
         userr?<p className="text-white font-bold">{userr.displayName}</p>:''
       } 
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
     <div className="w-10 rounded-full">
    
       {
         userr?<><img src={userr.photoURL} /></>:<><img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" /></>
       }
       
       
     </div>
   </label>
   <label className="swap swap-rotate ">
  
 
  <input type="checkbox" onChange={handleToggle}/>
  
  
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
 
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
   
   {
     userr? <Link to="/"> <button onClick={logout}  className="text-white bg-gradient-to-r from-purple-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">Logout</button></Link>: <Link to="/login"> <button className="text-white bg-gradient-to-r from-purple-500 to-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">Login</button></Link>
   }
 
</div>
</div>

</div> 
     </div>
    );
};

export default Navbar;