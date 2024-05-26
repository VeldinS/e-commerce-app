import React from "react";

import NewCollectionCard from "@/components/Cards/NewCollection Card/NewCollectionCard";
import product1 from "@/assets/product1Png.png";
import product2 from "@/assets/product2Png.png";
import product3 from "@/assets/product3Png.png";
import SquareImage from "@/components/Squares/SquareImage";

function NewCollection() {
    return (
        <section className="h-auto bg-white flex flex-col items-center justify-center gap-8 py-12 md:py-24 overflow-hidden relative xl:px-36 lg:px-24 px-10">
            <h1 className="font-audiowide text-black text-center lg:text-7xl text-5xl">
                New Collection
            </h1>
            <p className="font-roboto text-black text-xl text-center leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis
            </p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                <NewCollectionCard
                    bgColor="bg-[#EAECF1]"
                    link="Category 1"
                    imageUrl={product1}
                />
                <NewCollectionCard
                    bgColor="bg-[#CEE3F7]"
                    link="Category 2"
                    imageUrl={product2}
                />
                <NewCollectionCard
                    bgColor="bg-[#FFD4D1]"
                    link="Category 3"
                    imageUrl={product3}
                />
            </div>
            <SquareImage className="absolute left-[-30px] bottom-[30%]" />
        </section>
    );
}

export default NewCollection;
