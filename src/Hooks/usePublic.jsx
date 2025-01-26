import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
	baseURL:'https://partner-path-metrimony-server.vercel.app/'
})

const usePublic = () => {
	return axiosPublic
};

export default usePublic;