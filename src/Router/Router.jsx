import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Home from '../Components/Home';



	const router = createBrowserRouter([
		{
		  path: "/",
		  element: <MainLayout></MainLayout>,
		  children: [
			{
				path:'/',
				element: <Home></Home>
			},
			{
				path: 'login',
				element: <Login></Login>
			},
			{
				path: 'signup',
				element: <Signup></Signup>
			},
			
		  ]
		},
		{
			path:'dashboard',
			element: <Dashboard></Dashboard>,
			children: [

			]
		}
	  ]);

	

export default router;