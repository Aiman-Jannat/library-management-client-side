import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout.jsx';
import Home from './components/Home.jsx';
import AddBooks from './pages/AddBooks.jsx';
import AllBooks from './pages/AllBooks.jsx';
import BorrowedBooks from './pages/BorrowedBooks.jsx';
import Login from './pages/Login.jsx';
import Details from './pages/Details.jsx';
import Register from './pages/Register.jsx';
import Update from './pages/Update.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import SimilarCategory from './pages/SimilarCategory.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/categories')
      },
      {
        path:'/addBooks',
        element:<AddBooks></AddBooks>
      },
      {
        path:'/allBooks',
        element:<AllBooks></AllBooks>,
        loader:()=>fetch('http://localhost:5000/books')
      },
      {
        path:'/borrowedBooks',
        element:<BorrowedBooks></BorrowedBooks>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`)
        // loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`)
      },
      {
        path:'/similar/:id',
        element:<SimilarCategory></SimilarCategory>,
        loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`)

      }
     
    ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
