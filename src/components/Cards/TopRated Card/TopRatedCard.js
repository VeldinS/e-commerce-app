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
        <div className={'w-[23vw] h-[60vh] bg-black flex flex-col justify-start items-start'}>
            <div className="w-full h-3/4 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    objectFit="cover"
                />
            </div>
            <div className="w-full h-1/4 px-8 flex flex-col justify-center items-start bg-white">
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
                <h1 className={'font-audiowide text-black text-3xl leading-normal'}>{name}</h1>
                <div className={'flex flex-row items-start justify-center gap-4'}>
                    <p className={'font-audiowide text-2xl text-gray-300 line-through'}>{oldPrice}</p>
                    <p className={'font-audiowide text-2xl text-black'}>{price}</p>
                </div>
            </div>
        </div>
    );
}

export default TopRatedCard;