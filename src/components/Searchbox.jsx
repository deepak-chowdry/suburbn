'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import { gsap } from "gsap";


const Searchbox = () => {
    const searchIcon = useRef(null);
    const searchBox = useRef(null);

    let isSearchOpen = false;

    useEffect(() => {
        const handleSearchClick = () => {
            if (isSearchOpen) {
                gsap.to(searchBox.current, {
                    height: 0,
                    display: "none",
                    opacity: 0,
                    duration: 0.5,
                });
               
                gsap.to('#menubtn', {
                    opacity: 1,
                    duration: 0.6,
                })
                isSearchOpen = false;
            } else {
                gsap.to(searchBox.current, {
                    height: '340px',
                    display: "flex",
                    opacity: 1,
                    duration: 0.5,
                });
                
                gsap.to('#menubtn', {
                    opacity: 0,
                    duration: 0.6,
                })
                isSearchOpen = true;
            }
        };

        const searchButton = searchIcon.current;
        searchButton.addEventListener('click', handleSearchClick);

        return () => {
            searchButton.removeEventListener('click', handleSearchClick);
        }
    }, [])

    return (
        <>
            <div>
                <Image ref={searchIcon} src={'/search.svg'} width={23} height={23} alt='search' priority />
                <div ref={searchBox} className="absolute w-full h-0 hidden bg-zinc-50 right-0 top-16 items-center justify-center">
                    <div id='box' className="flex flex-col space-y-2 h-5/6 justify-start w-93 md:w-90">
                        <div className="w-full py-4 border border-stone-400 px-4">
                            <input type="text" className="w-full h-full bg-transparent outline-none border-none" placeholder="Search" />
                        </div>
                        <div>
                            <p>Your Search results</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbox