import React from "react";

import NewCollectionCard from "@/components/Cards/NewCollection Card/NewCollectionCard";
import SquareImage from "@/components/Squares/SquareImage";
import RevealComp from "@/components/Animations/reveal";

import product1 from "@/assets/productImages/product1Png.png";
import product2 from "@/assets/productImages/product3Png.png";
import product3 from "@/assets/productImages/product2Png.png";


function NewCollection() {
    return (
        <section className="h-auto bg-white flex flex-col items-center justify-center gap-8 py-12 md:py-24 overflow-hidden relative xl:px-36 lg:px-24 px-6">
            <RevealComp duration={'300ms'} threshold={1}>
                <h1 className="font-audiowide text-black text-center lg:text-7xl text-5xl">
                    New Collection
                </h1>
            </RevealComp>
            <RevealComp duration={'300ms'} threshold={1}>
                <p className="font-roboto text-black text-xl text-center leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis
                </p>
            </RevealComp>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                <RevealComp delay={'200ms'} duration={'300ms'} threshold={0.5} y={20}>
                    <NewCollectionCard
                        bgColor="bg-[#EAECF1]"
                        linkUrl={'/products'}
                        link="Category 1"
                        imageUrl={product1}
                    />
                </RevealComp>
                <RevealComp delay={'400ms'} duration={'300ms'} threshold={0.5} y={20}>
                    <NewCollectionCard
                        bgColor="bg-[#CEE3F7]"
                        linkUrl={'/products'}
                        link="Category 2"
                        imageUrl={product2}
                    />
                </RevealComp>
                <RevealComp delay={'600ms'} duration={'300ms'} threshold={0.5} y={20}>
                    <NewCollectionCard
                        bgColor="bg-[#FFD4D1]"
                        linkUrl={'/products'}
                        link="Category 3"
                        imageUrl={product3}
                    />
                </RevealComp>
            </div>
            <SquareImage className="absolute left-[-30px] bottom-[30%]" />
        </section>
    );
}

export default NewCollection;
