'use client'

import React, {useEffect, useState} from 'react';
import {categories, products} from "@/backend/Data";
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
import RevealComp from "@/components/Animations/reveal";

export function ProductTabs() {

    const [activeTab, setActiveTab] = useState(0); // State for the active tab (category)

    return (
        <div className={'flex flex-col items-center justify-center w-full h-full lg:gap-8 gap-4'}>
            <div className="flex lg:space-x-4 space-x-0 mb-4 items-center justify-center lg:gap-16 gap-2 flex-wrap"> {/* Tab Headers */}
                {categories.map((category, index) => (
                    <RevealComp threshold={0.5} duration={'300ms'} y={30} key={index}>
                        <div
                            className={`cursor-pointer bg-transparent flex flex-col justify-center items-center border-2 rounded-3xl lg:py-4 lg:px-8 py-2 px-2 navlink-wrapper font-audiowide text-black lg:text-lg text-sm leading-normal uppercase ${
                                activeTab === index ? 'border-black' : 'border-gray-400'
                            }`}
                            style={{backgroundColor: activeTab === index ? category.color : 'white'}}
                            onClick={() => setActiveTab(index)}
                        >
                            <p className={'font-audiowide lg:text-lg text-sm tracking-widest'}>{category.name}</p>
                        </div>
                    </RevealComp>
                ))}
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4 w-full h-full">
                {products && products[categories[activeTab].name] ? (
                    products[categories[activeTab].name].map((product) => (
                        <RevealComp threshold={0.5} duration={'300ms'} key={product.id}>
                            <Link href={`/products/${product.id}`}
                                  className="w-full h-auto flex flex-col justify-start items-center md:gap-4 gap-0">
                                <div style={{backgroundColor: product.color}} className="w-full h-3/4 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        className={'aspect-square scale-75'}
                                    />
                                </div>
                                <div className="w-full h-auto md:px-8 px-2 md:py-0 py-2 flex flex-col justify-center items-center bg-white md:gap-4 gap-1">
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
                                    <h1 className={'font-audiowide text-black lg:text-2xl text-lg leading-normal'}>{product.name}</h1>
                                    <div className={'flex flex-row items-start justify-center gap-4'}>
                                        <p className={'font-audiowide md:text-xl text-md text-gray-300 line-through'}>{product.oldPrice}</p>
                                        <p className={'font-audiowide md:text-xl text-md text-black'}>{product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </RevealComp>
                    ))
                ) : (
                    <p className={'text-black'}>Loading products...</p>
                )}
            </div>
        </div>
    );
}


