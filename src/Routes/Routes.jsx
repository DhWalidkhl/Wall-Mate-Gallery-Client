import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Shop from "../Pages/Shop/Shop";
import OurTeam from "../Pages/OurTeam/OurTeam";
import Terms from "../Pages/Terms/Terms";
import Dashboard from "../Layout/Dashboard";
import AddItems from "../Components/AddItem/AddItems";
import TotalUser from "../Pages/TotalUser/TotalUser";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import AllProducts from "../Pages/AllProducts/AllProducts";
import EditProduct from "../Pages/EditProduct/EditProduct";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path: '/ourteam',
          element: <OurTeam></OurTeam>
        },
        {
          path: '/terms&condition',
          element: <Terms></Terms>
        },
        {
          path: '/login',
          element: <Login></Login>
        }  
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "/dashboard",
          element: <AdminDashboard></AdminDashboard>
        },
        {
          path: '/dashboard/additems',
          element: <AddItems></AddItems>
        },
        {
          path: '/dashboard/totaluser',
          element: <TotalUser></TotalUser>
        },
        {
          path: '/dashboard/admindashboard',
          element: <AdminDashboard></AdminDashboard>
        },
        {
          path: '/dashboard/allproducts',
          element: <AllProducts></AllProducts>
        },
        {
          path: "/dashboard/product/edit/:id",
          element: <EditProduct></EditProduct>
        }

      ]
    }
    
      
  ]);