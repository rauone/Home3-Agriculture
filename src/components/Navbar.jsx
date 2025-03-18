import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Full-width top bar */}
      <div className="bg-green-500 w-full h-10 flex items-center justify-between px-4 sm:px-6 md:px-10">
        <div className="flex items-center">
          <img
            src="/assets/icons/Icon.svg"
            alt="Location Icon"
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
          />
          <p className="ml-2 text-white font-Manrope text-xs sm:text-sm md:text-base">
            88 Road Brooklyn Golden Street. New York
          </p>
        </div>
        <div className="hidden md:flex items-center">
          <img
            src="/assets/icons/Icon 1.svg"
            alt="Email Icon"
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
          />
          <p className="ml-2 text-white font-Manrope text-xs sm:text-sm md:text-base">
            support@agrios.com
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <img
            src="/assets/icons/socials/twitter.svg"
            alt="Twitter"
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
          />
          <img
            src="/assets/icons/socials/facebook.svg"
            alt="Facebook"
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
          />
          <img
            src="/assets/icons/socials/pinterest.svg"
            alt="Pinterest"
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
          />
          <img
            src="/assets/icons/socials/instagram.svg"
            alt="Instagram"
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
          />
        </div>
      </div>

      {/* Full-width logo and navbar */}
      <div className="w-full px-4 sm:px-6 md:px-10 py-4 md:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/img/Link - logo → logo@2x.webp.jpg"
              alt="Logo"
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
            />
          </div>
          {/* Navbar with buttons */}
          <nav className="flex-grow mt-4 md:mt-0 w-full md:w-auto">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-between">
              <ul className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 font-Manrope text-center md:text-left">
                <li>
                  <Link
                    to="/"
                    className="text-gray-800 hover:text-green-500 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-800 hover:text-green-500 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-800 hover:text-green-500 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-800 hover:text-green-500 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className="text-gray-800 hover:text-green-500 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-gray-800 hover:text-green-500 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-800 hover:text-green-500 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Search and Cart Buttons */}
              <div className="flex gap-3 sm:gap-4 md:gap-6">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <img
                    src="/assets/icons/Search.svg"
                    alt="Search"
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
                  />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <img
                    src="/assets/icons/Link (1).svg"
                    alt="Cart"
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;