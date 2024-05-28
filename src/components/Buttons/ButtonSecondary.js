import React from 'react';
import Link from "next/link";

function ButtonSecondary(props) {
    return (
        <Link href={props.link} className={'bg-transparent text-black border-2 border-black font-audiowide py-2 px-8 hover:bg-black hover:text-white hover:border-black transition-all duration-500'}>
            {props.text}
        </Link>
    );
}

export default ButtonSecondary;