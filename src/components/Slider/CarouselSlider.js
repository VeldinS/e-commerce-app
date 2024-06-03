'use client'
import React, from "react";
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
import {products} from "@/backend/Data";


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
                                <TopRatedCard image={product.previewImg} name={product.name} rating={product.rating} price={product.price} oldPrice={product.oldPrice}/>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    );
};

export default CarouselSlider;
