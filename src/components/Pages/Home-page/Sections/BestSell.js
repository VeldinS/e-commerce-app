import React from "react";
import Image from "next/image";

import product4 from "@/assets/product4.png";
import SquareImage from "@/components/Squares/SquareImage";

function BestSell() {
    return (
        <section className="h-screen bg-white flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-16 py-8 lg:py-16 overflow-hidden relative xl:px-56 lg:px-24 px-10">
            {/* Image Container */}
            <div className="lg:w-1/2 w-full lg:h-4/5 h-1/2 bg-[#F4FFBB] relative shadow-2xl overflow-hidden lg:rounded-tl-[256px]">
                <Image
                    src={product4}
                    alt="Product example text."
                    fill
                    className="object-cover object-center rounded-bl-[256px] lg:scale-100 md:scale-75 scale-75"
                />
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 w-full lg:h-4/5 h-1/2 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4">
                <h1 className="font-audiowide text-black text-7xl leading-tight">
                    Best Sell <br /> Since 2021
                </h1>
                <p className="font-roboto text-black text-xl leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            {/* Timeline */}
            <div className="bg-[#EEE5E5] flex flex-row gap-8 justify-between lg:justify-center items-center py-10 px-10 w-full lg:w-auto lg:absolute lg:-bottom-10 lg:-left-1/3 relative">
                {[
                    { year: 2019, text: "All founded" },
                    { year: 9090, text: "Products Sold" },
                    { year: 2023, text: "Best Reviews" },
                ].map(({ year, text }) => (
                    <React.Fragment key={year}>
                        <div className="flex flex-col items-center">
                            <p className="font-audiowide text-black text-4xl">{year}</p>
                            <p className="font-audiowide text-black text-xl">{text}</p>
                        </div>
                        <div className="w-px h-20 bg-black"></div>
                    </React.Fragment>
                ))}
            </div>

            {/* Square Images */}
            <SquareImage className="absolute left-[-30px] bottom-[20%]" />
            <SquareImage className="absolute right-[-30px] top-[10%]" />
            <SquareImage className="absolute right-[-30px] bottom-[10%]" />
        </section>
    );
}

export default BestSell;
