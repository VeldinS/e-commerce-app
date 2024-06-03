import React from 'react';

import Navbar from "@/components/Navbar/Navbar";
import {ProductList} from "@/components/Pages/Products-page/Product List/ProductList";
import Footer from "@/components/Footer/Footer";


function Products() {
    return (
        <>
            <Navbar position={'relative'} visibility={'flex'} buttonText={'CONTACT'} buttonLink={'/contact'}/>
            <ProductList />
            <Footer />
        </>
    );
}

export default Products;