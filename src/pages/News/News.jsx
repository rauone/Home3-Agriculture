import React from 'react';

const News = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Заголовок с изображением */}
      <div className="relative h-72 bg-cover bg-center flex flex-col items-center justify-center w-full bg-[url('/images/bg-photo.png')]">
        <h1 className="text-white font-Manrope3">HOME / NEWS</h1>
        <p className="text-5xl text-white font-Manrope2 mt-2">News</p>
      </div>

      {/* Сетка с картинками */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mt-75">
        <div className="flex-row">
          <img src='/newsphoto/1.svg' alt="News 1" className='w-full h-auto max-w-xs rounded-xl -z-5'/>
          <div className='relative'>
            <div className='relative flex justify-center -mt-5'>
            <p className='text-center bg-green-500 w-30 h-10 text-white rounded-[8px] pt-2'> 05 July 2022 </p>
            </div>
            <div className='flex justify-center text-[15px] text-gray-500 mt-2'>
              <p className='flex'>
              <img src="/newsphoto/Author.svg" alt="1" />
               by Kevin Martin
              </p>
              <p className='flex pl-4'>
              <img src="/newsphoto/Comment.svg" alt="2" />
              0 comment
              </p>
            </div>
            <p className="text-sm font-semibold text-[20px]  leading-5 text-black text-center mt-2">
            Bringing Food<br />
            Production Back To<br />
            Cities
            </p>
          </div>
        </div>
        <div className="flex-row">
          <img src='/newsphoto/2.svg' alt="News 2" className='w-full h-auto max-w-xs rounded-xl' /><div className='relative'>
            <div className='relative flex justify-center -mt-5'>
            <p className='text-center bg-green-500 w-30 h-10 text-white rounded-[8px] pt-2'> 05 July 2022 </p>
            </div>
            <div>
            <div className='flex justify-center text-[15px] text-gray-500 mt-2'>
              <p className='flex'>
              <img src="/newsphoto/Author.svg" alt="1" />
               by Kevin Martin
              </p>
              <p className='flex pl-4'>
              <img src="/newsphoto/Comment.svg" alt="2" />
              0 comment
              </p>
            </div>         

            </div>
            <p className="text-sm font-semibold text-[20px]  leading-5 text-black text-center">
            The Future of <br />
            Farming, Smart <br />
            Irrigation Solutions
            </p>
          </div>
        </div>
        <div className="flex-row">
          <img src='/newsphoto/3.svg' alt="News 3" className='w-full h-auto max-w-xs rounded-xl' /><div className='relative'>
            <div className='relative flex justify-center -mt-5'>
            <p className='text-center bg-green-500 w-30 h-10 text-white rounded-[8px] pt-2'> 05 July 2022 </p>
            </div>
            <div>
            <div className='flex justify-center text-[15px] text-gray-500 mt-2'>
              <p className='flex'>
              <img src="/newsphoto/Author.svg" alt="1" />
               by Kevin Martin
              </p>
              <p className='flex pl-4'>
              <img src="/newsphoto/Comment.svg" alt="2" />
              0 comment
              </p>
            </div>
            </div>
            <p className="text-sm font-semibold text-[20px]  leading-5 text-black text-center">
            Agronomy and <br />
            relation to Other <br />
            Sciences
            </p>
          </div>
        </div>
        <div className="flex-row">
          <img src='/newsphoto/4.svg' alt="News 4" className='w-full h-auto max-w-xs rounded-xl' /><div className='relative'>
            <div className='relative flex justify-center -mt-5'>
            <p className='text-center bg-green-500 w-30 h-10 text-white rounded-[8px] pt-2'> 05 July 2022 </p>
            </div>
            <div>
            <div className='flex justify-center text-[15px] text-gray-500 mt-2'>
              <p className='flex'>
              <img src="/newsphoto/Author.svg" alt="1" />
               by Kevin Martin
              </p>
              <p className='flex pl-4'>
              <img src="/newsphoto/Comment.svg" alt="2" />
              0 comment
              </p>
            </div>
            </div>
            <p className="text-sm font-semibold text-[20px]  leading-5 text-black text-center">
            We grow products <br />
            with the organic <br />
            Farming
            </p>
          </div>
        </div>
        <div className="flex-row">
          <img src='/newsphoto/5.svg' alt="News 5" className='w-full h-auto max-w-xs rounded-xl' /><div className='relative'>
            <div className='relative flex justify-center -mt-5'>
            <p className='text-center bg-green-500 w-30 h-10 text-white rounded-[8px] pt-2'> 05 July 2022 </p>
            </div>
            <div>
            <div className='flex justify-center text-[15px] text-gray-500 mt-2'>
              <p className='flex'>
              <img src="/newsphoto/Author.svg" alt="1" />
               by Kevin Martin
              </p>
              <p className='flex pl-4'>
              <img src="/newsphoto/Comment.svg" alt="2" />
              0 comment
              </p>
            </div>
            </div>
            <p className="text-sm font-semibold text-[20px]  leading-5 text-black text-center">
            A Quick Solution to <br />
            Low Milk Production <br />
            in Zimbabwe
            </p>
          </div>
        </div>
        <div className="flex-row">
          <img src='/newsphoto/6.svg' alt="News 6" className='w-full h-auto max-w-xs rounded-xl' /><div className='relative'>
            <div className='relative flex justify-center -mt-5'>
            <p className='text-center bg-green-500 w-30 h-10 text-white rounded-[8px] pt-2'> 05 July 2022 </p>
            </div>
            <div>
            <div className='flex justify-center text-[15px] text-gray-500 mt-2'>
              <p className='flex'>
              <img src="/newsphoto/Author.svg" alt="1" />
               by Kevin Martin
              </p>
              <p className='flex pl-4'>
              <img src="/newsphoto/Comment.svg" alt="2" />
              0 comment
              </p>
            </div>
            </div>
            <p className="text-sm font-semibold text-[20px]  leading-5 text-black text-center">
            Winter wheat harvest <br />
            organic gather nice <br />
            moment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;