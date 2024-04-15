import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Components/Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Profiler>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.Profiler>,
)
