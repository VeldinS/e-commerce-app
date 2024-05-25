import React from 'react';
import NewCollectionCard from "@/components/Cards/NewCollection Card/NewCollectionCard";

import product1 from '../../../../assets/product1Png.png';
import product2 from '../../../../assets/product2Png.png';
import product3 from '../../../../assets/product3Png.png';
import SquareImage from "@/components/Squares/SquareImage";

function NewCollection() {
    return (
        <section className={'h-auto py-24 bg-white px-36 flex relative flex-col justify-center items-center gap-8'}>
            <h1 className={'font-audiowide text-7xl text-black'}>
                New Collection
            </h1>
            <p className={'font-roboto text-black text-xl leading-normal'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi convallis
            </p>
            <div className={'grid grid-cols-3 gap-6 w-full'}>
                <NewCollectionCard bgColor={'bg-[#EAECF1]'} link={'Category 1'} imageUrl={product1}/>
                <NewCollectionCard bgColor={'bg-[#CEE3F7]'} link={'Category 2'} imageUrl={product2}/>
                <NewCollectionCard bgColor={'bg-[#FFD4D1]'} link={'Category 3'} imageUrl={product3}/>
            </div>
            <SquareImage className="absolute left-[-30px] bottom-[30%]" />
        </section>
    );
}

export default NewCollection;