import React from 'react';
import Image from "next/image";

import stars5 from '../../../assets/stars/stars5.svg';
import stars4_5 from '../../../assets/stars/stars4_5.svg';
import stars4 from '../../../assets/stars/stars4.svg';
import stars3_5 from '../../../assets/stars/stars3_5.svg';
import stars3 from '../../../assets/stars/stars3.svg';
import stars2_5 from '../../../assets/stars/stars2_5.svg';
import stars2 from '../../../assets/stars/stars2.svg';
import stars1_5 from '../../../assets/stars/stars1_5.svg';
import stars1 from '../../../assets/stars/stars1.svg';
import stars0_5 from '../../../assets/stars/stars0_5.svg';


function TopRatedCard({image, rating, name, price, oldPrice}) {
    return (
        <div className={'w-auto mr-4 h-auto bg-black flex flex-col xl:justify-start justify-center xl:items-start items-center'}>
            <div className="aspect-square overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                />
            </div>
            <div className="w-full h-auto xl:px-8 px-2 xl:py-6 py-2 flex flex-col justify-center items-start bg-white">
                <div>
                    {rating >= 0 && rating <= 0.5 && (
                        <Image src={stars0_5} alt={'Rating 0.5'} />
                    )}
                    {rating > 0.5 && rating <= 1 && (
                        <Image src={stars1} alt={'Rating 1'} />
                    )}
                    {rating > 1 && rating <= 1.5 && (
                        <Image src={stars1_5} alt={'Rating 1.5'} />
                    )}
                    {rating > 1.5 && rating <= 2 && (
                        <Image src={stars2} alt={'Rating 2'} />
                    )}
                    {rating > 2 && rating <= 2.5 && (
                        <Image src={stars2_5} alt={'Rating 2.5'} />
                    )}
                    {rating > 2.5 && rating <= 3 && (
                        <Image src={stars3} alt={'Rating 3'} />
                    )}
                    {rating > 3 && rating <= 3.5 && (
                        <Image src={stars3_5} alt={'Rating 3.5'} />
                    )}
                    {rating > 3.5 && rating <= 4 && (
                        <Image src={stars4} alt={'Rating 4'} />
                    )}
                    {rating > 4 && rating <= 4.5 && (
                        <Image src={stars4_5} alt={'Rating 4.5'} />
                    )}
                    {rating > 4.5 && rating <= 5 && (
                        <Image src={stars5} alt={'Rating 5'} />
                    )}
                </div>
                <h1 className={'font-audiowide text-black xl:text-3xl text-lg leading-normal'}>{name}</h1>
                <div className={'flex md:flex-row flex-col items-start justify-center md:gap-4 gap:0'}>
                    <p className={'font-audiowide xl:text-2xl text-sm text-gray-300 line-through'}>{oldPrice}</p>
                    <p className={'font-audiowide xl:text-2xl text-sm text-black'}>{price}</p>
                </div>
            </div>
        </div>
    );
}

export default TopRatedCard;