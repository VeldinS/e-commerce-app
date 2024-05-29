import {products} from "@/backend/Data";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import ImageSlider from "@/components/Slider/ImageSlider";
import Link from "next/link";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
function ProductDetailPage({ params }) {
    const productId = parseInt(params.id, 10);
// Function to find the product by id
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
        return <div>Product not found</div>;
    }

    return (
        <>
            <Navbar position={'absolute'} visibility={'hidden'} buttonText={'CLOSE'} buttonLink={'/products'}/>
            <section className={'flex flex-row bg-white w-screen h-screen'}>
                <div style={{backgroundColor: product.color}} className={'w-1/2 h-full flex justify-center items-center relative'}>
                    <ImageSlider image1={product.image} image2={product.image} image3={product.image} image4={product.image}/>
                </div>
                <div className={'bg-white w-1/2 h-full flex flex-col items-start justify-center pl-8 gap-28'}>
                    <Link href={`/products/${productId+1}`}
                          className={'text-[#868686] font-audiowide text-lg tracking-[5px]'}
                    >
                        NEXT
                    </Link>
                    <div className={'flex flex-col items-start justify-center gap-10'}>
                        <p className={'text-[#868686] font-roboto text-lg tracking-[2px]'}>
                            New Arrival Series
                        </p>
                        <div className={'flex flex-col items-start justify-center gap-6'}>
                            <h1 className={'text-black text-6xl font-audiowide'}>
                                {product.name}
                            </h1>
                            <p className={'text-black font-roboto text-md tracking-[2px] w-2/3'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci quis mi
                                convallis
                            </p>
                            <div className={'flex flex-row items-start justify-center gap-6'}>
                                <p className={'text-3xl font-audiowide text-gray-400 line-through'}>{product.oldPrice}</p>
                                <p className={'text-3xl font-audiowide text-black'}>{product.price}</p>
                            </div>
                        </div>
                        <ButtonPrimary text={"Add to cart"} link={"/products"}/>
                    </div>
                    <Link href={`/products/${productId - 1}`}
                          className={'text-[#868686] font-audiowide text-lg tracking-[5px]'}
                    >
                        PREV
                    </Link>
                </div>
            </section>
        </>
    );
}

export default ProductDetailPage;
