import React from 'react';
import {ProductTabs} from "@/components/ProductTabs/ProductTabs";
import SquareImage from "@/components/Squares/SquareImage";

function ProductsCategories() {
    return (
        <section className={'h-auto py-24 bg-white px-36 flex relative flex-col justify-start items-center gap-12 overflow-hidden'}>
            <h1 className={'font-audiowide text-7xl text-black'}>
                Best from Each
            </h1>
            <ProductTabs />
            <SquareImage className="absolute left-[-30px] top-[5%]" />
            <SquareImage className="absolute left-[-15px] bottom-[30%]" />
            <SquareImage className="absolute right-[-30px] top-[0%]" />
            <SquareImage className="absolute right-[-30px] bottom-[50%]" />
            <SquareImage className="absolute right-[-30px] -bottom-[10%]" />
        </section>
    );
}

export default ProductsCategories;