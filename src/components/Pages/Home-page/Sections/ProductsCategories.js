import React from 'react';

import {ProductTabs} from "@/components/ProductTabs/ProductTabs";
import SquareImage from "@/components/Squares/SquareImage";
import RevealComp from "@/components/Animations/reveal";


function ProductsCategories() {
    return (
        <section className={'h-auto md:py-24 py-8 bg-white xl:px-36 lg:px-24 px-4 flex relative flex-col md:justify-start justify-center items-center lg:gap-12 gap-6 overflow-hidden'}>
            <RevealComp threshold={1} duration={'300ms'}>
                <h1 className={'font-audiowide text-black text-center lg:text-7xl text-5xl'}>
                    Best from Each
                </h1>
            </RevealComp>
            <ProductTabs/>
            <SquareImage className="absolute left-[-30px] top-[5%] md:flex hidden"/>
            <SquareImage className="absolute left-[-15px] bottom-[30%]" />
            <SquareImage className="absolute right-[-30px] top-[0%] md:flex hidden" />
            <SquareImage className="absolute right-[-30px] bottom-[50%]" />
            <SquareImage className="absolute right-[-30px] -bottom-[10%]" />
        </section>
    );
}

export default ProductsCategories;