import React from "react";
import { Link } from "react-router-dom";

const BestSellerCard = ({ product }) => {
  const { picture, name, about } = product;
  return (
    <div className="py-10 px-2">
      <div className="card lg:max-h-96 sm:max-h-52 lg:w-96 shadow rounded-none">
        <figure>
          <img
            src={picture}
            className="max-h-52 w-full"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
          </h2>
          <p>{about}</p>
          <div className="card-actions justify-end">
            <Link className="badge badge-outline">Add to cart</Link>
            <Link className="badge badge-outline">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
