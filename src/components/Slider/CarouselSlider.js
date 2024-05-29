'use client'
import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";
import TopRatedCard from "@/components/Cards/TopRated Card/TopRatedCard";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import Link from "next/link";


SwiperCore.use([Autoplay, Navigation]);

const CarouselSlider = () => {

    return (
        <div className="w-full mx-auto overflow-hidden">
                <Swiper
                spaceBetween={2}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <Link href={'/products/1'}>
                        <TopRatedCard image={product1} name="Product 1" rating={4.2} price={'120KM'} oldPrice={'150KM'}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/products/2'}>
                        <TopRatedCard image={product2} name="Product 2" rating={2.7} price={'290KM'} oldPrice={'390KM'}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/products/3'}>
                        <TopRatedCard image={product3} name="Product 3" rating={3.9} price={'220KM'} oldPrice={'280KM'}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/products/4'}>
                        <TopRatedCard image={product4} name="Product 4" rating={4.2} price={'180KM'} oldPrice={'230KM'}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/products/5'}>
                        <TopRatedCard image={product2} name="Product 5" rating={4.9} price={'380KM'} oldPrice={'420KM'}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/products/6'}>
                        <TopRatedCard image={product3} name="Product 6" rating={1.2} price={'350KM'} oldPrice={'440KM'}/>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarouselSlider;
