import React from 'react';
import Link from "next/link";

import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import Countdown from "@/components/Countdown/Countdown";
import SquareImage from "@/components/Squares/SquareImage";
import RevealComp from "@/components/Animations/reveal";

import {products} from "@/backend/Data";


function SellOfDay() {

    const findSellOfDayProduct = (products) => {
        for (const category in products) {
            for (const product of products[category]) {
                if (product.sellOfDay) {
                    return product;
                }
            }
        }
        return null;
    };
    const productData = findSellOfDayProduct(products);

    return (
        <section id={'sellofday'} className={'bg-[#F2DEDF] h-auto py-24 xl:px-48 lg:px-24 px-6 flex relative lg:flex-row flex-col justify-between lg:items-start items-center gap-8 overflow-hidden'}>
            <div className={'lg:w-3/5 w-full flex flex-col lg:items-start items-center justify-start lg:gap-6 gap-2'}>
                <RevealComp delay={'200ms'} threshold={0.5} duration={'300ms'} x={-30}>
                    <h1 className={'font-audiowide text-black lg:text-start text-center lg:text-7xl text-5xl'}>
                        Sell of the Day
                    </h1>
                </RevealComp>
                <div className={'flex flex-col lg:items-start items-center justify-center lg:gap-8 gap:2 lg:w-3/5 w-full'}>
                    <RevealComp delay={'400ms'} threshold={0.5} duration={'300ms'} x={-30}>
                        <h1 className={'font-audiowide text-black lg:text-start text-center lg:text-3xl text-xl'}>
                            {productData.name}
                        </h1>
                        <p className={'font-roboto text-black text-xl lg:text-start text-center leading-normal'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi
                            convallis
                        </p>
                    </RevealComp>
                    <RevealComp delay={'600ms'} threshold={0.5} duration={'300ms'} x={-30}>
                        <Countdown/>
                    </RevealComp>
                    <RevealComp delay={'800ms'} threshold={0.5} duration={'300ms'} x={-30}>
                        <ButtonPrimary text={"Check it Out!"} link={`/products/${productData.id}`} />
                    </RevealComp>
                </div>
            </div>
            <img src={productData.previewImg} alt={productData.name} className={'lg:absolute relative bottom-0 lg:right-[15%] right-0 md:h-2/3 sm:h-1/3 w-auto'}/>
            <SquareImage className="absolute left-[-30px] top-[50%]" />
            <SquareImage className="absolute right-[-30px] -bottom-[20%]" />
            <SquareImage className="absolute right-[50%] top-[30%] md:flex hidden" />
            <SquareImage className="absolute right-[10%] bottom-[30%]" />
        </section>
    );
}

export default SellOfDay;