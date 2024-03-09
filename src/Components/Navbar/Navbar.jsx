import React from 'react';
import { Link } from 'react-router-dom';
import { FaChild } from "react-icons/fa6";
import logoImg from "../../assets/Logo/Logo.png";


const Navbar = () => {
    return (
        <div className=''>
            <div className="fixed z-10 lg:px-24 navbar bg-base-100 pb-1 mb-24 ">
                <div className="navbar-start max-w-screen-xl mx-auto">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>

                        </ul>
                    </div>
                    <Link to="/"><img className='w-36 h-20 p-0 m-0' src={logoImg} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex max-w-screen-xl mx-auto">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                <label className="input input-bordered flex items-center gap-2">
                    <input className="grow w-20 sm:w-full lg:w-full" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                    <Link className='text-xl w-8 opacity-80' to="/login"><FaChild /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;