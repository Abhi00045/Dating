import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import MainHome from './pages/MainHome.jsx'

const router =createBrowserRouter([

  {
    element:<App/>,
    children:[
      {
        path:'/',
        element:<MainHome/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
