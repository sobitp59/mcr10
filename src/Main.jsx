import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import "./App.css"
import Header from './components/Header.jsx'
import { InventoryContextProvider } from './context/InventoryContext'
import './index.css'
import Dashboard from './pages/Dashboard.jsx'
import Departments from './pages/Departments.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails'

const AppLayout = () => {
  return(
    <div className='applayout'>
      <Header />
      <InventoryContextProvider>
        <Outlet />
      </InventoryContextProvider>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />
,
    children : [
      {
        path : "/",
        element : <Dashboard />
      },
      {
        path : "/departments",
        element : <Departments />
      },
      {
        path : "/products",
        element : <Products />
      },
      {
        path : "/products/:productID",
        element : <ProductDetails />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<React.StrictMode> <RouterProvider router={appRouter}/> </React.StrictMode>,)

