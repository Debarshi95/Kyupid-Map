import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-700 md:sticky top-0">
      <div className="p-4 md:w-5/6 mx-auto">
        <a href="/" className="text-white font-poppins font-semibold text-lg">
          KyuPid-Map
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
