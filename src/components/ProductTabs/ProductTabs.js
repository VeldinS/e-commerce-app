'use client'

import React, {useState} from 'react';
import {categories, products} from "@/backend/Data";
import Link from "next/link";

import RevealComp from "@/components/Animations/reveal";
import Stars from "@/components/Stars/Stars";


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
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={'aspect-square scale-[0.6]'}
                                    />
                                </div>
                                <div className="w-full h-auto md:px-8 px-2 md:py-0 py-2 flex flex-col justify-center items-center bg-white md:gap-4 gap-1">
                                    <Stars product={product} />
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


