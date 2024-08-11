import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Poppins } from 'next/font/google';
const popp = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });



const Footer = () => {
    return (
        <>
            <div className='flex items-center justify-center h-80 md:h-52 bg-stone-950 text-white'>
                <div className='flex flex-col md:flex-row justify-between h-4/6 w-11/12 gap-6'>
                    <div className='flex flex-col md:w-1/4 space-y-4'>
                        <h2 className={`text-lg tracking-wide uppercase font-black ${popp.className}`}>Suburb<span className='italic font-bold'>n</span>.</h2>

                        <p className='italic text-sm md:text-sm text-white'>The relationship between an artist and collector should be just that... a relationship.</p>
                    </div>
                    <div className='flex flex-col gap-8 h-fit'>
                        <div className='flex md:items-center gap-5 md:flex-row flex-col'>
                            <h3 className='font-medium'>Follow us</h3>
                            <div className='flex items-start gap-4 text-xs md:text-sm'>
                                <Link href={'/'} className='flex items-center gap-1'>
                                    <FaInstagram /> Instagram
                                </Link>
                                <Link href={'/'} className='flex items-center gap-1'>
                                    <FaYoutube /> Youtube
                                </Link>
                                <Link href={'/'} className='flex items-center gap-1'>
                                    <FaXTwitter /> Twitter
                                </Link>
                                <Link href={'/'} className='flex items-center gap-1'>
                                    <IoIosMail /> Contact
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className='text-xs md:text-sm'>@2024, Suburbn All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer