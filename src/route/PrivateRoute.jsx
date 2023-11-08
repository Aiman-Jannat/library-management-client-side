import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import PropTypes from 'prop-types';
const PrivateRoute = ({children}) => {
    const {userr, loading} = useContext(AuthContext);
    if(loading)
    return  <div className='flex mt-56 justify-center items-center max-h-screen'><span className="loading text-center loading-bars loading-lg"></span></div>;

    if(userr)
    return children;
    else
    return <Navigate to='/login'></Navigate>
};
    

export default PrivateRoute;
PrivateRoute.propTypes = {
    children:PropTypes.node
}