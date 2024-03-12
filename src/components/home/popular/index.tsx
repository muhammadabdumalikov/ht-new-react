import React from 'react';
import SpecialiazationBox from './specialization-box';

const PopularSection: React.FC = () => {
  return <div className='w-full flex-grow bg-white px-60 py-12'>
    <h2 className='text-3xl font-medium mb-4'>Most Popular Vacancies</h2>

    <div className='w-full grid grid-cols-4 gap-5'>
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
      <SpecialiazationBox />
    </div>
  </div>
};

export default PopularSection;