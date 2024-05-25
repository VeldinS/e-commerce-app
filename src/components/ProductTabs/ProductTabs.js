'use client'

import React, { useState } from 'react';
import {categories, products} from "@/lib/DummyData";
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

export function ProductTabs() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className={'flex flex-col items-center justify-center w-full h-full gap-8'}>
            <div className="flex space-x-4 mb-4 items-center justify-center gap-16"> {/* Tab Headers */}
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`navlink-wrapper font-audiowide text-black text-sm-4 leading-normal uppercase ${
                            activeTab === index ? 'underline' : 'no-underline'
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-8 w-full h-full">
                {products && products[categories[activeTab]] ? (
                    products[categories[activeTab]].map((product) => (
                        <Link href={`/${product.name}`} key={product.id} className="w-full h-auto flex flex-col justify-start items-center gap-4">
                            <div className="w-full h-3/4 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    objectFit="cover"
                                    className={'aspect-square'}
                                />
                            </div>
                            <div className="w-full h-1/4 px-8 flex flex-col justify-center items-center bg-white gap-4">
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
                                <h1 className={'font-audiowide text-black text-2xl leading-normal'}>{product.name}</h1>
                                <div className={'flex flex-row items-start justify-center gap-4'}>
                                    <p className={'font-audiowide text-xl text-gray-300 line-through'}>{product.oldPrice}</p>
                                    <p className={'font-audiowide text-xl text-black'}>{product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className={'text-black'}>Loading products...</p>
                )}
            </div>
        </div>
    );
}
