"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Navbar = () => {
  const menuBtnRef = useRef();
  const path1 = useRef();
  const path2 = useRef();
  const logoRef = useRef();

  useGSAP(() => {
    let isMenuOpen = false;

    menuBtnRef.current.addEventListener("click", function () {
      if (isMenuOpen) {
        gsap.to(path1.current, {
          attr: { d: "M 0 5 L 25 5" },
        });

        gsap.to(path2.current, {
          attr: { d: "M 0 13 L 25 13" },
        });
        gsap.to(logoRef.current, {
          attr: { fill: "black" },
          delay: 0.6,
        });
        gsap.to("#menu", {
          height: 0,
          opacity: 0,
          duration: 0.3,
          delay: 0.5,
        });
        gsap.to("#menubtn", {
          attr: {
            stroke: "#000",
          },
          delay: 0.6,
        });
       
        gsap.to("#links *", {
          opacity: 0,
          transform: "translateY(40px)",
          duration: 0.2,
          stagger: 0.02,
          ease: "back.in",
        });
        gsap.to("#buttons", {
          background: "#fff",
          delay: 0.7,
        });

        isMenuOpen = false;
      } else {
        gsap.to(path1.current, {
          attr: { d: "M 0 0 L 17 16" },
        });

        gsap.to(path2.current, {
          attr: { d: "M 0 16 L 17 1" },
        });
        gsap.to(logoRef.current, {
          attr: { fill: "white" },
        });
        gsap.to("#menu", {
          height: "55vh",
          opacity: 1,
          duration: 0.3,
          delay: 0.3,
        });
        gsap.to("#menubtn", {
          attr: {
            stroke: "#fff",
          },
        });
       
        gsap.to("#links *", {
          opacity: 1,
          transform: "translateY(0)",
          duration: 0.4,
          delay: 0.3,
          stagger: 0.05,
          ease: "back.in",
        });
        gsap.to("#buttons", {
          background: "transparent"
        });

        isMenuOpen = true;
      }
    });
  });
  return (
    <>
      <div className="flex items-center justify-center h-20 fixed w-full z-30">
        <div className="flex items-center justify-between w-[93%]">
          <svg
            ref={logoRef}
            width="80"
            height="80"
            viewBox="0 0 37 10"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            className="z-10"
          >
            <path d="M0.266 11L2.058 0.444H4.76L6.902 6.086L9.17 0.444H11.9L13.496 11H10.752L9.982 4.924H9.954L7.42 11H6.328L3.906 4.924H3.878L2.996 11H0.266Z"/>
          </svg>

          <div id="buttons" className="flex items-center justify-center rounded-full z-10">
            <svg
              ref={menuBtnRef}
              width="22"
              height="16"
              id="menubtn"
              stroke="#000"
              className="cursor-pointer"
            >
              <path ref={path1} d="M 0 5 L 25 5" />
              <path ref={path2} d="M 0 13 L 25 13" />
            </svg>
          </div>

          <div
            id="menu"
            className="w-full h-0 absolute left-0 top-0 bg-[#111] text-white flex items-center justify-center opacity-0"
          >
            <div
              id="links"
              className="flex flex-col items-end justify-end w-[95%] h-[95%] text-[14vw] leading-[14.5vw] md:text-[5vw] md:leading-[6vw] uppercase font-black"
            >
              <Link className="opacity-0 translate-y-10" href={"/admin"}>
                Admin
              </Link>
              <Link className="opacity-0 translate-y-10" href={"/"}>
                Catalog
              </Link>
              <Link className="opacity-0 translate-y-10" href={"/signin"}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
