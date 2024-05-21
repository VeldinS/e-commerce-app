import React from 'react';
import Link from "next/link";
import Image from "next/image";

import ButtonSecondary from "@/components/Buttons/ButtonSecondary";
import Navlink from "@/components/Navlink/Navlink";

import logo from '../../assets/logo.svg';


function Navbar() {
    return (
        <nav className={'flex flex-row justify-between items-center px-48 bg-light-gray fixed top-[32px] w-full z-50'}>
            <Link href={'/'}>
                <Image src={logo} alt={'Logo'} />
            </Link>
            <div className={'flex flex-row justify-center items-center gap-8'}>
                <Navlink href={'/'} text={'CATEGORY 1'} />
                <Navlink href={'/'} text={'CATEGORY 2'} />
                <Navlink href={'/'} text={'CATEGORY 3'} />
                <Navlink href={'/'} text={'CATEGORY 4'} />
            </div>
            <ButtonSecondary text={"Login"} />
        </nav>
    );
}

export default Navbar;