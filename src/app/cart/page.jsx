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
                    <div className="space-y-4 h-full">
                        {Object.keys(cart).map(key => (
                            <div key={key} className="flex items-center space-x-4 h-full shadow p-1">
                                <Image src={cart[key].image} width={1000} height={1000} alt={cart[key].name} className='w-1/3' priority />
                                <div className='w-3/5 h-28'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-lg font-bold uppercase">{cart[key].name}</h2>
                                        <AiOutlineDelete
                                            onClick={() => removeFromCart(key, 1, cart[key].name, cart[key].price, cart[key].image)}
                                            className='text-xl text-red-600' />
                                    </div>
                                    <p className="text-zinc-700">Price: {cart[key].price}</p>
                                    <p className="text-zinc-700">Quantity: {cart[key].qty}</p>

                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col space-y-2">
                            <h2 className="text-xl">Total: Rs. {total}</h2>
                            <button
                                className="w-full h-14 bg-stone-950 text-white">
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default CartPage;
