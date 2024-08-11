'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { Poppins } from 'next/font/google';

const popp = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400'] });

const Menubar = () => {
    const path1 = useRef();
    const path2 = useRef();
    const menuBtn = useRef();
    const menu = useRef()

    let isMenuOpen = false;

    useEffect(() => {
        const handleMenuClick = () => {
            if (isMenuOpen) {
                gsap.to(path1.current, {
                    attr: { d: "M 0 5 L 25 5" },
                });
                gsap.to(path2.current, {
                    attr: { d: "M 0 13 L 25 13" },
                });
                gsap.to(menu.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.5,
                });

                isMenuOpen = false;
            } else {
                gsap.to(path1.current, {
                    attr: { d: "M 0 0 L 17 16" },
                });
                gsap.to(path2.current, {
                    attr: { d: "M 0 16 L 17 1" },
                });
                gsap.to(menu.current, {
                    height: '400px',
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.1,
                });

                isMenuOpen = true;
            }
        };

        const menuButton = menuBtn.current
        menuButton.addEventListener('click', handleMenuClick);

        return () => {
            menuButton.removeEventListener('click', handleMenuClick);
        }
    }, []);
    return (
        <>
            <div className="flex items-center justify-start rounded-full w-1/2">
                <svg
                    ref={menuBtn}
                    width="22"
                    height="16"
                    id="menubtn"
                    stroke="#000"
                    className="cursor-pointer z-50"
                >
                    <path ref={path1} d="M 0 5 L 25 5" />
                    <path ref={path2} d="M 0 13 L 25 13" />
                </svg>
                <div ref={menu} className='flex items-center justify-center w-full absolute h-0 overflow-hidden left-0 top-0 bg-zinc-100 shadow-sm'>
                    <div className='flex flex-col justify-end h-5/6 w-11/12'>
                        <div className={`flex flex-col items-end text-5xl uppercase space-y-2 h-2/3 w-full font-extralight ${popp.className}`}>
                            <Link href={'/store'}>Store</Link>
                            <Link href={'/'}>Contact</Link>
                            <Link href={'/'}>Sign In</Link>
                        </div>
                        <div>
                            <h3>INR ₹ | India</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Menubar