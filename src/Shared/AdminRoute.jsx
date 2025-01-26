import React, { useContext } from 'react';
import { ContextApi } from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(ContextApi);
	const [isAdmin, isAdminPending] = useAdmin();
    const location = useLocation();

    if(loading || isAdminPending){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default AdminRoute;