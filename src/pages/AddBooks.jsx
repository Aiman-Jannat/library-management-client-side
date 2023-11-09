import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const AddBooks = () => {
  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const image = form.url.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addedData = { name, author, category, rating, image, description,quantity}
    console.log(addedData)
    axios.post(`https://assignment-eleven-library-server-dlu1h69dx-aimans-projects.vercel.app/books`,addedData)
    .then(res =>{
      res.header("Access-Control-Allow-Origin","https://assignment-eleven-client-ed14d.web.app")
      console.log(res)
      if(res.data.acknowledged)
    {
      toast("Data added successfully!");
    }
  });
  
}
    return (
        <div className="" style={{backgroundImage:'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWV3LTAxM18xXzEuanBn.jpg")'}}>
           

           <div className="w-9/11   p-10 lg:px-48">
           
            <form onSubmit={handleSubmit} className="bg-gradient-to-r from-purple-700 to-pink-800 px-14 pb-14 pt-5 text-black  ">
            <p className="text-4xl text-white text-center font-extrabold mt-3">Add Book</p>
            <div className="grid w-full  text-black grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Book Name</span>
  </label>
  <label className=" rounded-none">
    
    <input type="text" name="name" placeholder="Book Name" className=" w-full input rounded-none" />
  </label>
</div>
 
<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Author's Name</span>
  </label>
  <label className="rounded-none">
    
    <input type="text" name="author" placeholder="Author's Name" className="w-full input rounded-none" />
  </label>
</div>
<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Category</span>
  </label>
  <label className="rounded-none">
  <select name="category" className="select rounded-none w-full ">
  <option disabled selected>History</option>
  <option>Fiction</option>
  <option>Islamic</option>
  <option>Science</option>
</select>
    </label>
</div>

<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Rating</span>
  </label>
  <label className="rounded-none">
    
    <input type="text" name="rating" placeholder="rating" className=" w-full input rounded-none" />
  </label>
  {/* <Product></Product> */}
</div>


            

            
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Quantity of Book</span>
  </label>
  <label className="rounded-none">
    
    <input type="text" name="quantity" placeholder="Quantity" className="w-full input rounded-none" />
  </label>
</div>



<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Books's image URL</span>
  </label>
  <label className="rounded-none">
    
    <input type="text" placeholder="image url" name="url" className="w-full input rounded-none" />
  </label>
</div>

            
            <div className="form-control lg:col-span-2 w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Short Description</span>
  </label>
  <label className="rounded-none">
    
    <textarea  name="description" placeholder="short description" className="w-full input rounded-none" />
  </label>
</div>
<div className="form-control lg:col-span-2  w-full ">
 
  <label className="rounded none ">
    
    <input type="submit" placeholder="submit" value="Add Product" className="bg-pink-900 text-white font-bold w-full input input-bordered" />
  </label>
</div>
</div>
            </form>





            </div> <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default AddBooks;