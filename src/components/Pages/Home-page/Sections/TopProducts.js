import React from 'react';

import ButtonTertiary from "@/components/Buttons/ButtonTertiary";
import SquareImage from "@/components/Squares/SquareImage";
import CarouselSlider from "@/components/Slider/CarouselSlider";
import RevealComp from "@/components/Animations/reveal";


function TopProducts() {
    return (
        <section className={'bg-blue-300 xl:h-[80vh] h-auto py-24 xl:px-36 lg:px-24 px-6 flex relative xl:flex-row flex-col xl:justify-start justify-center xl:items-start items-center gap-8 overflow-hidden'}>
            <div className={'xl:w-2/5 w-full flex flex-col xl:items-start items-center justify-start xl:gap-12 gap-6'}>
                <RevealComp delay={'200ms'} threshold={0.3} duration={'300ms'} x={-30}>
                    <h1 className={'font-audiowide text-black lg:text-start text-center lg:text-6xl text-5xl'}>
                        Top Rated
                        <br/>
                        PRODUCTS
                    </h1>
                </RevealComp>
                <div className={'flex flex-col xl:items-start items-center justify-center gap-8 w-4/5'}>
                    <RevealComp delay={'400ms'} threshold={0.2} duration={'300ms'} x={-30}>
                        <p className={'font-roboto text-black text-xl lg:text-start text-center leading-normal'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis
                        </p>
                    </RevealComp>
                    <RevealComp delay={'600ms'} threshold={0.1} duration={'300ms'} x={-30}>
                        <ButtonTertiary text={"See More"} link={"/products"}/>
                    </RevealComp>
                </div>
            </div>
            <div className={'xl:w-3/4 w-[200%] xl:absolute relative xl:-right-[15vw]'}>
                <RevealComp delay={'300ms'} threshold={0.2} duration={'500ms'} x={200}>
                    <CarouselSlider />
                </RevealComp>
            </div>
            <SquareImage className="absolute left-[-30px] top-[20%]" />
        </section>
    );
}

export default TopProducts;