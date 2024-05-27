'use client'

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import ButtonSecondary from "@/components/Buttons/ButtonSecondary";
import Navlink from "@/components/Navlink/Navlink";

import logo from '../../assets/logo/logo.svg';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={'flex flex-row justify-between items-center px-4 lg:px-48 pt-4 pb-4 bg-light-gray absolute top-0 w-full z-50 overflow-hidden'}>
            <Link href={'/'}>
                <Image src={logo} alt={'Logo'}/>
            </Link>
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}> {/* Conditionally render menu on small screens */}
                <div className="flex flex-col gap-4 mt-4">
                    <Navlink href={'/'} text={'CATEGORY 1'} color={'text-black'} bgColor={'bg-black'} />
                    <Navlink href={'/'} text={'CATEGORY 2'} color={'text-black'} bgColor={'bg-black'} />
                    <Navlink href={'/'} text={'CATEGORY 3'} color={'text-black'} bgColor={'bg-black'} />
                    <Navlink href={'/'} text={'CATEGORY 4'} color={'text-black'} bgColor={'bg-black'} />
                </div>
            </div>
            <div className="hidden lg:flex flex-row justify-center items-center gap-8"> {/* Hide on small screens */}
                <Navlink href={'/'} text={'CATEGORY 1'} color={'text-black'} bgColor={'bg-black'} />
                <Navlink href={'/'} text={'CATEGORY 2'} color={'text-black'} bgColor={'bg-black'} />
                <Navlink href={'/'} text={'CATEGORY 3'} color={'text-black'} bgColor={'bg-black'} />
                <Navlink href={'/'} text={'CATEGORY 4'} color={'text-black'} bgColor={'bg-black'} />
            </div>
            <ButtonSecondary text={"PRODUCTS"} />
            <div className="lg:hidden w-[51px] flex items-end justify-end"> {/* Conditionally render hamburger icon on small screens */}
                <button onClick={toggleMenu}>
                    {isMenuOpen ? <XIcon className="h-7 w-7 text-black" /> : <MenuIcon className="h-7 w-7 text-black" />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
