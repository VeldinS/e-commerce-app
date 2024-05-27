import React from "react";
import Image from "next/image";

import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import SquareImage from "@/components/Squares/SquareImage";
import product3 from "@/assets/product3.png";

function Landing() {
    return (
        <section className="h-screen bg-light-gray flex flex-col md:flex-row md:justify-between justify-center items-center md:gap-0 gap-8 p-16 overflow-hidden relative xl:px-36 lg:px-24 px-6">

            {/* Text Content */}
            <div className="md:w-1/2 w-full flex flex-col md:items-start items-center justify-center md:gap-16 gap-8">
                <div className="flex flex-col md:items-start items-center justify-center gap-2">
                    <h1 className="font-audiowide text-black text-center md:text-start leading-normal xl:text-5xl md:text-4xl text-3xl">
                        The Best Store To
                        <br />
                        Shop Online
                    </h1>
                    <h1 className="font-audiowide text-black xl:text-4xl md:text-3xl text-2xl">
                        ALL IN ONE
                    </h1>
                </div>
                <div className="md:w-4/5 w-full md:flex flex-col md:items-start items-center justify-center md:gap-12 gap-4 hidden">
                    <p className="font-roboto text-black md:text-xl text-lg text-center md:text-start leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <ButtonPrimary text="SHOP NOW" />
                </div>
            </div>

            {/* Image Container */}
            <div className="md:w-1/2 w-full lg:h-3/4 h-1/2 bg-[#FFBBB8] relative lg:rounded-bl-[256px] rounded-bl-[128px]">
                <Image
                    src={product3}
                    alt="Product example text."
                    fill
                    className="object-cover object-center lg:scale-100 md:scale-75 scale-75 rounded-bl-[256px]"
                />
                {/* Square Image Overlays (Inside Container) */}
                <SquareImage className="absolute left-[-30px] top-[20%] md:flex hidden" />
                <SquareImage className="absolute right-[-30px] top-0 md:flex hidden" />
            </div>

            {/* Square Image Overlays (Outside Container) */}
            <SquareImage className="absolute left-[-30px] top-[20%]" />
            <SquareImage className="absolute left-[-30px] bottom-[20%]" />
            <SquareImage className="absolute right-[-30px] top-[40%]" />
            <SquareImage className="absolute right-[-30px] bottom-[10%]" />
        </section>
    );
}

export default Landing;
