import { useState } from 'react'
import Userhome from './componets/userHome'

import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Login from './componets/logIn';

const router=createBrowserRouter([
  {
    path: '/',
    element:<Login />
    
  },
  {
    path:'/userhome',
    element: <Userhome />
  }
])

function App() {


  return (
    <>
      
      <RouterProvider router={router}></RouterProvider> 
  

    </>
  )
}


export default App