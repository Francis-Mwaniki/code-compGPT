// components/Sidebar.js
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`w-64 bg-gray-800 text-gray-100 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <nav>
        <ul className="py-4">
          <li>
            <Link href="/">
              <a className="block py-2 px-4">Home</a>
            </Link>
          </li>
          {/* Add more sidebar links */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
