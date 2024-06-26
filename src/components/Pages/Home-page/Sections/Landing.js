'use client'

import React from "react";
import Image from "next/image";

import {motion} from "framer-motion";

import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import SquareImage from "@/components/Squares/SquareImage";
import RevealComp from "@/components/Animations/reveal";

import product3 from "@/assets/productImages/product1Png.png";


function Landing() {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
            className="h-screen bg-beige flex flex-col md:flex-row md:justify-between justify-center items-center md:gap-0 gap-8 md:p-0 p-16 overflow-hidden relative xl:px-36 lg:px-24 md:px-18 px-6">
                <div className="md:w-1/2 w-full flex flex-col md:items-start items-center justify-center md:gap-16 gap-8">
                    <RevealComp delay={'200ms'} duration={'300ms'} threshold={0.3} x={-30}>
                        <div className="flex flex-col md:items-start items-center justify-center gap-2">
                            <h1 className="font-audiowide text-black text-center md:text-start leading-normal xl:text-5xl md:text-4xl text-3xl">
                                The Best Store To
                                <br/>
                                Shop Online
                            </h1>
                            <h1 className="font-audiowide text-black xl:text-4xl md:text-3xl text-2xl">
                                ALL IN ONE
                            </h1>
                        </div>
                    </RevealComp>
                    <div
                        className="md:w-4/5 w-full flex flex-col md:items-start items-center justify-center md:gap-12 gap-4">
                        <RevealComp delay={'400ms'} duration={'300ms'} threshold={0.2} x={-30}>
                            <p className="md:flex hidden font-roboto text-black md:text-xl text-lg text-center md:text-start leading-normal">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </p>
                        </RevealComp>
                        <RevealComp delay={'600ms'} duration={'300ms'} threshold={0.1} x={-30}>
                            <ButtonPrimary text="SHOP NOW" link={'/products'}/>
                        </RevealComp>
                    </div>
                </div>
                <div
                    className="md:w-1/2 w-full lg:h-3/4 h-1/2 bg-blue-100 relative lg:rounded-bl-[256px] rounded-bl-[128px]">
                    <Image
                        src={product3}
                        alt="Product example text."
                        className="object-center scale-[0.6]"
                        fill
                        priority={true}
                    />
                    <SquareImage className="absolute left-[-30px] top-[20%] md:flex hidden" />
                    <SquareImage className="absolute right-[-30px] top-0 md:flex hidden" />
                </div>
            <SquareImage className="absolute left-[-30px] top-[20%]" />
            <SquareImage className="absolute left-[-30px] bottom-[20%]" />
            <SquareImage className="absolute right-[-30px] top-[40%]" />
            <SquareImage className="absolute right-[-30px] bottom-[10%]" />
        </motion.section>
    );
}

export default Landing;
