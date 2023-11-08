
import { Link, Navigate } from 'react-router-dom';

const Error = () => {
    const handle = () =>{
        <>
        <Navigate to='/'> </Navigate>
        </>
       }
    return (
        <div>
             <>
        <div className='flex justify-center items-center mt-28'>
            <img src="https://png.pngtree.com/png-vector/20220121/ourmid/pngtree-oops-404-error-with-a-broken-electric-line-concept-png-image-png-image_4341582.png" alt="" />
        </div>
        <Link to='/'><button onClick={handle} className='border text-red-700 text-center flex justify-center mt-10 w-28 mx-auto'>Back Home</button></Link>
        </>
        </div>
    );
};

export default Error;