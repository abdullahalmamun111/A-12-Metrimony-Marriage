import React, { useContext } from 'react';
import { ContextApi } from '../AuthProvider/AuthContext';
import useSecure from './useSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
	const {user} = useContext(ContextApi)
	const axiosSecure = useSecure();

	
	const {data: isAdmin,isPending:isAdminPending} = useQuery({
		queryKey: [user?.email, 'Admin'],
		queryFn: async() => {
			const res = await axiosSecure.get(`/premiumReq/admin/${user.email}`)
			return res.data?.admin;
		}
	})
	return [isAdmin,isAdminPending]
};

export default useAdmin;