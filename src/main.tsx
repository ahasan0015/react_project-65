import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Dashboard from './components/pages/Dashboard.tsx';
import Products from './components/pages/Products.tsx';

const links = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/products', element: <Products/> },
      { path: '/sales', element: <h1>Sales</h1> },
      { path: '/users', element: <h1>Users</h1> },
      { path: '/roles', element: <h1>Roles</h1> },
    ]
  },
  { path: '/login', element: <h1> Login </h1> },
  { path: '/pos', element: <h1>Pos</h1> },
  { path: '*', element: <h1 className='text-danger text-center my-5'>404 Not found  </h1> },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={links} />
  </StrictMode>,
)
