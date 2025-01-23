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
import Details from '../Components/Details';
import Myfavourites from '../Components/Myfavourites';
import Payment from '../Components/Payment';
import ApprovedContacts from '../Components/ApprovedContacts';
import ManageUsers from '../Dashboard-Pages/ManageUsers';
import ViewBiodata from '../Dashboard-Pages/ViewBiodata';
import ApprovePremium from '../Dashboard-Pages/ApprovePremium';
import Admindashboard from '../Dashboard-Pages/Admindashboard';



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
			},
			{
				path: 'biodatas/details/:id',
				element: <PrivateRoute><Details></Details></PrivateRoute>,
				loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
			},
			{
				path: '/details/:id',
				element: <PrivateRoute><Details></Details></PrivateRoute>,
				loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
			},
			{
				path:'/checkout/:id',
				element: <PrivateRoute><Payment></Payment></PrivateRoute>,
				loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
			}
			
		  ]
		},
		{
			path:'dashboard',
			element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
			children: [
				{
					path:'/dashboard/biodata',
					element: <PrivateRoute><EditBiodata></EditBiodata></PrivateRoute>
				},
				{
					path: '/dashboard/favourites',
					element: <PrivateRoute><Myfavourites></Myfavourites></PrivateRoute>
				},
				{
					path:'/dashboard/approved-contacts',
					element: <PrivateRoute><ApprovedContacts></ApprovedContacts></PrivateRoute>
				},
				{
					path:'/dashboard/manage-users',
					element: <PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
				},
				{
					path: '/dashboard/view-biodata',
					element: <PrivateRoute><ViewBiodata></ViewBiodata></PrivateRoute>
				},
				{
					path: '/dashboard/approvedPremium',
					element: <PrivateRoute><ApprovePremium></ApprovePremium></PrivateRoute>
				},
				{
					path: '/dashboard/admin',
					element: <PrivateRoute><Admindashboard></Admindashboard></PrivateRoute>
				}
				
			]
		}
	  ]);

	

export default router;