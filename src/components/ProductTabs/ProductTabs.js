'use client'

import React, {useEffect, useState} from 'react';
import {categories, products} from "@/lib/DummyData";
import Image from "next/image";
import testimage from '@/assets/product2.png'
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
import {fetchProducts} from "@/app/api/products/route";

export function ProductTabs() {

    const [activeTab, setActiveTab] = useState(0); // State for the active tab (category)
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
        <div className={'flex flex-col items-center justify-center w-full h-full lg:gap-8 gap-4'}>
            <div className="flex space-x-4 mb-4 items-center justify-center lg:gap-16 gap-0 flex-wrap"> {/* Tab Headers */}
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`navlink-wrapper font-audiowide text-black lg:text-lg text-sm leading-normal uppercase mb-2 md:md-0 ${
                            activeTab === index ? 'border-b-2 border-black' : 'border-none'
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4 w-full h-full">
                {filteredProducts.map((product) => (
                    <Link href={`/products/${product._id}`} key={product._id} className="w-full h-auto flex flex-col justify-start items-center md:gap-4 gap-0">
                            <div className="w-full h-3/4 overflow-hidden">
                                <Image
                                    src={testimage}
                                    alt={product.name}
                                    className={'aspect-square'}
                                />
                            </div>
                            <div className="w-full h-1/4 md:px-8 px-2 flex flex-col justify-center items-center bg-white md:gap-4 gap-2">
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
                                    <p className={'font-audiowide md:text-xl text-md text-gray-300 line-through'}>{product.old_price}</p>
                                    <p className={'font-audiowide md:text-xl text-md text-black'}>{product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}


