import React, { useContext } from 'react';
import { ContextApi } from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(ContextApi);
    const location = useLocation();

    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoute;