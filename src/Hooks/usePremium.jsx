import React, { useContext } from 'react';
import { ContextApi } from '../AuthProvider/AuthContext';
import useSecure from './useSecure';
import { useQuery } from '@tanstack/react-query';

const usePremium = () => {
    const { user } = useContext(ContextApi);
    const axiosSecure = useSecure();

    const { data: isPremium, isLoading: isAdminPending } = useQuery({
        queryKey: [user?.email, 'premium'],
        queryFn: async () => {
            if (!user?.email) {
                console.error("User email is undefined.");
                return false; // Default to false if email is not available
            }
            const res = await axiosSecure.get(`/premiumReq/premium/${user.email}`);
            console.log("API Response:", res.data); // Debugging log
            return res.data?.isPremium ?? false; // Default to false if isPremium is missing
        },
    });

    return [isPremium, isAdminPending];
};

export default usePremium;
