import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Products from '@/lib/Products';
import { ShoppingBag } from 'lucide-react';

const ProductsGrid = () => {
    const firstThreeProducts = Products.slice(0, 3);
    const lastThreeProducts = Products.slice(3, 6)
    return (
      <div className="px-3 py-2">
        <div className="grid grid-cols-2">
          <div className="col-span-2 grid grid-cols-2 md:col-span-3 md:grid-cols-3 lg:col-span-4 lg:grid-cols-4">
            <div className="col-span-1 flex flex-col justify-center items-center p-4 border border-zinc-200">
              <h2 className="text-lg font-black text-center">
                URBN. <br /> COLLECTION
              </h2>
            </div>
            {firstThreeProducts.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="w-full h-auto  border border-zinc-200 space-y-1 group cursor-pointer"
              >
                <Image
                  src={`${product.image}`}
                  width={1000}
                  height={1000}
                  alt="Two (Lithograph)"
                  className="w-full h-auto object-cover md:group-hover:scale-[103%] transition-all p-1"
                />
                <div className="flex items-center justify-between w-full p-2">
                  <div className="space-y-1 w-11/12">
                    <p className="text-nowrap text-xs md:text-sm text-ellipsis w-4/5 overflow-clip uppercase">
                      {product.name}
                    </p>
                    <p className="text-sm text-zinc-700">
                      Rs. {product.price.toLocaleString()}.00
                    </p>
                  </div>
                  {/* <Image
                    src={"/bag.svg"}
                    width={30}
                    height={36}
                    alt="bag"
                    className="md:opacity-0 md:group-hover:opacity-100 md:group-hover:-translate-x-2 transition-all"
                  /> */}
                  <ShoppingBag
                    size={20}
                    strokeWidth={1}
                    absoluteStrokeWidth
                    className="md:opacity-0 md:group-hover:opacity-100 md:group-hover:-translate-x-2 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="col-span-2 grid grid-cols-2 md:col-span-3 md:grid-cols-3 lg:col-span-4 lg:grid-cols-4">
            {lastThreeProducts.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="w-full h-auto min-h-0 border border-zinc-200 p-1.5 space-y-1 group cursor-pointer"
              >
                <Image
                  src={`${product.image}`}
                  width={1000}
                  height={1000}
                  alt="Two (Lithograph)"
                  className="w-full h-auto object-cover md:group-hover:scale-[103%] transition-all"
                />
                <div className="flex items-center justify-between w-full p-2">
                  <div className="space-y-1 w-11/12">
                    <p className="text-nowrap text-xs md:text-sm w-4/5 overflow-hidden uppercase">
                      {product.name}
                    </p>
                    <p className="text-sm text-zinc-700">
                      Rs. {product.price.toLocaleString()}.00
                    </p>
                  </div>
                  {/* <Image
                    src={"/bag.svg"}
                    width={30}
                    height={36}
                    alt="bag"
                    className="md:opacity-0 md:group-hover:opacity-100 md:group-hover:-translate-x-2 transition-all"
                  /> */}
                  <ShoppingBag
                    size={20}
                    strokeWidth={1}
                    absoluteStrokeWidth
                    className="md:opacity-0 md:group-hover:opacity-100 md:group-hover:-translate-x-2 transition-all"
                  />
                </div>
              </Link>
            ))}
            <div className="w-full h-auto min-h-0 border border-zinc-200 p-2 group cursor-pointer flex flex-col justify-center items-center">
              <Link
                href={"/store"}
                className="group-hover:border-b border-black"
              >
                View all
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductsGrid;
