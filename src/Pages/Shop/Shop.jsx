import React, { useEffect, useState } from "react";
import ProductsCard from "../../Components/ProductCard/ProductsCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="py-28">
      <div className="mb-10">
        <h1 className="text-center text-4xl underline">Feel Free to order for your Wall.....</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-20  max-w-screen-xl mx-auto gap-10">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
