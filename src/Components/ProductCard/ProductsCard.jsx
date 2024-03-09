import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { picture, price, color, name, about } = product;
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="/">
          <img className="rounded-t-lg h-52 w-full" src={picture} alt="" />
        </Link>
        <div className="p-5">
          <Link to="">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Color: {color}
          </p>
          <p className="font-bold text-gray-700 dark:text-gray-400">
            Price: {price} BDT
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Description: </span> {about}
          </p>
          <Link
            to="#"
            className="inline-flex items-center mt-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Buy Now
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
