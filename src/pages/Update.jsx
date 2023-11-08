import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Update = () => {
  const {_id,name,author,image,rating,category,quantity} = useLoaderData();
  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const image = form.url.value;
    const quantityy=quantity;
    const updatedData = { name, author, category, rating,quantityy, image}
    console.log(updatedData)
    axios.put(`http://localhost:5000/books/${_id}`,updatedData)
    .then(res =>{if(res.data.acknowledged)
    {
      toast("Data updated successfully!");
    }
  });
  
  
  
  
  }
    
    return (
        <div className="" style={{backgroundImage:'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWV3LTAxM18xXzEuanBn.jpg")'}}>
           

           <div className="pt-10 lg:px-48">
           
            <form onSubmit={handleSubmit} className="bg-gradient-to-r from-purple-700 to-pink-800 px-14 pb-14 pt-2  text-black  ">
            <p className="text-4xl text-white text-center font-extrabold my-3">Update Book</p>
            <div className="grid w-full  text-black grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Book Name</span>
  </label>
  <label className=" rounded-none">
    
    <input type="text" defaultValue={name} name="name" placeholder="Book Name" className=" w-full input rounded-none" />
  </label>
</div>
 
<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Author's Name</span>
  </label>
  <label className="rounded-none">
    
    <input type="text" defaultValue={author} name="author" placeholder="Author's Name" className="w-full input rounded-none" />
  </label>
</div>
<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Category</span>
  </label>
  <label className="rounded-none">
  <select className="select rounded-none w-full  " defaultValue={category}  name="category">
  <option>History</option>
  <option>Fiction</option>
  <option>Islamic</option>
  <option>Science Fiction</option>
</select>
    </label>
</div>

<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Rating</span>
  </label>
  <label className="rounded-none">
    
    <input type="text" defaultValue={rating} name="rating" placeholder="rating" className=" w-full input rounded-none" />
  </label>
  {/* <Product></Product> */}
</div>


            

            
           


<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Book's image URL</span>
  </label>
  <label className="rounded-none">
    
    <input type="text" defaultValue={image} placeholder="image url" name="url" className="w-full input rounded-none" />
  </label>
</div>

            
          
<div className="form-control lg:col-span-2  w-full ">
 
  <label className="rounded none ">
    
    <input type="submit" placeholder="submit" value="Update" className="bg-pink-900 text-white font-bold w-full input input-bordered" />
  </label>
</div>
</div>
            </form>





            </div> 
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Update;