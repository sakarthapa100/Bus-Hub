import React, { useState, useRef, useEffect } from 'react';

const ManageTicket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md  px-4 py-2 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-blue-500"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)} // Toggle on click as well
        >
          Manage Tickets
        </button>
      </div>

      {isOpen && (
        <div 
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-blue-600 ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-700" role="menuitem">Print Ticket</a>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-700" role="menuitem">Cancel Ticket</a>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-700" role="menuitem">Today's Trips</a>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-700" role="menuitem">Track My Bus</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTicket;