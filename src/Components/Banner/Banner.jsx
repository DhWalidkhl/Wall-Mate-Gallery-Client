import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../src/assets/img/img-1.webp'
import img2 from '../../../src/assets/img/img-1.jpg'
import img3 from '../../../src/assets/img/img-3.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.css'



const Banner = () => {

    return (
        <div className='w-full'>
            <div className='pt-24'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='banner-css w-full max-h-96 opacity-60' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='banner-css w-full max-h-96 opacity-60' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='banner-css w-full max-h-96 opacity-60' src={img3} alt="" /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Banner;