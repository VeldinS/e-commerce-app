'use client'

import React, { useState, useEffect } from 'react';
import {categories} from "@/lib/DummyData";
import Image from "next/image";
import stars0_5 from "@/assets/stars/stars0_5.svg";
import stars1 from "@/assets/stars/stars1.svg";
import stars1_5 from "@/assets/stars/stars1_5.svg";
import stars2 from "@/assets/stars/stars2.svg";
import stars2_5 from "@/assets/stars/stars2_5.svg";
import stars3 from "@/assets/stars/stars3.svg";
import stars3_5 from "@/assets/stars/stars3_5.svg";
import stars4 from "@/assets/stars/stars4.svg";
import stars4_5 from "@/assets/stars/stars4_5.svg";
import stars5 from "@/assets/stars/stars5.svg";
import Link from "next/link";
import imagetest from '@/assets/product1Png.png';
import {fetchProducts} from "@/lib/actions";

export function ProductList() {
    const [activeTab, setActiveTab] = useState(null); // State for the active tab (category)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)   // Update state with the fetched data
            .catch(err => {
                console.error("Error handling fetched products:", err);
                // Optionally, set an error state or display an error message
            });
    }, []);


    const filteredProducts = products.filter(product => {
        // If no tab is selected (activeTab is 0), show all products
        if (activeTab === null) return true;
        // Otherwise, check if product category matches the selected tab's name
        return product.category === categories[activeTab].name;
    });

    return (
        <div className={'flex flex-col items-center justify-center w-full h-full lg:gap-4 gap-2 py-16 xl:px-24 lg:px-12 px-6'}>
            <div className="flex space-x-4 mb-4 items-center justify-center lg:gap-8 gap-0 flex-wrap"> {/* Tab Headers */}
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer bg-transparent flex flex-col justify-center items-center border-2 rounded-3xl py-4 px-8 navlink-wrapper font-audiowide text-black lg:text-lg text-sm leading-normal uppercase mb-2 md:md-0 ${
                            activeTab === index ? 'border-black' : 'border-gray-400'
                        }`}
                        style={{backgroundColor: activeTab === index ? category.color : 'transparent'}}
                        onClick={() => setActiveTab(index)}
                    >
                        <Image src={category.image} alt={category.name} className={'h-[100px] w-auto'}/>
                        <p className={'font-audiowide text-lg tracking-widest'}>{category.name}</p>
                    </div>

                ))}
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-2 w-full h-full">
                {filteredProducts.map((product) => (
                        <Link style={{backgroundColor: product.color }} href={`/products/${product.id}`} key={product._id}
                              className="w-full h-auto flex flex-col justify-start items-center md:gap-2 gap-0 py-2 rounded-2xl">
                            <div className="w-full sm:h-[300px] h-[200px] overflow-hidden relative">
                                <Image
                                    src={imagetest}
                                    alt={product.name}
                                    layout={'fill'}
                                    className={'lg:scale-[0.6] scale-50'}
                                />
                            </div>
                            <div className="w-full h-auto md:px-8 px-2 flex flex-col justify-center items-center md:gap-4 gap-2">
                                <div>
                                    {product.rating >= 0 && product.rating <= 0.5 && (
                                        <Image src={stars0_5} alt={'Rating 0.5'}/>
                                    )}
                                    {product.rating > 0.5 && product.rating <= 1 && (
                                        <Image src={stars1} alt={'Rating 1'}/>
                                    )}
                                    {product.rating > 1 && product.rating <= 1.5 && (
                                        <Image src={stars1_5} alt={'Rating 1.5'}/>
                                    )}
                                    {product.rating > 1.5 && product.rating <= 2 && (
                                        <Image src={stars2} alt={'Rating 2'}/>
                                    )}
                                    {product.rating > 2 && product.rating <= 2.5 && (
                                        <Image src={stars2_5} alt={'Rating 2.5'}/>
                                    )}
                                    {product.rating > 2.5 && product.rating <= 3 && (
                                        <Image src={stars3} alt={'Rating 3'}/>
                                    )}
                                    {product.rating > 3 && product.rating <= 3.5 && (
                                        <Image src={stars3_5} alt={'Rating 3.5'}/>
                                    )}
                                    {product.rating > 3.5 && product.rating <= 4 && (
                                        <Image src={stars4} alt={'Rating 4'}/>
                                    )}
                                    {product.rating > 4 && product.rating <= 4.5 && (
                                        <Image src={stars4_5} alt={'Rating 4.5'}/>
                                    )}
                                    {product.rating > 4.5 && product.rating <= 5 && (
                                        <Image src={stars5} alt={'Rating 5'}/>
                                    )}
                                </div>
                                <h1 className={'font-audiowide text-black md:text-2xl text-lg leading-normal'}>{product.name}</h1>
                                <div className={'flex flex-row items-start justify-center gap-4'}>
                                    <p className={'font-audiowide md:text-xl text-md text-gray-500 line-through'}>{product.old_price}</p>
                                    <p className={'font-audiowide md:text-xl text-md text-black'}>{product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
