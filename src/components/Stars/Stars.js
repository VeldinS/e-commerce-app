import React from 'react';
import Image from "next/image";
import stars0_5 from "@/assets/stars/stars0_5.svg";
import stars1 from "@/assets/stars/stars1.svg";
import stars1_5 from "@/assets/stars/stars1_5.svg";
import stars2 from "@/assets/stars/stars2.svg";
import stars2_5 from "@/assets/stars/stars2_5.svg";
import stars3 from "@/assets/stars/stars3.svg";
import stars3_5 from "@/assets/stars/stars3_5.svg";
import stars4 from "@/assets/stars/stars4.svg";
import stars4_5 from "@/assets/stars/stars4_5.svg";
import stars5 from "@/assets/stars/stars5.svg";

function Stars({product}) {
    return (
        <div>
            {product.rating >= 0 && product.rating <= 0.5 && (
                <Image src={stars0_5} alt={'Rating 0.5'}/>
            )}
            {product.rating > 0.5 && product.rating <= 1 && (
                <Image src={stars1} alt={'Rating 1'}/>
            )}
            {product.rating > 1 && product.rating <= 1.5 && (
                <Image src={stars1_5} alt={'Rating 1.5'}/>
            )}
            {product.rating > 1.5 && product.rating <= 2 && (
                <Image src={stars2} alt={'Rating 2'}/>
            )}
            {product.rating > 2 && product.rating <= 2.5 && (
                <Image src={stars2_5} alt={'Rating 2.5'}/>
            )}
            {product.rating > 2.5 && product.rating <= 3 && (
                <Image src={stars3} alt={'Rating 3'}/>
            )}
            {product.rating > 3 && product.rating <= 3.5 && (
                <Image src={stars3_5} alt={'Rating 3.5'}/>
            )}
            {product.rating > 3.5 && product.rating <= 4 && (
                <Image src={stars4} alt={'Rating 4'}/>
            )}
            {product.rating > 4 && product.rating <= 4.5 && (
                <Image src={stars4_5} alt={'Rating 4.5'}/>
            )}
            {product.rating > 4.5 && product.rating <= 5 && (
                <Image src={stars5} alt={'Rating 5'}/>
            )}
        </div>
    );
}

export default Stars;