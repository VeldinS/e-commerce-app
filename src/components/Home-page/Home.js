import React from 'react';
import Landing from "@/components/Home-page/Landing";
import Navbar from "@/components/Navbar/Navbar";
import NewCollection from "@/components/Home-page/NewCollection";

function Home() {
    return (
        <>
            <Navbar />
            <Landing />
            <NewCollection />

        </>
    );
}

export default Home;