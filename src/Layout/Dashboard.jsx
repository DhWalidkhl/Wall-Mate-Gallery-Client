import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-outline btn-accent drawer-button lg:hidden"
            >
              Dashboard Menu
            </label>
          </div>
          <div className="drawer-side text-center bg-slate-300">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            >Wallmate Gallery <br />Admin Dashboard</label>
            <ul className="menu p-4 w-80 h-full text-base-content bg-orange-200">
              {/* Sidebar content here */}
              <li>
                <Link to='/dashboard/admindashboard'>Dashboard</Link>
              </li>
              <li>
                <Link to="/dashboard/allproducts">All Products</Link>
              </li>
              <li>
                <Link to="/dashboard/additems">Add Item</Link>
              </li>
              <li>
                <Link to="/dashboard/totaluser">Total Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
