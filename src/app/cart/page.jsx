'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useCart from '@/lib/CartState';
import { MdDelete } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        try {
            if (localStorage.getItem('cartTotal')) {
                setTotal(JSON.parse(localStorage.getItem('cartTotal')));
            }
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <div className="min-h-full py-10 px-4 flex items-center justify-center">
            <div className='w-full md:w-11/12 space-y-4'>
                <div className='flex items-center justify-between'>
                    <h1 className="text-2xl font-bold">Your Cart</h1>
                    <p
                        onClick={clearCart}
                        className="uppercase hover:border-b border-black cursor-pointer"
                    >Clear</p>
                </div>

                {Object.keys(cart).length === 0 ? (
                    <div className='flex items-center justify-center h-80'>
                        <p>Your cart is empty.</p>
                    </div>
                ) : (
                    <>
                        <div className="md:py-2 h-full flex items-center w-full flex-wrap gap-3 justify-center">
                            {Object.keys(cart).map(key => (
                                <div key={key} className="flex md:flex-col items-center space-x-2 h-fit md:h-full shadow p-1 md:w-30 w-full relative">
                                    <Image src={cart[key].image} width={1000} height={1000} alt={cart[key].name} className='w-1/2 h-40 md:h-80 md:object-cover' priority />
                                    <div className='w-full p-2'>
                                        <div className='flex flex-col md:flex-row justify-between'>
                                            <h2 className="font-bold uppercase">{cart[key].name}</h2>

                                            <p className="text-zinc-700 pr-1">Qty: {cart[key].qty}</p>
                                        </div>
                                        <p className="text-zinc-700">Price: {cart[key].price}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(key, 1, cart[key].name, cart[key].price, cart[key].image)}
                                        className="absolute bottom-2 md:top-3 right-2 md:left-3 py-2 px-3 flex items-center justify-center text-sm h-10 bg-zinc-50 rounded-full shadow w-fit">
                                        <AiOutlineDelete className='text-lg text-zinc-700' />
                                    </button>
                                </div>
                            ))}

                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2 className="text-xl">Total: Rs. {total}</h2>
                            <button
                                className="w-full md:w-40 h-14 bg-stone-950 text-white">
                                Checkout
                            </button>
                        </div>
                    </>

                )}
            </div>

        </div>
    );
};

export default CartPage;
