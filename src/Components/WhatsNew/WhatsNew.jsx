import "keen-slider/keen-slider.min.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useState } from "react";
import WhatsNewCard from "../WhatsNewCard/WhatsNewCard";

const WhatsNew = () => {
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
    <div className="max-w-screen-xl mx-auto my-16 border-b-2 lg:pb-20 md:pb-16 sm:pb-8">
      <div className="text-center mb-12">
        <h1 className="uppercase text-4xl font-semibold">What's New</h1>
      </div>

      <Slider {...settings}>
        {products.map((product) => (
          <WhatsNewCard key={product._id} product={product}></WhatsNewCard>
        ))}
      </Slider>
    </div>
  );
};

export default WhatsNew;
