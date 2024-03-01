'use client'
import React from 'react';
import HomeTop from '@/components/home/top';

const Home: React.FC = () => {
  return <main className="flex flex-grow flex-col items-center justify-between px-60">
    <HomeTop />
  </main>
};

export default Home;