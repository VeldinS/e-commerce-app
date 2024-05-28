import React from 'react';
import Link from "next/link";

function ButtonPrimary(props) {
    return (
        <Link href={props.link} className={'bg-black text-white border border-black font-audiowide py-4 md:px-16 px-10 hover:bg-transparent hover:text-black transition-all duration-500'}>
            {props.text}
        </Link>
    );
}

export default ButtonPrimary;