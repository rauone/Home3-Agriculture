const About = () => {
  return (
    <section className="bg-white">
        <div className="relative h-72 bg-cover bg-center flex items-center justify-center bg-[url('/images/bg-photo.png')]">
            <h1 className="relative z-10 text-white text-4xl font-bold">About</h1>
        </div>


      {/* Основной контент */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Блок с изображениями (СЛЕВА) */}
        <div className="relative">
          <img
            src="/images/3photos.png"
            alt="Agriculture"
          />
        </div>

        {/* Текстовый блок (СПРАВА) */}
        <div className="flex flex-col justify-center">
          <span className="text-yellow-600 uppercase font-semibold tracking-wide">Get To Know Us</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 leading-tight">
            The Best Agriculture Market
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            There are many variations of passages of lorem available, but the majority have suffered alteration.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 text-lg mr-2">✔</span> Susce risus suscipit egestas leo
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-lg mr-2">✔</span> Etiam etbibendum dignissim posuere
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-lg mr-2">✔</span> Lorem ipsum on the trend to repeat
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition">
            Discover More
          </button>
        </div>
      </div>

      {/* Видео секция */}
      <div className="relative mt-16">
        <img
          src="/images/About-video.png"
          alt="Eco Friendly Products"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center gap-4">
            {/* Кнопка */}
            <button className="bg-white p-5 rounded-full shadow-lg hover:scale-110 transition">
                ▶️
            </button>
            
            {/* Текст */}
            <h3 className="text-2xl font-bold max-w-[80%]">
                ECO-Friendly Products can be Made from Scratch
            </h3>
        </div>

      </div>

      <img src="/images/About-ads.png" alt="Banner" className="w-full h-[184px] object-cover" />


    <div className="container mx-auto px-6">
      {/* Testimonials */}
        <section className="relative bg-[#F9F8F3] py-16">
        {/* Фоновое изображение */}
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/background-pattern.png')" }} 
        />

        {/* Контейнер */}
        <div className="relative max-w-[1200px] mx-auto text-center px-6">
            {/* Заголовки */}
            <p className="text-[#C4A65A] text-lg font-medium">Our Testimonials</p>
            <h2 className="text-4xl font-bold text-[#333] mt-2">What They Say</h2>

            {/* Блок с отзывами */}
            <div className="mt-12 flex justify-center gap-8">
            
            {/* Отзыв 1 */}
            <div className="relative bg-white shadow-lg rounded-lg p-8 w-[500px] flex gap-6 items-center">
                {/* Фото пользователя */}
                <div className="relative w-24 h-24">
                <img src="/images/About-1avatar.png" alt="Bonnie Tolbet" className="w-full h-full rounded-lg object-cover" />
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white">--</span>
                </div>
                </div>
                
                {/* Текст отзыва */}
                <div className="text-left">
                <p className="text-gray-600 text-sm">
                    There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.
                </p>
                <h4 className="font-bold text-lg mt-4">Bonnie Tolbet</h4>
                <span className="text-gray-500 text-sm">Customer</span>
                </div>
            </div>

            {/* Отзыв 2 */}
            <div className="relative bg-white shadow-lg rounded-lg p-8 w-[500px] flex gap-6 items-center">
                {/* Фото пользователя */}
                <div className="relative w-24 h-24">
                <img src="/images/About-2avatar.png" alt="Sarah Albert" className="w-full h-full rounded-lg object-cover" />
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white">--</span>
                </div>
                </div>

                {/* Текст отзыва */}
                <div className="text-left">
                <p className="text-gray-600 text-sm">
                    There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.
                </p>
                <h4 className="font-bold text-lg mt-4">Sarah Albert</h4>
                <span className="text-gray-500 text-sm">Customer</span>
                </div>
            </div>

            </div>
        </div>
        </section>


      {/* Farmers Section */}
      <div className="text-center mt-20 mb-10">
        <span className="text-yellow-600 uppercase font-semibold tracking-wide">Team Members</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-3">Meet Our Farmers</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Kevin Smith", image: "/images/farmer1.jpg" },
          { name: "Jessica Brown", image: "/images/farmer2.jpg" },
          { name: "David Martin", image: "/images/farmer3.jpg" }
        ].map((farmer, index) => (
          <div key={index} className="relative">
            <img src={farmer.image} alt={farmer.name} className="w-full h-80 object-cover rounded-lg shadow-lg" />
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md flex items-center">
              <img src="/images/icon-share.png" alt="Share" className="w-6 h-6 mr-2" />
              <div>
                <h4 className="text-gray-900 font-bold">{farmer.name}</h4>
                <span className="text-gray-500 text-sm">Farmer</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default About;
