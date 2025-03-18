import React from "react";

const Description = () => {
  return (
    <div className="mt-315 text-center">
      {/* Заголовок и кнопка */}
      <img
        src="src/assets/img/section 03.svg"
        className="w-full h-auto"
        alt="Background"
      />
      <h1 className="-mt-80 text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-Manrope2 px-4 sm:px-0 md:-mt-40 lg:-mt-70">
        Be Healthy & Eat Only Fresh <br />
        Organic Vegetables
      </h1>
      <button className="mt-6 bg-green-500 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-lg font-semibold hover:bg-green-600 transition duration-300">
        Show Now
      </button>

      {/* Секция "Today's Hot Deal" */}
      <div className="items-center mt-20 sm:mt-60">
        <h1 className="text-center text-2xl font-Covored text-yellow-500">
          Special Offers
        </h1>
        <p className="font-Manrope2 text-3xl sm:text-4xl text-black mt-2">
          Today's Hot Deal
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 px-4 sm:px-0 lg:px-80">
          {[
            {
              img: "src/assets/img/section 08.svg",
              name: "Lettuce",
              price: "$100.00",
            },
            {
              img: "src/assets/img/section 34.svg",
              name: "Onions",
              price: "$20.00",
            },
            {
              img: "src/assets/img/section 16.svg",
              name: "Tomato",
              price: "$50.00",
            },
            {
              img: "src/assets/img/section 20.svg",
              name: "Pear",
              price: "$20.00",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.img}
                className="w-40 sm:w-52 mx-auto"
                alt={item.name}
              />
              <h1 className="font-Manrope2 mt-4">{item.name}</h1>
              <p className="text-green-600">{item.price}</p>
              <span className="text-yellow-500">SSSSS</span>
            </div>
          ))}
        </div>
      </div>

      {/* Секция "Only Organic Food" */}
      <div className="items-center mt-20 sm:mt-80">
        <div className="text-center">
          <img
            src="src/assets/img/div.elementor-column.svg"
            className="w-full sm:w-145 mx-auto lg:ml-50 lg:mt-50"
            alt="Organic Food"
          />
          <h1 className="text-2xl sm:text-3xl text-yellow-500 font-Covored mt-4 lg:ml-80 lg:-mt-160">
            Quality Products
          </h1>
          <p className="font-Manrope2 text-3xl sm:text-4xl mt-2 lg:ml-90">
            Only Organic Food
          </p>
          <p className="text-gray-500 mt-4 px-4 sm:px-0 lg:ml-150">
            There are many variations of passages of lorem ipsum available but
            the <br />{" "}
            <span className="-ml-5">
              majority have suffered alteration in some form by injected humor
              or
            </span>{" "}
            <br /> <span className="lg:-ml-100">random word</span>
          </p>
        </div>

        {/* Блоки с иконками и текстом */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-10 px-4 sm:px-0 lg:ml-200">
          <div className="text-center -ml-21">
            <img
              src="src/assets/icons/Icon (3).svg"
              className="w-10 sm:w-15 mx-auto lg:w-10"
              alt="Professional Farmers"
            />
            <h1 className="font-Manrope2 text-xl sm:text-2xl mt-2">
              Professional Farmers
            </h1>
            <p className="text-gray-500 mt-2 lg:flex-row lg:ml-35">
              There are many variations of passages of lorem ipsum.
            </p>
          </div>
          <div className="text-center lg:mt-44 lg:-ml-240">
            <img
              src="src/assets/icons/Icon (4).svg"
              className="w-10 sm:w-15 mx-auto lg:w-10"
              alt="Solution for Farming"
            />
            <h1 className="font-Manrope2 text-xl sm:text-2xl mt-2">
              Solution for Farming
            </h1>
            <p className="text-gray-500 mt-2 lg:ml-46">
              There are many variations of passages of lorem ipsum
            </p>
          </div>
        </div>

        {/* Кнопка "Start Shopping Now" */}
        <button className="mt-10 bg-green-500 lg:ml-80 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-lg font-semibold hover:bg-green-600 transition duration-300">
          Start Shopping Now
        </button>
      </div>

      {/* Секция с темным фоном */}
      <div className="bg-[#1F1E17] p-6 rounded-lg shadow-md w-full mt-20 sm:mt-58">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
          <div>
            <h1 className="text-[#A5A49A] text-lg sm:text-xl">
              Agriculture Products
            </h1>
          </div>
          <div>
            <h1 className="text-[#A5A49A] text-lg sm:text-xl">
              Projects Completed
            </h1>
          </div>
          <div>
            <h1 className="text-[#A5A49A] text-lg sm:text-xl">
              Satisfied Clients
            </h1>
          </div>
          <div>
            <h1 className="text-[#A5A49A] text-lg sm:text-xl">
              Experts Farmers
            </h1>
          </div>
        </div>
      </div>

      {/* Секция "What They Say" */}
      <div className="mt-20 text-center">
        <h1 className="text-yellow-500 font-Covored text-2xl">
          Our Testimonials
        </h1>
        <p className="text-3xl sm:text-4xl font-Manrope2 mt-2">What They Say</p>
        <img
          src="src/assets/img/div.flickity-viewport.svg"
          className="mt-10 mx-auto w-full sm:w-3/4"
          alt="Testimonials"
        />
      </div>

      {/* Секция "News & Articles" */}
      <div className="text-center mt-20">
        <h1 className="font-Covored text-yellow-500 text-2xl">From the Blog</h1>
        <p className="text-3xl sm:text-4xl font-Manrope2 mt-2">
          News & Articles
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 px-4 sm:px-0">
          <img
            src="src/assets/img/section 60.svg"
            className="w-full sm:w-3/4 mx-auto"
            alt="News 1"
          />
          <img
            src="src/assets/img/section 28.svg"
            className="w-full sm:w-3/4 mx-auto"
            alt="News 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
