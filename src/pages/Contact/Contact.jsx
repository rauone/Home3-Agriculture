const Contact = () => {
  return (
    <div className="text-center w-full">
      {/* Изображение с настройками для адаптации */}
      <img
        src="src/assets/img/title.svg"
        className="w-full lg:w-auto mx-auto lg:max-w-full"
        alt="Title"
      />
      {/* Текст с отступами для корректного отображения */}
      <div className="relative z-10">
        <h1 className="sm:-mt-20 md:-mt-20 lg:-mt-40 text-white font-Manrope3">
          HOME / CONTACT
        </h1>
        <p className="text-3xl lg:text-5xl text-white font-Manrope2 mt-5 lg:mt-10">
          Contact
        </p>
      </div>
      {/* Остальная часть компонента */}
      <div className="mt-20 lg:mt-40 text-start items-center flex flex-col lg:flex-row lg:justify-around">
        <div className="bg-green-600 w-80 lg:w-100 h-50 lg:ml-40 rounded-4xl mb-10 lg:mb-0">
          <h1 className="ml-5 lg:ml-15 font-Covored text-2xl lg:text-4xl text-white pt-5 lg:pt-10">
            About
          </h1>
          <p className="ml-5 lg:ml-15 font-Manrope3 text-white">
            Lorem ipsum is simply free text <br /> used by copytypinh
            refreshing.
            <br /> Neque porro est qui
          </p>
        </div>
        <div className="bg-[#C5CE38] w-80 lg:w-100 h-50 lg:ml-40 rounded-4xl mb-10 lg:mb-0">
          <h1 className="ml-5 lg:ml-15 font-Covored text-2xl lg:text-4xl text-white pt-5 lg:pt-10">
            Contact
          </h1>
          <p className="ml-5 lg:ml-15 font-Manrope3 text-white">
            +1- (246) 333-0079 <br /> support@agrios.com
            <br />
            Mon - Fri: 7:00 am - 6:00 pm
          </p>
        </div>
        <div className="bg-green-600 w-80 lg:w-100 h-50 lg:ml-40 rounded-4xl">
          <h1 className="ml-5 lg:ml-15 font-Covored text-2xl lg:text-4xl text-white pt-5 lg:pt-10">
            Address
          </h1>
          <p className="ml-5 lg:ml-15 font-Manrope3 text-white">
            66 Broklun Road Golden Street,
            <br /> New Your United States of <br />
            Ameriaca
          </p>
        </div>
      </div>
      <div className="mt-20 w-full lg:w-100 lg:ml-40">
        <img
          src="src/assets/img/Iframe - London Eye, London, United Kingdom.svg"
          className="w-full"
          alt="Map"
        />
      </div>
      <div className="text-center mt-10 lg:-mt-120">
        <h1 className="font-Covored text-[#EEC044] text-xl lg:text-2xl">
          Contact US
        </h1>
        <p className="text-2xl lg:text-4xl ml-10 lg:ml-32 font-Manrope2">
          Write a Message
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center">
          <input
            type="username"
            placeholder="Name"
            className="w-80 lg:w-40 h-10 bg-white text-black border border-gray-500 rounded-lg pl-4 mt-10 lg:ml-65"
          />
          <input
            type="email"
            placeholder="Email Address "
            className="w-80 lg:w-40 h-10 bg-white text-black border border-gray-500 rounded-lg pl-4 mt-5 lg:mt-10 lg:ml-12"
          />
        </div>
        <input
          type="Message"
          placeholder="Write a Message"
          className="w-80 lg:w-95 h-40 lg:h-15 sm:h-12 md:h-12  bg-white text-black border border-gray-500 rounded-lg mt-10 lg:ml-65 pl-4 pt-3"
        />
        <div className="mt-5 lg:-mt-35">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 mt-10 lg:mt-42">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
