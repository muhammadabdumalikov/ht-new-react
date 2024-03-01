import React from 'react';
import VacancyBox from './vacany-box';

const HomeTop: React.FC = () => {
  return <div className='w-full h-[700px] bg-gray-100 px-48'>
    <div className='w-full h-[75%] bg-blue-700'>

    </div>

    <div className='w-full h-[25%] flex justify-between items-center'>
      <VacancyBox/>
      <VacancyBox/>
      <VacancyBox/>
      <VacancyBox/>
    </div>
  </div>
};

export default HomeTop;