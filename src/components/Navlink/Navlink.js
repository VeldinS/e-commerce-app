import React from 'react';
import Link from "next/link";
import './navlink.css';

function Navlink(props) {
    return (
        <Link href={props.href} className={`navlink-wrapper font-audiowide text-sm-4 leading-normal uppercase ${props.color}`}>
            <p>{props.text}</p>
            <div className={`navlink-line w-0 h-1 transition-width duration-300 ${props.bgColor}`}></div>
        </Link>

    );
}

export default Navlink;