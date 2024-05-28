import React from 'react';
import Landing from "@/components/Pages/Home-page/Sections/Landing";
import Navbar from "@/components/Navbar/Navbar";
import NewCollection from "@/components/Pages/Home-page/Sections/NewCollection";
import BestSell from "@/components/Pages/Home-page/Sections/BestSell";
import TopProducts from "@/components/Pages/Home-page/Sections/TopProducts";
import ProductsCategories from "@/components/Pages/Home-page/Sections/ProductsCategories";
import SellOfDay from "@/components/Pages/Home-page/Sections/SellOfDay";
import Footer from "@/components/Footer/Footer";

function Home() {
    return (
        <div className={'flex w-full flex-col justify-stretch items-stretch gap-16'}>
            <Navbar position={'absolute'}/>
            <Landing />
            <NewCollection />
            <BestSell />
            <TopProducts />
            <ProductsCategories />
            <SellOfDay />
            <Footer />
        </div>
    );
}

export default Home;