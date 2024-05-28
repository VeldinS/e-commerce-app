import React from 'react';
import {fetchProductById} from "@/lib/DummyData";

function ProductPage({params}) {

    const productId = params.id;
    const product =  fetchProductById(productId);

    if(!product) {
        return (
            <>
                <h1 className={'text-black'}>PRODUCT WITH THAT ID IS NOT FOUND!</h1>
            </>
        );
    }

    if(product){
        return (
            <>
                <h1 className={'text-black'}>{product.name}</h1>
            </>
        );
    }


}

export default ProductPage;