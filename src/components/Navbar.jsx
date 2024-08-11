'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Navbar = () => {
  const path1 = useRef();
  const path2 = useRef();
  const menuBtn = useRef();

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

        isMenuOpen = false;
      } else {
        gsap.to(path1.current, {
          attr: { d: "M 0 0 L 17 16" },
        });
        gsap.to(path2.current, {
          attr: { d: "M 0 16 L 17 1" },
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
      <div className='flex items-center justify-center h-20'>
        <div className='flex items-center justify-between w-11/12'>
          <div>
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
          </div>
          <h2>Mahadev</h2>
          <div>
            <Image src={'/search.svg'} alt='' width={20} height={20} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar