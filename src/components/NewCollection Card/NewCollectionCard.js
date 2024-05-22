import './newCollectionCard.css'
import React from 'react';
import Link from "next/link";
import Image from 'next/image';

function NewCollectionCard({ bgColor, link, imageUrl }) {
    return (
        <div className={`relative w-full h-96 flex flex-col justify-end items-center p-4 shadow-right-bottom ${bgColor}`}>
            <Link href={`${link}`} className={'bg-white w-5/6 py-2 font-audiowide text-black  text-center text-2xl uppercase z-10 relative'}>
                {link}
            </Link>
            <div className="absolute bottom-50 w-full h-5/6 overflow-hidden z-0">
                <Image
                    src={imageUrl}
                    alt={link}
                    layout="fill"
                    objectFit="contain"
                    className={'rounded-lg scale-75'}
                />
            </div>
        </div>
    );
}

export default NewCollectionCard;
