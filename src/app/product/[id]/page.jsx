'use client'
import Image from 'next/image';
import Products from '@/lib/Products';
import { GoPlusCircle } from "react-icons/go";
import React, { useContext } from 'react';
import useCart from '@/lib/CartState';

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
                <div className="flex flex-col md:flex-row items-center gap-1">
                    <div className="w-full md:w-1/2 relative mb-2 md:mb-0">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={1000}
                            height={1000}
                            className='w-full h-full'
                            priority
                        />
                    </div>
                    <div className="w-full md:w-1/3 md:pl-6 space-y-2">
                        <div className='flex items-center justify-between pr-2'>
                            <h1 className="text-xl font-bold uppercase">{product.name}</h1>
                            <GoPlusCircle className='text-lg' />
                        </div>
                        <p className="text-base text-gray-500">Rs. {product.price}.00</p>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button
                            onClick={handleAddToCart}
                            className="w-full h-14 bg-stone-950 text-white">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
