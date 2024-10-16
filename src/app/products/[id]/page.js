'use client'

import Link from "next/link";

import {motion} from "framer-motion";

import Navbar from "@/components/Navbar/Navbar";
import ImageSlider from "@/components/Slider/ImageSlider";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import RevealComp from "@/components/Animations/reveal";

import {products} from "@/backend/Data";


function ProductDetailPage({ params }) {
    const productId = parseInt(params.id, 10);
    const findProductById = (id) => {
        for (const category in products) {
            const product = products[category].find((product) => product.id === id);
            if (product) {
                return product;
            }
        }
        return null;
    };

    const product = findProductById(productId);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <>
            <Navbar position={'absolute'} visibility={'flex'} buttonText={'CLOSE'} buttonLink={'/products'}/>
            <motion.section
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1.3}}
                className={'flex lg:flex-row flex-col bg-white w-screen lg:h-screen h-screen'}>
                <div style={{backgroundColor: product.color}} className={'lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center relative'}>
                    <ImageSlider image1={product.image} image2={product.image} image3={product.image} image4={product.image}/>
                </div>
                <div className={'bg-white lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col items-start md:justify-center justify-between md:px-8 px-4 lg:gap-28 gap-2 lg:py-0 py-4 overflow-hidden'}>
                    <div className={'flex flex-row w-full justify-between lg:hidden'}>
                        <RevealComp delay={'400ms'} duration={'300ms'} threshold={0} x={-10}>
                            <Link href={`/products/${productId - 1}`}
                                  className={'text-[#868686] font-audiowide text-lg tracking-[5px]'}
                            >
                                PREV
                            </Link>
                        </RevealComp>
                        <RevealComp delay={'400ms'} duration={'300ms'} threshold={0} x={10}>
                            <Link href={`/products/${productId+1}`}
                                  className={'text-[#868686] font-audiowide text-lg tracking-[5px]'}
                            >
                                NEXT
                            </Link>
                        </RevealComp>
                    </div>
                    <RevealComp delay={'200ms'} duration={'300ms'} threshold={0} x={-50}>
                        <Link href={`/products/${productId+1}`}
                              className={'text-[#868686] font-audiowide text-lg tracking-[5px] hidden lg:flex'}
                        >
                            NEXT
                        </Link>
                    </RevealComp>
                    <div className={'flex flex-col md:h-auto h-full items-start md:justify-center justify-around md:gap-10 gap-4'}>
                        <RevealComp delay={'1000ms'} duration={'300ms'} threshold={0} x={-100}>
                            <p className={'text-[#868686] font-roboto text-lg tracking-[2px]'}>
                                New Arrival Series
                            </p>
                        </RevealComp>
                        <div className={'flex flex-col items-start justify-center gap-6'}>
                            <RevealComp delay={'1200ms'} duration={'300ms'} threshold={0} x={-100}>
                                <h1 className={'text-black md:text-6xl text-4xl font-audiowide'}>
                                    {product.name}
                                </h1>
                            </RevealComp>
                            <RevealComp delay={'1400ms'} duration={'300ms'} threshold={0} x={-100}>
                                <p className={'text-black font-roboto text-md tracking-[2px] md:w-2/3 w-full'}>
                                    {product.description}
                                </p>
                            </RevealComp>
                            <div className={'flex flex-row items-start justify-center gap-6'}>
                                <RevealComp delay={'1600ms'} duration={'300ms'} threshold={0} x={-100}>
                                    <p className={'text-3xl font-audiowide text-gray-400 line-through'}>{product.oldPrice}</p>
                                </RevealComp>
                                <RevealComp delay={'1800ms'} duration={'300ms'} threshold={0} x={-100}>
                                    <p className={'text-3xl font-audiowide text-black'}>{product.price}</p>
                                </RevealComp>
                            </div>
                        </div>
                        <RevealComp delay={'2000ms'} duration={'300ms'} threshold={0} x={-100}>
                            <div className={'hidden md:flex'}>
                                <ButtonPrimary text={"Add to cart"} link={`https://evgoods.foxycart.com/cart?name=${product.name}&image=${product.previewImg}&price=${product.price}&code=${productId}`}/>
                            </div>
                        </RevealComp>
                        <div className={'flex md:hidden'}>
                            <ButtonPrimary text={"Add to cart"} link={`https://evgoods.foxycart.com/cart?name=${product.name}&image=${product.previewImg}&price=${product.price}&code=${productId}`}/>
                        </div>
                    </div>
                    <RevealComp delay={'600ms'} duration={'300ms'} threshold={0} x={-30}>
                        <Link href={`/products/${productId - 1}`}
                              className={'text-[#868686] font-audiowide text-lg tracking-[5px] hidden lg:flex'}
                        >
                            PREV
                        </Link>
                    </RevealComp>
                </div>
            </motion.section>
        </>
    );
}

export default ProductDetailPage;
