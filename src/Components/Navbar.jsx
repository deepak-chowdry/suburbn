'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { Poppins } from "next/font/google";
import gsap from "gsap";
import Link from 'next/link';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const menuBtnRef = useRef(null);
    const menuRef = useRef(null);
    const path1 = useRef(null);
    const path2 = useRef(null);

    let isMenuOpen = false;
    const searchIcon = useRef(null);
    const searchBox = useRef(null);

    let isSearchOpen = false;

    useGSAP(() => {
        const handleMenuClick = () => {
            if (isMenuOpen) {
                gsap.to(path1.current, {
                    attr: { d: "M 0 5 L 25 5" },
                });
                gsap.to(path2.current, {
                    attr: { d: "M 0 13 L 25 13" },
                });
                gsap.to(menuRef.current, {
                    top: '-384px',
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
                    top: 0,
                    display: 'flex',
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.1,
                });

                isMenuOpen = true;
            }
        };
        const handleSearchClick = () => {
            if (isSearchOpen) {
                gsap.to(searchBox.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                });
                gsap.to('#menu', {
                    width: '50%',
                    duration: 0.8,
                })
                gsap.to('#menubtn', {
                    opacity: 1,
                    duration: 0.6,
                })
                gsap.to('#logo', {
                    width: 'auto',
                    duration: 0.7,
                })
                isSearchOpen = false;
            } else {
                gsap.to(searchBox.current, {
                    height: '340px',
                    opacity: 1,
                    duration: 0.5,
                });
                gsap.to('#menu', {
                    width: 0,
                    duration: 0.8,
                })
                gsap.to('#menubtn', {
                    opacity: 0,
                    duration: 0.6,
                })
                gsap.to('#logo', {
                    width: '50%',
                    duration: 0.7,
                })
                isSearchOpen = true;
            }
        };

        const searchButton = searchIcon.current;
        searchButton.addEventListener('click', handleSearchClick);


        const menuButton = menuBtnRef.current;
        menuButton.addEventListener('click', handleMenuClick);

        return () => {
            menuButton.removeEventListener('click', handleMenuClick);
            searchButton.removeEventListener('click', handleSearchClick);

        };
    }, []);
    return (
        <>
            <div className='flex items-center justify-center h-[76px] shadow-sm sticky top-0 bg-zinc-50'>
                <div className='flex items-center justify-between w-11/12'>
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
                        <div ref={menuRef} className={`hidden items-center justify-center w-full absolute h-96 left-0 -top-96 opacity-0 bg-zinc-100 shadow-sm z-10 ${popp.className}`}>
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
                    <div id="logo" className='w-auto'>
                        <Image src={'/Img/logo-black.svg'} width={100} height={100} alt='logo' priority className='w-28' />
                    </div>
                    <div className='flex items-center justify-end w-1/2 space-x-5'>
                        <div className=''>
                            <Image ref={searchIcon} src={'/Img/search.svg'} width={23} height={23} alt='search' priority />
                            <div ref={searchBox} className="absolute w-full h-0 overflow-hidden bg-zinc-50 right-0 top-16 flex items-center justify-center">
                                <div className="flex flex-col space-y-2 h-[90%] justify-start w-11/12">
                                    <div className="w-full h-14 border border-stone-400 px-4">
                                        <input type="text" className="w-full h-full bg-transparent outline-none border-none" placeholder="Search" />
                                    </div>
                                    <div>
                                        <p>Your Search results</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={'/cart'}>
                            <Image id="cart-icon" src={'/Img/bag.svg'} width={30} height={30} alt='bag' priority />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;