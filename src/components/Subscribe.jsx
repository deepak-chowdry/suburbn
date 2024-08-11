import Image from 'next/image'
import React from 'react'

const Subscribe = () => {
    return (
        <>
            <div className='flex flex-col space-y-3 items-center justify-center h-80 px-3'>
                <div className='text-center space-y-1 w-10/12'>
                    <h3 className='text-lg uppercase font-bold'>Subscribe Us</h3>
                    <p className='text-xs text-zinc-500'>Be the first to know about new collections and exclusive offers.</p>
                </div>
                <div className='flex items-center justify-between border border-zinc-300 px-5 hover:border-zinc-500 w-full md:w-96 h-16 group'>
                    <div className='flex flex-col gap-1 transition-all'>
                        <p className='sm:hidden flex group-hover:text-xs transition-all'>Email</p>
                        <input type="text" className='bg-transparent outline-none border-none hidden group-hover:block md:block text-sm' placeholder='email'/>
                    </div>
                    <Image src={'/Img/arrow-right.svg'} width={16} height={16} alt='' />
                </div>
            </div>
        </>
    )
}

export default Subscribe