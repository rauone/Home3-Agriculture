import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      {/* Top bar with contact and social links */}
      <div className="w-415 h-10 bg-green-500 pl-100 pt-3">
        <img src="/assets/icons/Icon.svg" alt="Location Icon" />
        <p className="w-75 h-29 -mt-4 ml-5 text-white font-Manrope">
          88 Road Brooklyn Golden Street. New York
        </p>
        <img
          src="/assets/icons/Icon 1.svg"
          className="-mt-28 ml-96"
          alt="Email Icon"
        />
        <p className="text-white pl-102 -mt-5 font-Manrope">
          support@agrios.com
        </p>
        <div className="-mt-6 ml-175 flex gap-4">
          <img src="/assets/icons/socials/twitter.svg" alt="Twitter" />
          <img src="/assets/icons/socials/facebook.svg" alt="Facebook" />
          <img src="/assets/icons/socials/pinterest.svg" alt="Pinterest" />
          <img src="/assets/icons/socials/instagram.svg" alt="Instagram" />
        </div>
      </div>

      {/* Logo and Navbar (navigation links) aligned horizontally */}
      <div className="flex justify-between items-center mt-6 ml-100 h-15">
        {/* Logo */}
        <div className="flex-grow-0 flex-shrink-0" style={{ width: "100px" }}>
          <img
            src="/assets/img/Link - logo → logo@2x.webp.jpg" // Исправленный путь
            alt="Logo"
            className="h-15 w-full -mt-4" // Логотип будет занимать всю ширину контейнера
          />
        </div>

        {/* Navbar with buttons */}
        <nav className="flex-grow">
          {/* Контейнер для навигационных ссылок и кнопок */}
          <div className="flex gap-8 items-center ml-15 -mt-4">
            <ul className="flex gap-8 items-center font-Manrope3">
              <li>
                <Link
                  to="/"
                  className="text-lg text-gray-800 hover:text-green-500 text-[15px] is-active"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-lg text-gray-800 hover:text-green-500 text-[15px]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-lg text-gray-800 hover:text-green-500 text-[15px]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-lg text-gray-800 hover:text-green-500 text-[15px]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-lg text-gray-800 hover:text-green-500 text-[15px]"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-lg text-gray-800 hover:text-green-500 text-[15px]"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-lg text-gray-800 hover:text-green-500 text-[15px]"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Вертикальная линия */}
            <div className="border-l border-gray-300 h-6"></div>

            <div className="flex gap-4 items-center">
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <img
                    src="/assets/icons/Search.svg"
                    alt="Search"
                    className="max-w-4xl h-6"
                  />
                </button>
              </div>

              {/* Кнопка корзины */}
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <img
                    src="/assets/icons/Link (1).svg"
                    alt="Cart"
                    className="max-w-4xl h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
