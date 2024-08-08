'use client'
import React, { useEffect, useRef } from 'react'
import { Poppins } from "next/font/google";
import gsap from "gsap";
import Link from 'next/link';

const popp = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '800']
});

const MenuBar = () => {
    const menuBtnRef = useRef(null);
    const menuRef = useRef(null);
    const path1 = useRef(null);
    const path2 = useRef(null);

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
                gsap.to(menuRef.current, {
                    height: 0,
                    display: 'none',
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.2,
                });

                isMenuOpen = false;
            } else {
                gsap.to(path1.current, {
                    attr: { d: "M 0 0 L 17 16" },
                });
                gsap.to(path2.current, {
                    attr: { d: "M 0 16 L 17 1" },
                });
                gsap.to(menuRef.current, {
                    height: '400px',
                    display: 'flex',
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.1,
                });

                isMenuOpen = true;
            }
        };

        const menuButton = menuBtnRef.current;
        menuButton.addEventListener('click', handleMenuClick);

        return () => {
            menuButton.removeEventListener('click', handleMenuClick);

        };
    }, []);
    return (
        <>
            <div
                id="menu"
                className="flex items-center justify-start rounded-full w-1/2"
            >
                <svg
                    ref={menuBtnRef}
                    width="22"
                    height="16"
                    id="menubtn"
                    stroke="#000"
                    className="cursor-pointer z-20"
                >
                    <path ref={path1} d="M 0 5 L 25 5" />
                    <path ref={path2} d="M 0 13 L 25 13" />
                </svg>
                <div ref={menuRef} className={`hidden items-center justify-center w-full absolute h-0 left-0 top-0 opacity-0 bg-zinc-100 shadow-sm z-10 ${popp.className}`}>
                    <div className='flex flex-col justify-end h-5/6 w-11/12'>
                        <div className='flex flex-col items-end text-5xl uppercase space-y-2 h-2/3 w-full'>
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

export default MenuBar