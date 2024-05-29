'use client'
import {useEffect, useState} from "react";
import {fetchProductById} from "@/lib/actions";

const ProductDetailPage = ({params}) => {
    const productId = params.id;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchProductById('productId', productId)
            .then(setProduct)
            .catch(err => {
                console.error("Error handling fetched products:", err);
            });
    }, []);

    return (
        <div>
            {product.map((product) => (
                <h1 key={product._id} className={'text-black'}>{product.name}</h1>
            ))}
        </div>
    );
}

export default ProductDetailPage;