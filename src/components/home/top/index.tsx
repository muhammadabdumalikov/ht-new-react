import React from 'react';
import VacancyBox from './vacany-box';
import HomeSearch from './home-search';

const HomeTop: React.FC = () => {
  return <div className='flex flex-col justify-between w-full h-[650px] px-60 py-20'>
    <div className='w-full bg-light-gray mt-2'>
      <div className='w-[55%]'>
        <h1 className='w-[90%] text-5xl font-medium leading-tight'>Find a job than suits your interest & skills.</h1>

        <p className='w-[80%] text-gray-400 text-sm text-start font-normal my-4'>
          Using the same line-height across different font sizes is generally not going to give you good typographic results.
        </p>
      </div>

      <HomeSearch />
    </div>

    <div className='w-full flex justify-between items-center'>
      <VacancyBox />
      <VacancyBox />
      <VacancyBox />
      <VacancyBox />
    </div>
  </div>
};

export default HomeTop;