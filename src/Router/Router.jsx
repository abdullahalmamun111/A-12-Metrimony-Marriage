import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Home from '../Components/Home';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Biodata from '../Pages/Biodata';
import EditBiodata from '../Dashboard-Pages/EditBiodata';



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
			{
				path: 'biodatas',
				element:<PrivateRoute><Biodata></Biodata></PrivateRoute>
			}
			
		  ]
		},
		{
			path:'dashboard',
			element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
			children: [
				{
					path:'/dashboard/biodata',
					element: <EditBiodata></EditBiodata>
				}
			]
		}
	  ]);

	

export default router;