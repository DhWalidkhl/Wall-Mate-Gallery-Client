import React, { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/products/")
    .then(res=>res.json())
    .then(data=>{
      setProducts(data.data)
    })
  }, [])
  return (
    <div className="p-6">
        <h1 className="text-center mb-5 text-3xl font-semibold text-orange-500">Welcome to Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Link
            to='/dashboard/totaluser'
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Here is your all users
              </h5>
              <p className="mb-3 items-center align-middle flex flex-none font-normal text-gray-700 dark:text-gray-400">
               click to see the users <span className="ml-2 mt-1"><GrFormNextLink></GrFormNextLink></span>
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link
            to='/dashboard/additems'
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wanna Add an item?
              </h5>
              <p className="mb-3 font-normal items-center align-middle flex flex-none text-gray-700 dark:text-gray-400">
                Click to add an item <span className="ml-2 mt-1"><GrFormNextLink></GrFormNextLink></span>
              </p>
            </div>
          </Link>
          
        </div>
        <div>
        <Link
            to='/dashboard/allproducts'
            href="#"
            className="flex flex-col items-center bg-sky-200 px-10 py-2 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                To see all products
              </h5>
              <h1 className="font-semibold text-xl text-yellow-500 mb-2">Total Products : {products.length}</h1>
              <p className="mb-3 font-normal items-center align-middle flex flex-none text-gray-700 dark:text-gray-400">
                Click here <span className="ml-2 mt-1"><GrFormNextLink></GrFormNextLink></span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
