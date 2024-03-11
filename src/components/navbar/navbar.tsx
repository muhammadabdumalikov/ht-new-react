// components/Navbar.tsx
'use client'
import React, { useState } from "react";
import Link from "next/link";
import { SunOutlined, SearchOutlined } from '@ant-design/icons';
import './navbar.css';
import { Form, Input } from "antd";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = () => {
    // Implement your search logic here using the searchValue state
    console.log('Searching for:', searchValue);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex w-[70%] items-center">
          <SunOutlined className="mr-2 anticon-sun-outlined" height={50} width={50} />
          <h1 className="font-bold">Jobpilot</h1>

          <Form className="w-[70%] ml-10" onFinish={handleSubmit}>
            <Form.Item name="searchInput" className="m-0">
              <Input
                placeholder="Job, title, keyword, company"
                prefix={<SearchOutlined className="mr-1" />}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Form.Item>
          </Form>
        </div>


        <div className="hidden w-[30%] md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
            </li>
            <li>
              <Link href="/personal-profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">User Profile</Link>
            </li>
            <li>
              <Link href="company-profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Company Profile</Link>
            </li>
            <li>
              <Link href="edit-profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Edit Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
