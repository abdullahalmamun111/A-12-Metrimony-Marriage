import React, { useContext } from 'react';
import { ContextApi } from '../AuthProvider/AuthContext';
import useSecure from './useSecure';
import { useQuery } from '@tanstack/react-query';

const usePremium = () => {
	const {user} = useContext(ContextApi)
	const axiosSecure = useSecure();
	const {data: isPremium,isPending:isAdminPending} = useQuery({
		queryKey: [user?.email, 'premium'],
		queryFn: async() => {
			const res = await axiosSecure.get(`/premiumReq/premium/${user.email}`)
			return res.data?.isPremium;
		}
	})
	return [isPremium,isAdminPending]
};

export default usePremium;