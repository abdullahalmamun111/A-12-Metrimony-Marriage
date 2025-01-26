import React, { useEffect, useState } from 'react';

const useAllUser = () => {
	const [allUser, setAllUser] = useState([]);

		useEffect(()=> {
			fetch('https://partner-path-metrimony-server.vercel.app/allbiodata')
			.then(res => res.json())
			.then(data => {
				setAllUser(data)
			})
		} ,[])

	return {allUser}
};

export default useAllUser;