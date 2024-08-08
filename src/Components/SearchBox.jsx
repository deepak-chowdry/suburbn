'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';


const SearchBox = () => {
  const searchIcon = useRef(null);
  const searchBox = useRef(null);

  let isSearchOpen = false;

  useGSAP(() => {
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

    return () => {
      searchButton.removeEventListener('click', handleSearchClick);
    }
  }, [])

  return (
    <>
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
    </>
  )
}

export default SearchBox