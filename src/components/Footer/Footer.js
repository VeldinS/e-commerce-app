import React from 'react';
import Image from 'next/image'

import footerImage1 from '../../assets/footer/footerImg1.png';
import footerImage2 from '../../assets/footer/footerImg2.png';
import footerImage3 from '../../assets/footer/footerImg3.png';
import footerImage4 from '../../assets/footer/footerImg4.png';
import footerImage5 from '../../assets/footer/footerImg5.png';
import Navlink from "@/components/Navlink/Navlink";
import Link from "next/link";

function Footer() {
    return (
        <section className={'relative'}>
            <div className={'h-[30vh] grid grid-cols-5 w-full overflow-hidden'}>
                <Image src={footerImage1} alt={'Footer image.'} className={'h-full w-full'} />
                <Image src={footerImage2} alt={'Footer image.'} className={'h-full w-full'} />
                <Image src={footerImage3} alt={'Footer image.'} className={'h-full w-full'} />
                <Image src={footerImage4} alt={'Footer image.'} className={'h-full w-full'} />
                <Image src={footerImage5} alt={'Footer image.'} className={'h-full w-full'} />
            </div>
            <div className={'h-[30vh] w-full py-8 flex flex-col justify-end items-center gap-8 bg-black'}>
                <div className={'flex flex-row justify-center items-center gap-8'}>
                    <Navlink href={'/'} text={'CATEGORY 1'} color={'text-white'} bgColor={'bg-white'} />
                    <Navlink href={'/'} text={'CATEGORY 2'} color={'text-white'} bgColor={'bg-white'} />
                    <Navlink href={'/'} text={'CATEGORY 3'} color={'text-white'} bgColor={'bg-white'} />
                    <Navlink href={'/'} text={'CATEGORY 4'} color={'text-white'} bgColor={'bg-white'} />
                </div>
                <p className={'font-audiowide'}>Copyright - All Rights Reserved</p>
            </div>
            <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white flex justify-center items-center gap-8 p-8'}>
                <Link href={'/instagram'} className={'text-black text-xl font-audiowide'}>
                    Follow us on Instagram @
                </Link>
            </div>
        </section>
    );
}

export default Footer;