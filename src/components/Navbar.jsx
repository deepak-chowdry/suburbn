'use client'
import Image from 'next/image';
import Link from 'next/link';
import Menubar from './Menubar';
import Searchbox from './Searchbox';
import { Poppins } from 'next/font/google';
const popp = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ] });

const Navbar = () => {

  return (
    <>
    <div className='flex items-center justify-center h-10 bg-zinc-900 text-zinc-100'>
      <p className='uppercase text-s tracking-wide font-medium'>Welcome to Suburbn.</p>
    </div>
      <div className='flex items-center justify-center h-20 sticky top-0 z-20 bg-zinc-50'>
        <div className='flex items-center justify-between w-93 md:w-90'>
          <Menubar />
          <h2 className={`text-lg uppercase font-black ${popp.className}`}>Suburb<span className='italic'>n</span>.</h2>
          <div className='flex items-center justify-end w-1/2 space-x-5'>
            <Searchbox />
            <Link href={'/cart'} className='flex items-center relative'>
              <Image id="cart-icon" src={'/bag.svg'} width={30} height={30} alt='bag' priority />
              <span id='plusone' className='opacity-0 absolute text-[12px] -right-2.5 top-1'>+1</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar