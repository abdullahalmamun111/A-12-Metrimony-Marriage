import React, { useEffect, useState } from 'react';

const useUser = () => {

	const [user, setUser] = useState([]);

	useEffect(()=> {
		fetch('https://partner-path-metrimony-server.vercel.app/sixBiodata')
		.then(res => res.json())
		.then(data => {
			setUser(data)
		})
	} ,[])


	return {user} 
};

export default useUser;

