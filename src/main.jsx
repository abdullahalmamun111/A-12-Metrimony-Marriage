import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthContext from './AuthProvider/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
<AuthContext>
<QueryClientProvider client={queryClient}>
<StrictMode>
   <RouterProvider router={router}></RouterProvider>
</StrictMode>
</QueryClientProvider>
</AuthContext>,
)
