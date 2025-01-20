import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
	baseURL: 'http://localhost:5000/'
})

const useSecure = () => {
	return axiosSecure;
};

export default useSecure;