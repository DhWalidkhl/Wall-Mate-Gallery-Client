import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';
import SellBanner from '../SellBanner/SellBanner';
import WhatsNew from '../WhatsNew/WhatsNew';
import BestSeller from '../BestSeller/BestSeller';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            <WhatsNew></WhatsNew>
            <SellBanner></SellBanner>
            <BestSeller></BestSeller>
        </div>
    );
};

export default Home;