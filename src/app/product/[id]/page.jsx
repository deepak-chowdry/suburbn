"use client";
import useCart from "@/lib/CartState";
import Products from "@/lib/Products";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";

const page = ({ params }) => {
  const { addToCart } = useCart();
  const product = Products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product.id, product.name, product.image, 1, product.price);
  };

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-zinc-700" />);
    }
    if (halfStar)
      stars.push(<FaStarHalf key="half" className="text-zinc-300" />);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-6 px-3">
      <div className="w-full md:w-11/12 rounded-lg p-1">
        <div className="flex flex-col md:flex-row items-center justify-evenly md:items-start gap-6 md:gap-12">
          <div className="w-full md:w-1/3 relative mb-4 md:mb-0">
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-6 md:py-6 h-full">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold text-gray-800 flex items-center gap-1">
                <h3 className="flex items-center gap-0.5 text-xs">
                  {renderRating(product.ratings)}
                </h3>
                <span className="text-xs text-gray-600">{product.ratings}</span>
              </div>
              <h1 className="text-lg font-medium uppercase">
                {product.name}
              </h1>
              <span className="w-10 h-0.5 bg-zinc-500" />

              <p className="text-base font-normal text-zinc-800">
                Rs. {product.price}.00
              </p>
              <span className="text-xs font-medium text-zinc-600 uppercase">
                MRP incl. of all taxes
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full h-12 border border-zinc-700 text-sm rounded transition duration-300"
            >
              Add to Cart
            </button>

            <p className="text-sm text-zinc-700 leading-6">{product.description}</p>

            <span className="w-10 h-0.5 bg-zinc-500" />

            <div className="">
              <h3 className="text-lg font-semibold">
                Reviews <span className="font-normal">( {product.reviews.length} )</span>
              </h3>
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 py-3 space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-medium">
                      {review.user}
                    </h4>
                    <h3 className="flex items-center text-xs gap-0.5">
                      {renderRating(review.rating)}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
