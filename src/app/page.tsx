'use client'
import React from 'react';
import HomeTop from '@/components/home/top';
import PopularSection from '@/components/home/popular';

const Home: React.FC = () => {
  return <main className="flex-grow items-center bg-light-gray justify-between">
    <HomeTop />
    <PopularSection />
  </main>
};

export default Home;