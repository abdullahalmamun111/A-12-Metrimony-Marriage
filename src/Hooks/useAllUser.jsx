import React, { useEffect, useState } from 'react';

const useAllUser = () => {
	const [allUser, setAllUser] = useState([]);

		useEffect(()=> {
			fetch('http://localhost:5000/allbiodata')
			.then(res => res.json())
			.then(data => {
				setAllUser(data)
			})
		} ,[])

	return {allUser}
};

export default useAllUser;