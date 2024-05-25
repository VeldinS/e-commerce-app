import React from 'react';
import Image from "next/image";

import product4 from "@/assets/product4.png";
import SquareImage from "@/components/Squares/SquareImage";


function BestSell() {
    return (
        <section className={'h-screen py-16 bg-white px-56 flex relative flex-row justify-center items-center gap-16'}>
            <div className={'w-1/2 h-4/5 bg-[#F4FFBB] rounded-tl-[256px] relative shadow-2xl overflow-hidden'}>
                <Image src={product4} fill alt={'Product example text.'}
                       className={"rounded-bl-[256px] object-cover object-center"}/>
            </div>
            <div className={'relative w-1/2 h-4/5 flex flex-col justify-start items-start gap-4'}>
                <h1 className={'font-audiowide text-7xl text-black leading-tight'}>
                    Best Sell <br/> Since 2021
                </h1>
                <p className={'font-roboto text-black text-xl leading-normal'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className={'bg-[#EEE5E5] py-10 px-10 flex flex-row gap-8 absolute -bottom-10 -left-1/3'}>
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