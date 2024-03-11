'use client'
import React from 'react';
import HomeTop from '@/components/home/top';
import Dashboard from './dashboard/page';

const Home: React.FC = () => {
  return <main className="flex flex-grow flex-col items-center justify-between px-60">
    <Dashboard />
  </main>
};

export default Home;