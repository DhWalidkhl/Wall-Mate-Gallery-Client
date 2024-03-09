import React from 'react';
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    return (
        <div className='my-14 lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto gap-8 items-center justify-center text-center px-10'>
            <div className="card mb-5 w-full glass rounded-none grid grid-cols-2 justify-center bg-zinc-200 lg:h-60 lg:w-full items-center">
                <div className='text-9xl px-16'>
                    <BiCategoryAlt />
                </div>
                <div className="card-body text-center justify-center">
                    <h2 className="card-title">Wall Hanger</h2>
                    <div className="card-actions">
                        <Link to="/shop" className="btn btn-outline">Shop Now <span className='text-xl'><GrFormNextLink /></span></Link>
                    </div>
                </div>
            </div>

            <div className="card mb-5 w-full glass rounded-none grid grid-cols-2 justify-center bg-zinc-200 lg:h-60 lg:w-full items-center">
                <div className='text-9xl px-16'>
                    <MdOutlineCategory />
                </div>
                <div className="card-body text-center justify-center">
                    <h2 className="card-title">Wall Mate</h2>
                    <div className="card-actions">
                        <Link to="/shop" className="btn btn-outline btn-success">Shop Now<span className='text-xl'><GrFormNextLink /></span></Link>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ProductCategory;