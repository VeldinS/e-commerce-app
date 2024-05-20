import React from 'react';
import { Audiowide } from 'next/font/google';
const audiowide = Audiowide({ subsets: ['latin'] });


function Landing() {
    return (
        <section className={"h-screen bg-light-gray px-40 flex items-center"}>
            <h1 className={"text-black audiowide.400"}>The Best Store To
                Shop Online
                ALL IN ONE</h1>
        </section>
    );
}

export default Landing;