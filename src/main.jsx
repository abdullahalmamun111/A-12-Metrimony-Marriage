import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthContext from './AuthProvider/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
<AuthContext>
<StrictMode>
   <RouterProvider router={router}></RouterProvider>
</StrictMode>
</AuthContext>,
)
