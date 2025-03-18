import React from "react";

const Header = () => {
  return (
    <div className="max-h-screen">
      {/* Заголовок и фоновое изображение */}
      <div>
        <img
          src="src/assets/img/div.bg-wrap.svg"
          alt="Background"
          className="w-full h-auto"
        />
        <h1 className="text-yellow-500 ml-10 sm:-mt-55 sm:ml-20 md:ml-50 lg:-mt-100 lg:ml-90 text-4xl sm:text-2xl md:text-4xl lg:text-7xl font-Covored">
          Agriculture <br />
          <span className="text-white">
            & Organic <br />
            Market
          </span>
        </h1>
        <button className="mt-6 ml-10 sm:ml-20 md:ml-50 lg:mt-10 lg:text-center lg:ml-90 bg-green-500 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-lg font-semibold hover:bg-green-600 transition duration-300">
          Show Now
        </button>
      </div>

      {/* Круглые элементы */}
      <div className="flex gap-4 ml-10 sm:ml-100 md:ml-150 lg:ml-290 items-center -mt-20 sm:-mt-35 lg:-mt-70">
        <div className="flex flex-col gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#333333]"></div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#ffffff]"></div>
        </div>
      </div>

      {/* Блок с политикой возврата, доставкой и магазином */}
      <div className="bg-white p-4 pl-10 sm:pl-20 rounded-lg shadow-md max-w-full sm:max-w-240 mx-auto h-auto sm:h-30 mt-10 sm:mt-20 ml-0 sm:ml-10 lg:ml-90 lg:mt-65">
        <div className="grid grid-cols-1 sm:-ml-15 sm:grid-cols-3 gap-4">
          <div className="flex items-center">
            <img
              src="src/assets/icons/__before.svg"
              className="w-10 sm:w-10 lg:w-12"
            />
            <div className="ml-2">
              <h2 className="text-gray-800 text-sm sm:mt-2 sm:text-[18px] lg:text-[20px] font-Manrope2">
                Return Policy
              </h2>
              <p className="text-gray-600 text-xs sm:text-[12px] lg:text-[14px] font-Manrope">
                Money Back Guarantee
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/icons/__before (1).svg"
              className="w-10 sm:w-10 lg:w-12 lg:-mt-0"
            />
            <div className="ml-2">
              <h2 className="text-gray-800 text-sm sm:mt-5 sm:text-[18px] lg:text-[20px] lg:mt-1 font-Manrope2">
                Free Shipping
              </h2>
              <p className="text-gray-600 text-xs sm:text-[12px] lg:text-[14px] font-Manrope">
                On All Orders Over $45.00
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/icons/Icon (2).svg"
              className="w-10 sm:w-10 lg:w-12 sm:-mt-4 lg:-mt-0"
            />
            <div className="ml-2">
              <h2 className="text-gray-800 text-sm sm:text-[18px] lg:text-[20px] lg:mt-2 font-Manrope2">
                Store Locator
              </h2>
              <p className="text-gray-600 text-xs sm:text-[12px] lg:text-[14px] font-Manrope">
                Find Your Nearest Store
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Секция "Latest Products" */}
      <div className="mt-20 text-center">
        <h1 className="text-yellow-500 text-xl sm:text-2xl lg:text-3xl font-Covored">
          Recently Added
        </h1>
        <p className="text-center text-2xl sm:text-4xl lg:text-5xl font-Manrope2">
          Latest Products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-10 lg:px-55">
        {[
          {
            img: "src/assets/img/section 34.svg",
            name: "Onions",
            price: "$20.00",
          },
          {
            img: "src/assets/img/section 38.svg",
            name: "Carrot",
            price: "$50.00",
          },
          {
            img: "src/assets/img/section 42.svg",
            name: "Tomato",
            price: "$50.00",
          },
          {
            img: "src/assets/img/section 46.svg",
            name: "Red Grapes",
            price: "$100.00",
          },
          {
            img: "src/assets/img/section 50.svg",
            name: "Garlic",
            price: "$20.00",
          },
          {
            img: "src/assets/img/section 54.svg",
            name: "Lettuce",
            price: "$30.00",
          },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.img} className="w-40 sm:w-70 lg:w-80 mx-auto" />
            <p className="font-Manrope2 mt-4 lg:text-xl">
              {item.name} <br />
              <span className="text-green-500">
                {item.price} <br />
                <p className="text-yellow-500">SSSSS</p>
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Блоки с кнопками "Order Now" */}
      <div className="flex flex-col sm:flex-row gap-4 sm:mt-20 px-4 sm:px-10 lg:mt-20 lg:ml-50">
        <div className="w-full sm:w-105 lg:w-120 h-auto sm:h-10 relative">
          <img
            src="src/assets/img/div.elementor-widget-wrap.svg"
            className="w-full"
          />
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
            <p className="font-Manrope text-[10px] lg:text-[12px] text-white">
              100% ORGANIC
            </p>
            <h1 className="text-white font-Covored mt-2 lg:text-3xl">
              Quality Organic <br />
              Food Store
            </h1>
            <button className="mt-4 bg-white text-black py-2 px-6 rounded-lg text-sm sm:text-lg lg:mt-10 font-semibold hover:bg-green-600 transition duration-300">
              Order Now
            </button>
          </div>
        </div>
        <div className="w-full sm:w-105 lg:w-120 h-auto sm:h-10 lg:ml-20 relative">
          <img
            src="src/assets/img/div.elementor-widget-wrap (1).svg"
            className="w-full"
          />
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
            <p className="font-Manrope text-[10px] lg:text-[12px] text-white">
              100% ORGANIC
            </p>
            <h1 className="text-white font-Covored mt-2 lg:text-3xl">
              Quality Organic <br />
              Food Store
            </h1>
            <button className="mt-4 bg-white text-black py-2 px-6 rounded-lg text-sm sm:text-lg lg:mt-10 font-semibold hover:bg-green-600 transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
