'use client'

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import ButtonSecondary from "@/components/Buttons/ButtonSecondary";
import Navlink from "@/components/Navlink/Navlink";

import logo from '../../assets/logo/logo.svg';

function Navbar({position, visibility, buttonText, buttonLink}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${position} flex flex-row justify-between items-center px-4 lg:px-24 pt-4 pb-4 bg-light-gray top-0 w-full z-50 overflow-hidden`}>
            <Link href={'/'} className={'lg:w-[200px] w-auto'}>
                <Image src={logo} alt={'Logo'} priority={true}/>
            </Link>
            <div className={`hidden lg:${visibility} flex-row justify-center items-center gap-8`}> {/* Hide on small screens */}
                <Navlink href={'/products'} text={'CATEGORY 1'} color={'text-black'} bgColor={'bg-black'} />
                <Navlink href={'/products'} text={'CATEGORY 2'} color={'text-black'} bgColor={'bg-black'} />
                <Navlink href={'/products'} text={'CATEGORY 3'} color={'text-black'} bgColor={'bg-black'} />
                <Navlink href={'/products'} text={'CATEGORY 4'} color={'text-black'} bgColor={'bg-black'} />
            </div>
            <ButtonSecondary text={buttonText} link={buttonLink} />
        </nav>
    );
}

export default Navbar;