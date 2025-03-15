
const Projects = () => {
  const items = [
    { title: "Easy Harvesting", image: "/public/images/Projects/Projects-Easy1.png" },
    { title: "Agriculture Farming", image: "/public/images/Projects/Projects-Agriculture2.png" },
    { title: "Ecological Farming", image: "/public/images/Projects/Projects-Ecological3.png" },
    { title: "Organic Solutions", image: "/public/images/Projects/Projects-Organic4.png" },
    { title: "Fresh Products", image: "/public/images/Projects/Projects-Fresh5.png" },
    { title: "Healthy Food", image: "/public/images/Projects/Projects-Healthy 6.png" },
  ];

  return (
    <>
      <div className="relative h-72 bg-cover bg-center flex flex-col items-center justify-center w-full bg-[url('/images/bg-photo.png')]">
        <h1 className="text-white font-Manrope3">HOME / PROJECTS</h1>
        <p className="text-5xl text-white font-Manrope2 mt-2">Projects</p>
      </div>
    <section className="w-[1170px] mx-auto py-20">
      <div className="grid grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-[370px] h-[570px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-end p-4">
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Projects;
  