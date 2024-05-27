import React from 'react';
import {ProductTabs} from "@/components/ProductTabs/ProductTabs";
import SquareImage from "@/components/Squares/SquareImage";

function ProductsCategories() {
    return (
        <section className={'h-auto md:py-24 py-8 bg-white xl:px-36 lg:px-24 px-4 flex relative flex-col md:justify-start justify-center items-center lg:gap-12 gap-6 overflow-hidden'}>
            <h1 className={'font-audiowide lg:text-7xl text-4xl text-black md:text-start text-center'}>
                Best from Each
            </h1>
            <ProductTabs />
            <SquareImage className="absolute left-[-30px] top-[5%] md:flex hidden" />
            <SquareImage className="absolute left-[-15px] bottom-[30%]" />
            <SquareImage className="absolute right-[-30px] top-[0%] md:flex hidden" />
            <SquareImage className="absolute right-[-30px] bottom-[50%]" />
            <SquareImage className="absolute right-[-30px] -bottom-[10%]" />
        </section>
    );
}

export default ProductsCategories;