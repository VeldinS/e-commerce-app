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
        <section className={'bg-[#F2DEDF] h-auto py-24 px-48 flex relative flex-row justify-between items-start gap-8'}>
            <div className={'w-2/5 flex flex-col items-start justify-start gap-6'}>
                <h1 className={'font-audiowide text-black text-5xl leading-normal'}>
                    Sell of the Day
                </h1>
                <div className={'flex flex-col items-start justify-center gap-8 w-3/5'}>
                    <p className={'font-roboto text-black text-xl leading-normal'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                    <Countdown />
                    <Link href={'/productUrl'}>
                        <ButtonPrimary text={"Check it Out!"}/>
                    </Link>
                </div>
            </div>
            <Image src={product1} alt={'Product example text.'} className={'absolute bottom-0 right-[15%] md:h-2/3 sm:h-1/3 w-auto'}/>
            <SquareImage className="absolute left-[-30px] top-[50%]" />
            <SquareImage className="absolute right-[-30px] -bottom-[20%]" />
            <SquareImage className="absolute right-[50%] top-[30%]" />
            <SquareImage className="absolute right-[10%] bottom-[30%]" />
        </section>
    );
}

export default SellOfDay;