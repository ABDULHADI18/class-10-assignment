import Image from "next/image";

function Product_Card() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-slate-200">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-red-700">
          Bikes Collection
        </h1>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-red-800">
          Discover the latest bike models
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1 w-full max-w-screen-xl">
        <div className="bg-red-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center p-10">
            <Image
              src="/cbr1000rr.jpeg"
              alt="product-1 "
              width={500}
              height={500}
            />
          </div>
          <p className="text-center py-2 font-bold text-orange-300">
            Honda CBR 1000rr
          </p>
          <p className="text-center pt-4 font-bold text-orange-300">
            Price-$16,699
          </p>
          <div className="flex justify-center items-center my-4">
            <button className="px-10 py-3 bg-orange-400 text-orange-700 rounded-md hover:scale-110">
              Buy Now
            </button>
          </div>
        </div>

        <div className="bg-red-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center p-10">
            <Image
              src="/hayabusa.jpeg"
              alt="product-2 "
              width={500}
              height={500}
            />
          </div>
          <p className="text-center py-2 font-bold text-orange-300">
            Suzuki Hayabusa
          </p>
          <p className="text-center pt-4 font-bold text-orange-300">
            Price-$28,490
          </p>
          <div className="flex justify-center items-center my-4">
            <button className="px-10 py-3 bg-orange-400 text-orange-700 rounded-md hover:scale-110">
              Buy Now
            </button>
          </div>
        </div>

        <div className="bg-red-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center p-10">
            <Image
              src="/ninja h2.jpg"
              alt="product-3 "
              width={500}
              height={500}
            />
          </div>
          <p className="text-center py-2 font-bold text-orange-300">
            Kawasaki Ninja H2
          </p>
          <p className="text-center pt-4 font-bold text-orange-300">
            Price-$58,100
          </p>
          <div className="flex justify-center items-center my-4">
            <button className="px-10 py-3 bg-orange-400 text-orange-700 rounded-md hover:scale-110">
              Buy Now
            </button>
          </div>
        </div>

        <div className="bg-red-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center p-10">
            <Image
              src="/z900.jpg.jpeg"
              alt="product-4 "
              width={500}
              height={500}
            />
          </div>
          <p className="text-center py-2 font-bold text-orange-300">
            Kawasaki Z900
          </p>
          <p className="text-center pt-4 font-bold text-orange-300">
            Price-$14,149
          </p>
          <div className="flex justify-center items-center my-4">
            <button className="px-10 py-3 bg-orange-400 text-orange-700 rounded-md hover:scale-110">
              Buy Now
            </button>
          </div>
        </div>

        <div className="bg-red-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center p-10">
            <Image
              src="/z1000.jpg"
              alt="product-5 "
              width={500}
              height={500}
            />
          </div>
          <p className="text-center py-2 font-bold text-orange-300">
            Kawasaki Z1000
          </p>
          <p className="text-center pt-4 font-bold text-orange-300">
            Price-$15,249
          </p>
          <div className="flex justify-center items-center my-4">
            <button className="px-10 py-3 bg-orange-400 text-orange-700 rounded-md hover:scale-110">
              Buy Now
            </button>
          </div>
        </div>

        <div className="bg-red-800 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-center p-10">
            <Image
              src="/zx10r.jpg"
              alt="product-1 "
              width={500}
              height={500}
            />
          </div>
          <p className="text-center py-2 font-bold text-orange-300">
            Kawasaki Ninja Zx10r
          </p>
          <p className="text-center pt-4 font-bold text-orange-300">
            Price-$18,799
          </p>
          <div className="flex justify-center items-center my-4">
            <button className="px-10 py-3 bg-orange-400 text-orange-700 rounded-md hover:scale-110">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Card;
