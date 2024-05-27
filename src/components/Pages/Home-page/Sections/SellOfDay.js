import React from 'react';
import ButtonTertiary from "@/components/Buttons/ButtonTertiary";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import Countdown from "@/components/Countdown/Countdown";
import Image from "next/image";
import product1 from '../../../../assets/product2.png'
import SquareImage from "@/components/Squares/SquareImage";
import Link from "next/link";

function SellOfDay() {
    return (
        <section className={'bg-[#F2DEDF] h-auto py-24 xl:px-48 lg:px-24 px-4 flex relative lg:flex-row flex-col justify-between lg:items-start items-center gap-8 overflow-hidden'}>
            <div className={'lg:w-2/5 w-full flex flex-col lg:items-start items-center justify-start lg:gap-6 gap-2'}>
                <h1 className={'font-audiowide text-black text-center lg:text-start lg:text-5xl text-4xl leading-normal'}>
                    Sell of the Day
                </h1>
                <div className={'flex flex-col lg:items-start items-center justify-center lg:gap-8 gap:2 lg:w-3/5 w-full'}>
                    <p className={'font-roboto text-black lg:text-xl text-md leading-normal text-center lg:text-start'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                    <Countdown />
                    <Link href={'/productUrl'}>
                        <ButtonPrimary text={"Check it Out!"}/>
                    </Link>
                </div>
            </div>
            <Image src={product1} alt={'Product example text.'} className={'lg:absolute relative bottom-0 lg:right-[15%] right-0 md:h-2/3 sm:h-1/3 w-auto'}/>
            <SquareImage className="absolute left-[-30px] top-[50%]" />
            <SquareImage className="absolute right-[-30px] -bottom-[20%]" />
            <SquareImage className="absolute right-[50%] top-[30%]" />
            <SquareImage className="absolute right-[10%] bottom-[30%]" />
        </section>
    );
}

export default SellOfDay;