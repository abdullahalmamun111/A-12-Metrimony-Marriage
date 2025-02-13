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
import Mycontact from '../Dashboard-Pages/Mycontact';
import GotMarried from '../Dashboard-Pages/GotMarried';
import MakeSuccess from '../Dashboard-Pages/MakeSuccess';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import AdminRoute from '../Shared/AdminRoute';
import UpdateBio from '../Dashboard-Pages/UpdateBio';



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
				element:<Biodata></Biodata>
			},
			{
				path: 'biodatas/details/:id',
				element: <PrivateRoute><Details></Details></PrivateRoute>,
				loader: ({params}) => fetch(`https://partner-path-metrimony-server.vercel.app/details/${params.id}`)
			},
			{
				path: '/details/:id',
				element: <PrivateRoute><Details></Details></PrivateRoute>,
				loader: ({params}) => fetch(`https://partner-path-metrimony-server.vercel.app/details/${params.id}`)
			},
			{
				path:'/checkout/:id',
				element: <PrivateRoute><Payment></Payment></PrivateRoute>,
				loader: ({params}) => fetch(`https://partner-path-metrimony-server.vercel.app/details/${params.id}`)
			},
			{
				path: '/about',
				element: <About></About>
			},
			{
				path: '/contact',
				element: <Contact></Contact>
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
					path: '/dashboard/update/:email',
					element: <PrivateRoute><UpdateBio></UpdateBio></PrivateRoute>,
					loader: ({params}) => fetch(`https://partner-path-metrimony-server.vercel.app/biodata/update/${params.email}`)
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
					element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
				},
				{
					path: '/dashboard/view-biodata/:email',
					element: <PrivateRoute><ViewBiodata></ViewBiodata></PrivateRoute>,
					loader: ({params}) => fetch(`https://partner-path-metrimony-server.vercel.app/biodata/update/${params.email}`)
				},
				{
					path: '/dashboard/approvedPremium',
					element: <PrivateRoute><ApprovePremium></ApprovePremium></PrivateRoute>
				},
				{
					path: '/dashboard/admin',
					element: <AdminRoute><Admindashboard></Admindashboard></AdminRoute>
				},
				{
					path: '/dashboard/contact-requests',
					element: <PrivateRoute><Mycontact></Mycontact></PrivateRoute>
				},
				{
					path: '/dashboard/gotMarried',
					element: <PrivateRoute><GotMarried></GotMarried></PrivateRoute>
				},
				{
					path: '/dashboard/makestory',
					element: <AdminRoute><MakeSuccess></MakeSuccess></AdminRoute>
				}
				
			]
		}
	  ]);

	

export default router;