import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=''>
      <ul className='flex space-x-10 text-2xl place-items-center justify-center py-8 bg-indigo-700 text-white'>
        <li> <Link to='/'> Home</Link></li>
        <li> <Link to='/contact'> Contact Us</Link></li>
        <li> <Link to='/aboutus'>About Us</Link> </li>
      </ul>
    </div>
  );
}

export default Header;
