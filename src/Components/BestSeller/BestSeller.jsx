import "keen-slider/keen-slider.min.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import BestSellerCard from "../BestSellerCard/BestSellerCard";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="max-w-screen-xl mx-auto my-16 lg:pb-20 md:pb-16 sm:pb-8">
      <div className="text-center mb-12">
        <h1 className="uppercase text-4xl font-semibold">our bestsellers</h1>
      </div>

      <Slider {...settings}>
        {products.map((product) => (
          <BestSellerCard key={product._id} product={product}></BestSellerCard>
        ))}
      </Slider>
    </div>
  );
};

export default BestSeller;
