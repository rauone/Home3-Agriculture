import React from "react";

const Header = () => {
  return (
    <div className="max-h-screen">
      <div>
        <img
          src="src/assets/img/div.bg-wrap.svg"
          alt="Background"
          className=""
        />
        <h1 className="text-yellow-500 -mt-145 ml-100 text-8xl font-Covored">
          Agriculture <br />
          <span className="text-8xl text-white">
            & Organic <br />
            Market
          </span>
        </h1>
        <button className="mt-6 ml-100 bg-green-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
          Show Now
        </button>
        <div className="container py-10 px-0 rounded-lg "></div>

        {/* Круглые элементы в колонну */}
        <div className="flex gap-4 ml-290 items-center -mt-50">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-[#333333]"></div>
            <div className="w-10 h-10 rounded-full bg-[#ffffff]"></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 pl-50 rounded-lg shadow-md max-w-220 mx-full h-30 mt-58 ml-80">
        <img src="src/assets/icons/__before.svg" className="w-15 mt-5 -ml-15" />
        <h2 className="text-gray-800 text-[18px] font-Manrope2 -mt-12 ml-5">
          Return Policy
        </h2>
        <p className="text-gray-600 mt-0 ml-5 text-[12px] font-Manrope">
          Money Back Guarantee
        </p>
        <div className="border-l border-gray-300 h-8 -mt-9 ml-40"></div>
        <img
          src="src/assets/icons/__before (1).svg"
          className="w-15 -mt-11 ml-45"
        />
        <h2 className="text-xl text-gray-800 text-[18px] font-Manrope2 -mt-13 ml-62">
          Free Shipping
        </h2>
        <p className="text-gray-600 mt-0 ml-62 text-[12px] font-Manrope">
          On All Orders Over $45.00
        </p>
        <div className="border-l border-gray-300 h-8 -mt-10 ml-100"></div>
        <img
          src="src/assets/icons/Icon (2).svg"
          className="w-15 -mt-13 ml-108"
        />
        <h2 className="text-xl text-gray-800 text-[18px] font-Manrope2 -mt-12 ml-128">
          Store Locator
        </h2>
        <p className="text-gray-600 mt-0 ml-128 text-[12px] font-Manrope">
          Find Your Nearest Store
        </p>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-yellow-500 text-2xl font-Covored">
          Recently Added
        </h1>
        <p className="text-center text-4xl font-Manrope2">Latest Products</p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10 px-10">
        <img src="src/assets/img/section 34.svg" className="w-70 ml-65" />
        <p className="font-Manrope2 pt-72 -ml-35">
          Onions <br />
          <span className="text-green-500">
            $20.00 <br />
            <p className="text-yellow-500">SSSSS</p>
          </span>
        </p>
        <img src="src/assets/img/section 38.svg" className="w-70 -ml-120" />
        <p className="font-Manrope2 ml-180 -mt-24">
          Carrot <br />
          <span className="text-green-500">
            $50.00 <br />
            <p className="text-yellow-500">SSSSS</p>
          </span>
        </p>
        <img
          src="src/assets/img/section 42.svg"
          className="w-70 ml-90 -mt-96"
        />
        <p className="font-Manrope2 -ml-15 -mt-23.5">
          Tomato <br />
          <span className="text-green-500">
            $50.00 <br />
            <p className="text-yellow-500">SSSSS</p>
          </span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10 px-10">
        <img src="src/assets/img/section 46.svg" className="w-70 ml-66" />
        <p className="font-Manrope2 pt-72 -ml-35">
          Red Grapes <br />
          <span className="text-green-500">
            $100.00 <br />
            <p className="text-yellow-500">SSSSS</p>
          </span>
        </p>
        <img src="src/assets/imag/section 50.svg" className="w-70 -ml-120" />
        <p className="font-Manrope2 ml-180 -mt-24">
          Garlic <br />
          <span className="text-green-500">
            $20.00 <br />
            <p className="text-yellow-500">SSSSS</p>
          </span>
        </p>
        <img
          src="src/assets/img/section 54.svg"
          className="w-70 ml-90 -mt-96"
        />
        <p className="font-Manrope2 -ml-15 -mt-23.5">
          Lettuce <br />
          <span className="text-green-500">
            $30.00 <br />
            <p className="text-yellow-500">SSSSS</p>
          </span>
        </p>
      </div>
      <div className="mt-10.5 ml-75 w-105 h-10">
        <img src="src/assets/img/div.elementor-widget-wrap.svg" />
        <p className="font-Manrope text-[10px] -mt-45 ml-10 text-white">
          100% ORGANIC
        </p>
        <h1 className="ml-10 text-white font-Covored">
          Quality Organic <br />
          Food Store
        </h1>
        <button className="mt-6 ml-10 bg-white text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
          Order Now
        </button>
      </div>
      <div className="-mt-10 ml-198 w-105 h-10">
        <img src="src/assets/img/div.elementor-widget-wrap (1).svg" />
        <p className="font-Manrope text-[10px] -mt-45 ml-10 text-white">
          100% ORGANIC
        </p>
        <h1 className="ml-10 text-white font-Covored">
          Quality Organic <br />
          Food Store
        </h1>
        <button className="mt-6 ml-10 bg-white text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Header;
