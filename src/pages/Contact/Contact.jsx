const Contact = () => {
  return (
    <div className="text-center w-full">
      <img src="/assets/img/title.svg" />
      <h1 className="-mt-40 text-white font-Manrope3">HOME / CONTACT</h1>
      <p className="text-5xl text-white font-Manrope2">Contact</p>
      <div className="mt-40 text-start items-center">
        <div className="bg-green-600 container w-100 h-50 ml-40 rounded-4xl">
          <h1 className="ml-15 font-Covored text-4xl text-white pt-10">
            About
          </h1>
          <p className="ml-15 font-Manrope3 text-white">
            Lorem ipsum is simply free text <br /> used by copytypinh
            refreshing.
            <br /> Neque porro est qui
          </p>
        </div>
      </div>
      <div className="text-start items-center -mt-50 ml-120">
        <div className="bg-[#C5CE38] container w-100 h-50 ml-40 rounded-4xl">
          <h1 className="ml-15 font-Covored text-4xl text-white pt-10">
            Contact
          </h1>
          <p className="ml-15 font-Manrope3 text-white">
            +1- (246) 333-0079 <br /> support@agrios.com
            <br />
            Mon - Fri: 7:00 am - 6:00 pm
          </p>
        </div>
      </div>
      <div className="-mt-50 text-start items-center ml-240">
        <div className="bg-green-600 container w-100 h-50 ml-40 rounded-4xl">
          <h1 className="ml-15 font-Covored text-4xl text-white pt-10">
            Address
          </h1>
          <p className="ml-15 font-Manrope3 text-white">
            66 Broklun Road Golden Street,
            <br /> New Your United States of <br />
            Ameriaca
          </p>
        </div>
      </div>
      <div className="mt-20 w-100 ml-40">
        <img src="/assets/img/Iframe - London Eye, London, United Kingdom.svg" />
      </div>
      <div className="text-center -mt-120">
        <h1 className="font-Covored text-[#EEC044]  text-2xl">Contact US</h1>
        <p className="text-4xl ml-32 font-Manrope2">Write a Message</p>
        <div>
          <input
            type="username"
            placeholder="Name"
            className="w-40 h-10 bg-white text-black border border-gray-500 rounded-lg pl-4 mt-10 ml-65"
          />
          <input
            type="email"
            placeholder="Email Address "
            className="w-40 h-10 bg-white text-black border border-gray-500 rounded-lg pl-4 ml-12"
          />
        </div>
        <input
          type="Message"
          placeholder="Write a Message"
          className="w-95 h-50 bg-white text-black border border-gray-500 rounded-lg mt-10 ml-65 p-5 pb-40"
        />
        <div className="-mt-35">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 mt-42">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
