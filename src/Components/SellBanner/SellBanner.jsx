import React from 'react';
import { Link } from 'react-router-dom';

const SellBanner = () => {
    return (
        <div className='max-w-screen-xl mx-auto pb-16'>
            <div className="p-6 py-12 bg-violet-300 text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracki font-bold">Up to
                            <br className="sm:hidden" />50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg">Newbie</span>
                        </div>
                        <Link to="/shop" rel="noreferrer noopener" className="btn btn-outline">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellBanner;