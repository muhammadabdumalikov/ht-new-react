import React from 'react';
import { TeamOutlined } from '@ant-design/icons';

const VacancyBox: React.FC = () => {
  return <button className='group flex transition delay-50 hover:scale-105 hover:-translate-y-2 w-60 h-20 bg-white rounded-md items-center p-3'>
    <div className='flex w-14 h-14 rounded bg-light-blue group-hover:bg-main-blue items-center justify-center mr-5 text-main-blue group-hover:text-white'>
      <TeamOutlined style={{ fontSize: 22 }} />
    </div>
    <div className='flex flex-col h-16 justify-between py-2'>
      <p className='text-black text-lg font-medium'>126,223</p>
      <p className='text-gray-400 text-xs text-start font-normal'>Live jobs</p>
    </div>
  </button>
};

export default VacancyBox;