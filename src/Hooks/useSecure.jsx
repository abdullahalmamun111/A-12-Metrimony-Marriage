import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextApi } from '../AuthProvider/AuthContext';

const axiosSecure = axios.create({
	baseURL: 'https://partner-path-metrimony-server.vercel.app/'
})

const useSecure = () => {
	const {logOut} = useContext(ContextApi);
	const navigate = useNavigate();
	axiosSecure.interceptors.request.use(function(config){
		const token = localStorage.getItem('access-token')
		console.log('interceptor ', token)
		config.headers.authorization = `Bearer ${token}`
		return config;
	}, function(error){
		return Promise.reject(error)
	})

	axiosSecure.interceptors.response.use(function(response){
		return response;
	}, async(error) =>{
		const status = error.response.status;
		if(status === 401 || status === 403){
			await logOut();
			navigate('/login')
		}
		return Promise.reject(error)
	})
	return axiosSecure;
};

export default useSecure;