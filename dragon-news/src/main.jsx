import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import router from './routes/Router'
import AuthProvider from './provider/AuthProvider'

// import {
//   // createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
  </StrictMode>,
)
