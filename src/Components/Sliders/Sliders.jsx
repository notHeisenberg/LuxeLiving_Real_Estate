import { useContext, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "./Sliders.css"

import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';



const Sliders = () => {

    const { data } = useContext(AuthContext)

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                className="mySwiper container mx-auto"
                
            >
                {
                    data.map((estate, idx) => (
                        <SwiperSlide
                            key={idx}
                            className='hover:shadow-xl hover:shadow-blue-300 relative'
                        >
                            <div className='absolute bottom-4 p-2 text-white font-medium text-2xl ' >

                                <h1>{estate.estate_title} </h1>
                                <div className='flex gap-2 items-center ' >
                                    <p className='btn btn-outline text-primary-content mr-52' >{estate.segment_name}</p>

                                    <p
                                        className={estate.status === 'Sale' ? `font-serif  btn btn-sm btn-warning`
                                            :
                                            `font-serif  btn btn-sm btn-error`
                                        } >
                                        {estate.status}
                                    </p>
                                    <p>
                                        {estate.price}
                                    </p>

                                </div>
                            </div>

                            <Link to={`/`}>

                                <img className='h-full hover:cursor-pointer' src={estate.image} />
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default Sliders;