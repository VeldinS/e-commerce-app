import React from 'react';
import ButtonTertiary from "@/components/Buttons/ButtonTertiary";
import SquareImage from "@/components/Squares/SquareImage";
import CarouselSlider from "@/components/Slider/CarouselSlider";

function TopProducts() {
    return (
        <section className={'bg-[#F2DEDF] h-[80vh] py-24 xl:px-36 lg:px-24 px-4 flex relative xl:flex-row flex-col xl:justify-start justify-center xl:items-start items-center gap-8 overflow-hidden'}>
            <div className={'xl:w-2/5 w-full flex flex-col xl:items-start items-center justify-start xl:gap-12 gap-6'}>
                    <h1 className={'font-audiowide text-black text-5xl leading-normal xl:text-start text-center'}>
                        Top Rated
                        <br/>
                        PRODUCTS
                    </h1>
                <div className={'flex flex-col xl:items-start items-center justify-center gap-8 w-4/5'}>
                    <p className={'font-roboto text-black text-xl leading-normal xl:text-start text-center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                    <ButtonTertiary text={"See More"}/>
                </div>
            </div>
            <div className={'xl:w-3/4 w-full xl:absolute relative xl:-right-[15vw]'}>
                <CarouselSlider />
            </div>
            <SquareImage className="absolute left-[-30px] top-[20%]" />
        </section>
    );
}

export default TopProducts;