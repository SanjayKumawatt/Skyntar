import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Component/ErrorPage'
import Home from './Pages/Home'
import Tech from './Pages/Tech'
import Demo from './Pages/Demo'
import Research from './Pages/Research'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Careers from './Pages/Careers'
import Docs from './Pages/Docs'
import Privacy from './Component/Privacy'


const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/technology",
          element:<Tech/>
        },
        {
          path:"/demo",
          element:<Demo/>
        },
        {
          path:"/research",
          element:<Research/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/careers",
          element:<Careers/>
        },
        {
          path:"/docs",
          element:<Docs/>
        },
        {
          path:"/privacy",
          element:<Privacy/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App