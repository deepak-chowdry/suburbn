import React from 'react'
import Products from '@/lib/Products'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {

    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen px-3 py-4'>
                <h1 className='mb-6 uppercase'>Welcome to <span className='font-bold'>Suburbn</span> Store</h1>
                <div className="grid grid-cols-2">
                    <div className="col-span-2 grid grid-cols-2 md:col-span-3 md:grid-cols-3 lg:col-span-4 lg:grid-cols-4">
                        {Products.map((product) => (
                            <Link href={`/product/${product.id}`} key={product.id} className="w-full h-auto min-h-0 border border-zinc-200 p-2 group cursor-pointer">
                                <Image
                                    src={product.image}
                                    width={1000}
                                    height={1000}
                                    alt={product.name}
                                    className="w-full h-auto object-cover md:group-hover:scale-105 transition-all"
                                />
                                <div className='flex items-end justify-between mt-2'>
                                    <div className='space-y-1 text-center'>
                                        <p className="text-center text-xs md:text-base">{product.name}</p>
                                        <p className="text-xs text-zinc-500">Rs. {product.price}.00</p>
                                    </div>
                                  
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

