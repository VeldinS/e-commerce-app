'use client'
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import {fetchProductById} from "@/app/api/products/route";

function ProductDetailPage({ params }) {
    const productId = params.id;
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProductById('productId', productId)
            .then((data) => {
                setProductData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error handling fetched products:", err);
                setLoading(false);
            });
    }, [productId]);

    return (
        <>
            <Navbar position={'absolute'} visibility={'hidden'} buttonText={'CLOSE'} buttonLink={'/products'} />
            {loading ? (
                <div>Loading...</div>
            ) : (
                productData.length > 0 ? (
                    <section key={productData[0]._id} className={'flex flex-row bg-white w-screen h-screen'}>
                        <div style={{ backgroundColor: productData[0].color }} className={'w-1/2 h-full flex justify-center items-center relative'}>
                            <Image src={productData[0].previewImg} alt={productData[0].name} fill className={'scale-50'} />
                        </div>
                        <div className={'bg-white w-1/2 h-full flex flex-col items-center justify-start px-4'}>
                            {/* Render other product details here */}
                        </div>
                    </section>
                ) : (
                    <div>No product data available.</div>
                )
            )}
        </>
    );
}

export default ProductDetailPage;
