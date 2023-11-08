import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const [error, setError] = useState('');
  const[success, setSuccess] = useState(false);
  const {userr, signIn, logout, signInG} = useContext(AuthContext);
  
  
  const navigate = useNavigate();
  const handleSubmit = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      setError('');
      setSuccess(false);
      // console.log(email, password);
      signIn(email, password)
    .then(res => {setSuccess(true);
    form.reset();
    <><navigate to='/'></navigate></>
    toast('User logged in Successfully');
   
  })
    .catch(error=>setError(error.message));

   
   
   
    }

    const handleGoogle = () =>{
      signInG()
      .then(res=>{
        console.log(res.user);
     })
     .catch(error=>console.log(error))
    }
    return (
        <div >
           
        <div className="relative py-10" style={{backgroundImage:'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWV3LTAxM18xXzEuanBn.jpg")'}}>
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-50" /> 
<div className=" relative lg:px-72 rounded-lg  flex-col ">

<div  className="rounded-lg bg-gradient-to-r from-purple-700 to-pink-800  flex-shrink-0 w-full shadow-2xl ">
<div className="pt-5 text-center mt-5 w-full   lg:text-left">
  <h1 className=" text-center text-4xl font-bold   text-white ">Login now!</h1>
 
</div>
  <form className="card-body " onSubmit={handleSubmit}>
    
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" className="input rounded-none" name="email" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" className="input rounded-none" name="password" required />
      
    </div>
    {error?<p className="text-red-500">{error}</p>:success?<p className="text-green-900">Successfully logged in!</p>:''}
    <div className="form-control mt-6">
        <input type="submit" className="bg-pink-800 rounded-md py-3 text-white font-bold" value="Login" />
      
  </div>
  <a className="text-blue-300 text-center underline" onClick={handleGoogle}><button type="button" className="text-white bg-[#bc42f4] w-full lg:ps-72   hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px  py-2.5  inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 text-center">
  <svg className="w-4 h-4 mr-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
  </svg>
  Sign in with Google
</button></a>
      <p>Don not have an Account? Please <Link to='/register'><span className="text-yellow-900 underline">register</span></Link></p>
      
  </form>
  
</div>

</div>
</div><ToastContainer></ToastContainer>
    </div>
    );
};

export default Login;