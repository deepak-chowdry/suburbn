'use client'
import useCart from '@/lib/CartState';
import Products from '@/lib/Products';
import Image from 'next/image';
import { GoPlusCircle } from "react-icons/go";

const page = ({ params }) => {
    const { addToCart } = useCart();
    const product = Products.find(p => p.id === params.id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(product.id, product.name, product.image, 1, product.price);
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-full py-6 px-3">
            <div className="w-full md:w-11/12">
                <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-1 md:gap-4 md:h-[550px] md:shadow-sm">
                    <div className="w-full h-full md:w-1/3 relative mb-2 md:mb-0">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={1000}
                            height={1000}
                            className='w-full h-full'
                            priority
                        />
                    </div>
                    <div className="w-full md:w-2/5 space-y-3 md:py-28 h-full">
                        <div className='flex items-center justify-between pr-2'>
                            <h1 className="text-xl font-bold uppercase">{product.name}</h1>
                            <GoPlusCircle className='text-lg' />
                        </div>
                        <p className="text-base text-gray-500">Rs. {product.price}.00</p>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur elit.
                        </p>
                        <button
                            onClick={handleAddToCart}
                            className="w-full h-14 bg-stone-950 text-white">
                            Pre-order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
