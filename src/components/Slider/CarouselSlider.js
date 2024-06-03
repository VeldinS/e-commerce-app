'use client'
import React, from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";
import Link from "next/link";
import {products} from "@/backend/Data";
import Stars from "@/components/Stars/Stars";


SwiperCore.use([Autoplay, Navigation]);

const CarouselSlider = () => {

    // Step 1: Flatten the products object
    const allProducts = Object.values(products).flat();

    // Step 2: Sort the products by rating in descending order
    const sortedProducts = allProducts.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));

    // Step 3: Get the top 6 products
    const topProducts = sortedProducts.slice(0, 6);

    return (
        <div className="w-full mx-auto overflow-hidden">
                <Swiper
                spaceBetween={2}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000 }}
                >
                    {topProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <Link href={`/products/${product.id}`}>
                                <div
                                    className={'w-auto mr-4 h-auto bg-black flex flex-col xl:justify-start justify-center xl:items-start items-center'}>
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={product.previewImg}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div
                                        className="w-full h-auto xl:px-8 px-2 xl:py-6 py-2 flex flex-col justify-center items-start bg-white">
                                        <Stars product={product}/>
                                        <h1 className={'font-audiowide text-black xl:text-3xl text-lg leading-normal'}>{product.name}</h1>
                                        <div
                                            className={'flex md:flex-row flex-col items-start justify-center md:gap-4 gap:0'}>
                                            <p className={'font-audiowide xl:text-2xl text-sm text-gray-300 line-through'}>{product.oldPrice}</p>
                                            <p className={'font-audiowide xl:text-2xl text-sm text-black'}>{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    );
};

export default CarouselSlider;
