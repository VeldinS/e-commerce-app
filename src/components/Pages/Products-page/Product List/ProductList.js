'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import {motion} from "framer-motion";

import RevealComp from "@/components/Animations/reveal";
import Stars from "@/components/Stars/Stars";

import {categories, products} from "@/backend/Data";


export function ProductList() {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
            className={'flex flex-col items-center justify-center w-full h-full lg:gap-4 gap-2 lg:py-16 py-8 xl:px-24 lg:px-12 px-2'}>
            <div className="flex flex-row md:space-x-4 space-x-0 py-2 items-center bg-white w-full justify-center lg:gap-8 gap-2 flex-wrap sticky top-0 z-10"> {/* Tab Headers */}
                {categories.map((category, index) => (
                    <RevealComp threshold={0.5} duration={'300ms'} y={-30} key={index}>
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

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-2 w-full md:h-full h-auto">
                {products && products[categories[activeTab].name] ? (
                    products[categories[activeTab].name].map((product) => (
                        <RevealComp threshold={0.2} duration={'300ms'} key={product.id}>
                            <Link style={{backgroundColor: product.color}} href={`/products/${product.id}`}
                                  className="w-full h-auto flex flex-col justify-start items-center md:gap-2 gap-0 py-2 rounded-2xl">
                                <div className="sm:h-[300px] h-[170px] w-full overflow-hidden relative">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={'scale-[0.6]'}
                                    />
                                </div>
                                <div className="w-full h-auto md:px-8 px-2 flex flex-col justify-center items-center md:gap-4 gap-2">
                                    <Stars product={product} />
                                    <h1 className={'font-audiowide text-black md:text-2xl text-lg leading-normal'}>{product.name}</h1>
                                    <div className={'flex flex-row items-start justify-center gap-4'}>
                                        <p className={'font-audiowide md:text-xl text-md text-gray-500 line-through'}>{product.oldPrice}</p>
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
        </motion.div>
    );
}
