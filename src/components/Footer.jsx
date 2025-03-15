import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#24231D] rounded-lg shadow-md w-full h-110 mt-58">
      <div className="flex-col-reverse">
        <img
          src="/assets/img/Link - logo → logo@2x.webp.jpg"
          className="ml-20 pt-30"
        />
        <p className="pl-20 pt-10 text-gray-500">
          There are many variations of passages <br /> of lorem ipsum available,
          but the <br /> majority suffered.
        </p>
        <img
          src="/assets/icons/socials/twitter.svg"
          className="ml-20 mt-4"
        />
        <img
          src="/assets/icons/socials/facebook.svg"
          className="-mt-7 ml-30"
        />
        <img
          src="/assets/icons/socials/pinterest.svg"
          className="-mt-7 ml-40"
        />
        <img
          src="/assets/icons/socials/instagram.svg"
          className="-mt-7 ml-50"
        />
      </div>
      <div className="flex-col -mt-50">
        <h1 className="font-Manrope4 ml-130 text-white text-2xl">Explore</h1>
        <div className="border-1 border-green-500 w-15 mt-2 ml-130"></div>
        <div className="w-2 h-2 rounded-full bg-green-500 -mt-1.5 ml-150"></div>

        {/* Кнопка About */}
        <div className="flex items-center mt-10">
          <img src="/assets/icons/Icon (5).svg" className="ml-130 -mt-10" />
          <a
            href="#about"
            className="text-gray-500 hover:text-green-500 text-[15px] ml-5 -mt-10"
          >
            About
          </a>
        </div>

        {/* Кнопка 2 */}
        <div className="flex items-center mt-10">
          <img src="/assets/icons/Icon (5).svg" className="ml-130 -mt-10" />
          <a
            href="#services"
            className="text-gray-500 hover:text-green-500 text-[15px] ml-5 -mt-10"
          >
            Services
          </a>
        </div>

        {/* Кнопка 3 */}
        <div className="flex items-center mt-10">
          <img src="/assets/icons/Icon (5).svg" className="ml-130 -mt-10" />
          <a
            href="#projects"
            className="text-gray-500 hover:text-green-500 text-[15px] ml-5 -mt-10"
          >
            Projects
          </a>
        </div>

        {/* Кнопка 4 */}
        <div className="flex items-center mt-10">
          <img src="/assets/icons/Icon (5).svg" className="ml-130 -mt-10" />
          <a
            href="#Meet the Farmers"
            className="text-gray-500 hover:text-green-500 text-[15px] ml-5 -mt-10"
          >
            Meet the Farmers
          </a>
        </div>

        {/* Кнопка 5 */}
        <div className="flex items-center mt-10">
          <img src="/assets/icons/Icon (5).svg" className="ml-130 -mt-10" />
          <a
            href="#News"
            className="text-gray-500 hover:text-green-500 text-[15px] ml-5 -mt-10"
          >
            News
          </a>
        </div>

        {/* Кнопка 6 */}
        <div className="flex items-center mt-10">
          <img src="/assets/icons/Icon (5).svg" className="ml-130 -mt-10" />
          <a
            href="#Contact"
            className="text-gray-500 hover:text-green-500 text-[15px] ml-5 -mt-10"
          >
            Contact
          </a>
        </div>
      </div>
      <div>
        <h1 className="flex-col font-Manrope4 -mt-72 ml-180 text-2xl text-white">
          News
        </h1>
        <div className="border-1 border-green-500 w-15 mt-2 ml-180"></div>
        <div className="w-2 h-2 rounded-full bg-green-500 -mt-1.5 ml-200"></div>
        <p className="text-white ml-210 mt-6 font-Manrope4">
          Bringing Food Production <br />
          Back To Cities
        </p>
        <span className="ml-210 text-yellow-500">July 5, 2022</span>
        <p className="ml-210 mt-4 text-white font-Manrope4">
          The Future of Farming,
          <br />
          Smart Irrigation Solutions
        </p>
        <span className="ml-210 text-yellow-500">July 5, 2022</span>
      </div>
      <div>
        <h1 className="flex-col font-Manrope4 -mt-57 ml-280 text-2xl text-white">
          Contact
        </h1>
        <div className="border-1 border-green-500 w-15 mt-2 ml-280"></div>
        <div className="w-2 h-2 rounded-full bg-green-500 -mt-1.5 ml-300"></div>
        <img src="/assets/icons/Icon (6).svg" className="ml-280 mt-5" />
        <p className="text-gray-500 ml-288 -mt-6">666 888 0000</p>
        <img src="/assets/icons/Vector.svg" className="ml-280 mt-5" />
        <p className="ml-290 -mt-5 text-gray-500 font-Manrope">
          needhelp@company.com
        </p>
        <img src="/assets/icons/Vector (1).svg" className="mt-5 ml-280" />
        <p className="text-gray-500 ml-290 -mt-5 font-Manrope">
          80 broklyn golden street line <br />
          New York, USA
        </p>
      </div>
      <div className="ml-280 -mt-40">
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-120 h-10 bg-white text-black border border-gray-500 rounded-lg pl-4 mt-42"
          />
          <button className="ml-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 mt-42">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
