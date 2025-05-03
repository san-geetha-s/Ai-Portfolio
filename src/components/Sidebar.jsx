import { FaUser, FaProjectDiagram, FaCode, FaEnvelope, FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(true);

  const tabs = [
    { key: 'about', icon: <FaUser />, label: 'About' },
    { key: 'projects', icon: <FaProjectDiagram />, label: 'Projects' },
    { key: 'skills', icon: <FaCode />, label: 'Skills' },
    { key: 'contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white p-2 bg-gray-800 rounded-md shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-850 border-r border-gray-700 p-4 z-40 transition-all duration-300 ease-in-out
        ${isOpen ? 'w-48 translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:w-48 md:static md:block`}
      >
        <ul className="space-y-4">
          {tabs.map(tab => (
            <li key={tab.key}>
              <button
                onClick={() => setActiveTab(tab.key)}
                className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded-md transition duration-200 ease-in-out 
                  ${activeTab === tab.key 
                    ? 'bg-gray-700 text-white font-semibold' 
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                {tab.icon} {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
