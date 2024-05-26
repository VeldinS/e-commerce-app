import React from 'react';
import Image from "next/image";

import product4 from "@/assets/product4.png";
import SquareImage from "@/components/Squares/SquareImage";


function BestSell() {
    return (
        <section className={'h-screen lg:py-16 py:8 bg-white xl:px-56 lg:px-24 px-10 flex relative flex-col-reverse lg:flex-row justify-center items-center lg:gap-16 gap:10 overflow-hidden'}>
            <div className={'lg:w-1/2 w-full lg:h-4/5 h-1/2 bg-[#F4FFBB] lg:rounded-tl-[256px] rounded-tl-[0px] relative shadow-2xl overflow-hidden'}>
                <Image src={product4} fill alt={'Product example text.'}
                       className={"rounded-bl-[256px] object-cover object-center lg:scale-100 md:scale-75 scale-75"}
                />
            </div>
            <div className={'relative lg:w-1/2 w-full lg:h-4/5 h-1/2 flex flex-col lg:justify-start justify-center lg:items-start items-center gap-4'}>
                <h1 className={'font-audiowide text-7xl text-black leading-tight'}>
                    Best Sell <br/> Since 2021
                </h1>
                <p className={'font-roboto text-black text-xl leading-normal'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className={'bg-[#EEE5E5] py-10 px-10 flex flex-row gap-8 lg:absolute relative lg:-bottom-10 lg:-left-1/3 lg:w-auto w-full lg:justify-center justify-between'}>
                    <div className={'flex flex-col justify-center items-center'}>
                        <p className={'font-audiowide text-4xl text-black'}>2019</p>
                        <p className={'font-audiowide text-xl text-black'}>All founded</p>
                    </div>
                    <div className={'w-px h-20 bg-black'}></div>
                    <div className={'flex flex-col justify-center items-center'}>
                        <p className={'font-audiowide text-4xl text-black'}>9090+</p>
                        <p className={'font-audiowide text-xl text-black'}>Products Sold</p>
                    </div>
                    <div className={'w-px h-20 bg-black'}></div>
                    <div className={'flex flex-col justify-center items-center'}>
                        <p className={'font-audiowide text-4xl text-black'}>2023</p>
                        <p className={'font-audiowide text-xl text-black'}>Best Reviews</p>
                    </div>
                </div>
            </div>
            <SquareImage className="absolute left-[-30px] bottom-[20%]" />
            <SquareImage className="absolute right-[-30px] top-[10%]" />
            <SquareImage className="absolute right-[-30px] bottom-[10%]" />
        </section>
    );
}

export default BestSell;