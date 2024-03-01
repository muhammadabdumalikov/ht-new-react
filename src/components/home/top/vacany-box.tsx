import React from 'react';
import { TeamOutlined } from '@ant-design/icons';

const VacancyBox: React.FC = () => {
  return <div className='flex w-80 h-24 bg-white rounded-xl items-center p-4'>
      <div className='flex w-16 h-16 rounded bg-red-700 items-center justify-center mr-5'>
        <TeamOutlined style={{fontSize: 26}}/>
      </div>
      <div className='flex flex-col h-16 justify-between py-2'>
        <p className='text-gray-950 text-xl font-medium'>126,223</p>
        <p className='text-gray-400 text-sm font-normal'>Live jobs</p>
      </div>
  </div>
};

export default VacancyBox;