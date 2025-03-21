"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Search, X } from "lucide-react";
import Products from "@/lib/Products"; // Import your product data
import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbox = () => {
  const router = useRouter();
  const searchIcon = useRef(null);
  const searchBox = useRef(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Handle the input change to filter products
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the products based on the search query
    const results = Products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(results);
  };

  // Toggle the search box visibility with animation
  const toggleSearchBox = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isSearchOpen) {
      gsap.to(searchBox.current, {
        left: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(searchBox.current, {
        left: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isSearchOpen]);

  // Handle product click and close the search box
  const handleProductClick = (productId) => {
    setIsSearchOpen(false); // Close the search box
    setSearchQuery("");
    setFilteredProducts([]);
    setTimeout(() => {
      router.push(`/product/${productId}`);
    }, 500); // Wait for animation to finish before navigating
  };

  return (
    <>
      <div>
        {isSearchOpen ? (
          <X
            ref={searchIcon}
            size={24}
            strokeWidth={1}
            className="cursor-pointer"
            onClick={toggleSearchBox} // Close search on click of X icon
          />
        ) : (
          <Search
            ref={searchIcon}
            size={24}
            strokeWidth={1}
            className="cursor-pointer"
            onClick={toggleSearchBox} // Open search box on click of Search icon
          />
        )}
        <div
          ref={searchBox}
          className="absolute w-9/12 md:w-1/3 h-screen bg-zinc-50 top-4 flex items-center justify-center left-[-100%] transition-all ease-in-out z-50"
        >
          <div
            id="box"
            className="flex flex-col gap-3.5 h-full justify-start items-center w-93 md:w-90"
          >
            <div className="w-full py-3 border border-stone-400 px-4">
              <input
                type="text"
                className="w-full h-full bg-transparent outline-none border-none"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="w-full p-2.5 overflow-y-scroll">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product.id)} // Use the handleProductClick here
                    className="border-b border-gray-300 flex items-center gap-2 py-2 cursor-pointer"
                  >
                    <Image
                      src={`${product.image}`}
                      width={1000}
                      height={1000}
                      alt={product.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-medium uppercase">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Rs. {product.price}.00
                      </p>
                    </div>
                  </div>
                ))
              ) : searchQuery ? (
                <p className="text-gray-600">No results found</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbox;
