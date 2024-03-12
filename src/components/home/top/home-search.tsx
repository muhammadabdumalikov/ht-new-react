import { Button, Divider } from 'antd';
import { SearchOutlined, CompassOutlined } from '@ant-design/icons';

const HomeSearch: React.FC = () => {
  return <div className='flex h-14 w-[50%] bg-white px-6 items-center rounded justify-between'>
    <SearchOutlined className='text-main-blue' style={{ fontSize: 18 }} />
    <input className='w-28 text-gray-400 text-xs text-start font-normal' style={{ outline: 'none' }} placeholder='Jobs' />
    <Divider type='vertical' className='h-[60%] font-bold' />
    <CompassOutlined className='text-main-blue' style={{ fontSize: 18 }} />
    <input className='w-24 text-gray-400 text-xs text-start font-normal' style={{ outline: 'none' }} placeholder='Your Location' />
    <Button className='bg-main-blue h-10 w-18 text-white'>Find Job</Button>
  </div>
};

export default HomeSearch;