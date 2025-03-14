import React from "react";

const Services = () => {
  return (
    <section className="bg-[#FAF8F6]">
        <div className="relative h-72 bg-cover bg-center flex items-center justify-center bg-[url('/images/bg-photo.png')]">
            <h1 className="relative z-10 text-white text-4xl font-bold">Services</h1>
        </div>
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 py-20">
        {/* Левый сайдбар */}
        <aside>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✔ Agriculture Products</li>
              <li>✔ Organic Products</li>
              <li>✔ Fresh Vegetables</li>
              <li>✔ Dairy Products</li>
              <li>✔ Harvest</li>
            </ul>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg mt-6">
            <h4 className="text-lg font-semibold">Need Help?</h4>
            <p className="text-sm mt-2">Call us and we will connect you with a farm expert.</p>
            <p className="text-xl font-bold mt-2">+12 (000) - 9430</p>
            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg w-full">
              Start Shopping Now
            </button>
          </div>
        </aside>

        {/* Основной контент */}
        <div className="md:col-span-2">
          {/* Главное изображение */}
          <div className="relative">
            <div className="w-full h-80 rounded-lg flex items-center justify-center bg-[url('/images/Services-1photos.png')]">
            </div>
          </div>

          {/* Заголовок и описание */}
          <h2 className="text-3xl font-bold text-gray-900 mt-6">Agriculture Products</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Lorem ipsum is simply the best text used by copywriting professionals.
          </p>

          {/* Блок "Our Benefits" */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="flex bg-white p-4 rounded-lg shadow-md items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">?</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-900">Our Benefits</h4>
                <p className="text-gray-600 text-sm">We provide the best quality for your health.</p>
              </div>
            </div>
            <div className="flex bg-white p-4 rounded-lg shadow-md items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">?</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-900">Organic Farming</h4>
                <p className="text-gray-600 text-sm">We ensure sustainable and organic growth.</p>
              </div>
            </div>
          </div>

          {/* CTA-кнопки */}
          <div className="mt-10 space-y-4">
            {[
              "World’s hottest destinations for vegans",
              "Let’s grow naturally and live naturally",
              "Best vegetables for your healthy hair"
            ].map((text, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
                <span className="text-gray-900 font-semibold">{text}</span>
                <button className="bg-yellow-500 text-white p-2 rounded-lg">{">"}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
