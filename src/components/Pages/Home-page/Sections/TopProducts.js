import React from 'react';
import ButtonTertiary from "@/components/Buttons/ButtonTertiary";
import SquareImage from "@/components/Squares/SquareImage";
import CarouselSlider from "@/components/Slider/CarouselSlider";

function TopProducts() {
    return (
        <section className={'bg-[#F2DEDF] h-[80vh] py-24 px-36 flex relative flex-row justify-start items-start gap-8'}>
            <div className={'w-2/5 flex flex-col items-start justify-start gap-12'}>
                    <h1 className={'font-audiowide text-black text-5xl leading-normal'}>
                        Top Rated
                        <br/>
                        PRODUCTS
                    </h1>
                <div className={'flex flex-col items-start justify-center gap-8 w-4/5'}>
                    <p className={'font-roboto text-black text-xl leading-normal'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                    <ButtonTertiary text={"See More"}/>
                </div>
            </div>
            <div className={'w-3/4 absolute -right-[15vw]'}>
                <CarouselSlider />
            </div>
            <SquareImage className="absolute left-[-30px] top-[20%]" />
        </section>
    );
}

export default TopProducts;