import React, { useContext } from 'react';
import { ContextApi } from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(ContextApi);
    const location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoute;