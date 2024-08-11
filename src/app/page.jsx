import ProductsGrid from "@/components/ProductsGrid";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-1/2">
        <Subscribe />
      </div>
      <ProductsGrid />
    </>
  );
}
