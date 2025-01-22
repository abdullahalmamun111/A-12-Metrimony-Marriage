import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecure from '../Hooks/useSecure';

const Myfavourites = () => {
	const axiosSecure = useSecure();
	const {data: favourites = []} = useQuery({
		queryKey: ['favourites'],
		queryFn: async() => {
			const res = await axiosSecure.get('/favourites');
			return res.data;
		}
	})
	
	const singledata = {
		"_id": "679060fb80c56d9d3a7d1ebd",
		"favouriteId": "678f61993305844a89da778d",
		"biodataId": 2,
		"permanentDivision": "Dhaka",
		"occupation": "Doctor",
		"name": "Rahima Khatun"
	}

	return (
		<div>
		{favourites.length}
		</div>
	);
};

export default Myfavourites;