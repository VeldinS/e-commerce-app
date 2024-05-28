import React from 'react';
import Link from "next/link";

function ButtonSecondary(props) {
    return (
        <Link href={props.link} className={'bg-transparent text-black border border-black font-audiowide py-3 px-10 hover:bg-black hover:text-white hover:border-black transition-all duration-500'}>
            {props.text}
        </Link>
    );
}

export default ButtonSecondary;