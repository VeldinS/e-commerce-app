import React from 'react';
import Link from "next/link";
import Image from "next/image";

import ButtonSecondary from "@/components/Buttons/ButtonSecondary";

import logo from '../../assets/logo/logo.svg';
import RevealComp from "@/components/Animations/reveal";

function Navbar({position, buttonText, buttonLink}) {

    return (
        <nav className={`${position} flex flex-row justify-between items-center px-4 lg:px-24 pt-4 pb-4 bg-light-gray top-0 w-full z-50 overflow-hidden`}>
            <RevealComp x={-30} threshold={0} duration={'300ms'}>
                <Link href={'/'} className={'lg:w-[200px] w-auto'}>
                    <Image src={logo} alt={'Logo'} width={'auto'} priority={true}/>
                </Link>
            </RevealComp>
            <RevealComp x={30} threshold={0} duration={'300ms'}>
                <ButtonSecondary text={buttonText} link={buttonLink} />
            </RevealComp>
        </nav>
    );
}

export default Navbar;