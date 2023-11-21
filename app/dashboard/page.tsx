"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Cross, Menu, PanelTopClose, X } from 'lucide-react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="p-4 md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-300 focus:outline-none focus:text-gray-400"
          >
            {!isOpen ? (
              <Menu size={24} className=' text-white' />
            ) : (
             <X size={24} className=' text-white' />
            )}
            
          </button>
        </div>
      <aside className={`bg-gray-800 text-gray-100 min-h-screen w-64 md:w-auto md:flex md:flex-col ${isOpen ? 'block' : 'hidden'} md:flex flex-col gap-y-5 py-1`}>
     
        <nav>
          <ul className="py-4 flex flex-col gap-y-5">
            <li>
              <Link className='block py-2 px-4' href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className='block py-2 px-4' href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className='block py-2 px-4' href="/dashboard/settings">
                Settings
              </Link>
            </li>
            <li>
              <Link className='block py-2 px-4' href="/dashboard/profile">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* Content */}
      <main className="flex-1 p-4 bg-white min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Welcome to the Dashboard!</h1>
          <p className="mt-4">This is the home page content.</p>
        </div>

        {
          // Add more dashboard content here
           
        }
      </main>
    </div>
  );
};

export default Dashboard;
