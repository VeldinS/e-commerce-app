'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from 'swiper';
import {Autoplay, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


SwiperCore.use([Autoplay, Navigation]);
const ImageSlider = ({image1, image2, image3, image4}) => {
    return (
        <div className="w-full h-full mx-auto overflow-hidden">
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
            >
                <SwiperSlide className={'w-full h-full relative'}>
                    <img src={image1} alt={'Product image'} className={'scale-50'}/>
                </SwiperSlide>
                {image2 &&
                    <SwiperSlide className={'w-full h-full relative'}>
                        <img src={image2} alt={'Product image'}  className={'scale-50'}/>
                    </SwiperSlide>
                }
                {image3 &&
                    <SwiperSlide className={'w-full h-full relative'}>
                        <img src={image3} alt={'Product image'}  className={'scale-50'}/>
                    </SwiperSlide>
                }
                {image4 &&
                    <SwiperSlide className={'w-full h-full relative'}>
                        <img src={image4} alt={'Product image'}  className={'scale-50'}/>
                    </SwiperSlide>
                }
            </Swiper>
        </div>
    );
};

export default ImageSlider;
