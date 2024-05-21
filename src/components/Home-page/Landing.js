import React from 'react';
import Image from "next/image";

import ButtonPrimary from "@/components/Buttons/ButtonPrimary";

import product3 from '../../assets/product3.png';
import squares from '../../assets/squares.svg';
import SquareImage from "@/components/Squares/SquareImage";


function Landing() {
    return (
        <section className={'h-screen bg-light-gray px-48 flex justify-between items-center relative overflow-hidden'}>
            <div className={'w-2/5 flex flex-col items-start justify-center gap-16'}>
                <div className={'flex flex-col items-start justify-center gap-2'}>
                    <h1 className={'font-audiowide text-black text-5xl leading-normal'}>
                        The Best Store To
                        <br/>
                        Shop Online
                    </h1>
                    <h1 className={'font-audiowide text-black text-4xl'}>
                        ALL IN ONE
                    </h1>
                </div>
                <div className={'flex flex-col items-start justify-center gap-12'}>
                    <p className={'font-roboto text-black text-sm-2 leading-normal'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <ButtonPrimary text={"SHOP NOW"} />
                </div>
            </div>
            <div className={"w-1/2 h-3/4 bg-[#FFBBB8] rounded-bl-[256px] relative "}>
                <Image src={product3} fill alt={'Product example text.'} className={"rounded-bl-[256px] object-cover object-center scale-90"}/>
                <SquareImage className="absolute left-[-30px] top-[20%]" />
                <SquareImage className="absolute right-[-30px] top-0" />
            </div>
            <SquareImage className="absolute left-[-30px] top-[20%]" />
            <SquareImage className="absolute left-[-30px] bottom-[20%]" />
            <SquareImage className="absolute right-[-30px] top-[40%]" />
            <SquareImage className="absolute right-[-30px] bottom-[10%]" />
        </section>
    );
}

export default Landing;
