import React from 'react';

const SpecialiazationBox: React.FC = () => {
  return <button className='group flex flex-col justify-center h-16'>
    <p className='text-base font-medium mb-2 group-hover:underline group-hover:text-main-blue'>Financial Manager</p>
    <p className='text-xs font-normal'>45,002 Open positions</p>
  </button>
};

export default SpecialiazationBox;