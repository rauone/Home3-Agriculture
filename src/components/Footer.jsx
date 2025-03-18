import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#24231D] rounded-lg shadow-md w-full h-auto sm:h-full mt-10 sm:mt-58 p-6 sm:p-10">
      {/* Основной контейнер */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Логотип и описание */}
        <div className="text-center sm:text-left">
          <img
            src="src/assets/img/Link - logo → logo@2x.webp.jpg"
            className="w-40 mx-auto sm:mx-0"
            alt="Logo"
          />
          <p className="text-gray-500 mt-4">
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <img src="src/assets/icons/socials/twitter.svg" alt="Twitter" />
            <img src="src/assets/icons/socials/facebook.svg" alt="Facebook" />
            <img src="src/assets/icons/socials/pinterest.svg" alt="Pinterest" />
            <img src="src/assets/icons/socials/instagram.svg" alt="Instagram" />
          </div>
        </div>

        {/* Секция "Explore" */}
        <div className="text-center sm:text-left">
          <h1 className="font-Manrope4 text-white text-2xl">Explore</h1>
          <div className="border-1 border-green-500 w-15 mt-2 mx-auto sm:mx-0"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 -mt-1.5 mx-auto sm:mx-0"></div>

          {/* Ссылки */}
          <div className="mt-6 space-y-4">
            {[
              {
                icon: "src/assets/icons/Icon (5).svg",
                text: "About",
                link: "#about",
              },
              {
                icon: "src/assets/icons/Icon (5).svg",
                text: "Services",
                link: "#services",
              },
              {
                icon: "src/assets/icons/Icon (5).svg",
                text: "Projects",
                link: "#projects",
              },
              {
                icon: "src/assets/icons/Icon (5).svg",
                text: "Meet the Farmers",
                link: "#farmers",
              },
              {
                icon: "src/assets/icons/Icon (5).svg",
                text: "News",
                link: "#news",
              },
              {
                icon: "src/assets/icons/Icon (5).svg",
                text: "Contact",
                link: "#contact",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <img src={item.icon} className="w-4 h-4" alt={item.text} />
                <a
                  href={item.link}
                  className="text-gray-500 hover:text-green-500 text-sm ml-2"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Секция "News" */}
        <div className="text-center sm:text-left">
          <h1 className="font-Manrope4 text-white text-2xl">News</h1>
          <div className="border-1 border-green-500 w-15 mt-2 mx-auto sm:mx-0"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 -mt-1.5 mx-auto sm:mx-0"></div>

          {/* Новости */}
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-white font-Manrope4">
                Bringing Food Production <br />
                Back To Cities
              </p>
              <span className="text-yellow-500 text-sm">July 5, 2022</span>
            </div>
            <div>
              <p className="text-white font-Manrope4">
                The Future of Farming, <br />
                Smart Irrigation Solutions
              </p>
              <span className="text-yellow-500 text-sm">July 5, 2022</span>
            </div>
          </div>
        </div>

        {/* Секция "Contact" */}
        <div className="text-center sm:text-left">
          <h1 className="font-Manrope4 text-white text-2xl">Contact</h1>
          <div className="border-1 border-green-500 w-15 mt-2 mx-auto sm:mx-0"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 -mt-1.5 mx-auto sm:mx-0"></div>

          {/* Контактная информация */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <img
                src="src/assets/icons/Icon (6).svg"
                className="w-4 h-4"
                alt="Phone"
              />
              <p className="text-gray-500 ml-2">666 888 0000</p>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/icons/Vector.svg"
                className="w-4 h-4"
                alt="Email"
              />
              <p className="text-gray-500 ml-2">needhelp@company.com</p>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/icons/Vector (1).svg"
                className="w-4 h-4"
                alt="Address"
              />
              <p className="text-gray-500 ml-2">
                80 broklyn golden street line <br />
                New York, USA
              </p>
            </div>
          </div>

          {/* Подписка */}
          <div className="mt-6">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full sm:w-40 h-10 bg-white text-black border border-gray-500 rounded-lg pl-4 md:absolute md:-mt-20"
              />
              <button className="ml-2 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 md:mt-10 rounded-lg hover:bg-green-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
