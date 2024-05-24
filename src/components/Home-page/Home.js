import React from 'react';
import Landing from "@/components/Home-page/Landing";
import Navbar from "@/components/Navbar/Navbar";
import NewCollection from "@/components/Home-page/NewCollection";
import BestSell from "@/components/Home-page/BestSell";

function Home() {
    return (
        <>
            <Navbar />
            <Landing />
            <NewCollection />
            <BestSell />
        </>
    );
}

export default Home;