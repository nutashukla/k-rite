import React, { useState } from 'react';
import { SEARCH_PNG } from './Constants';

const Navbar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText);
    }
  };

  return (
    <div className='flex justify-between pb-2'>
      <h1 className='font-bold'>Products</h1>
      <div className='flex bg-slate-50 h-8 rounded-lg'>
        <img className="h-4 w-4 m-2" src={SEARCH_PNG} alt="search" />
        <input 
          value={searchText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="h-8 bg-slate-50 rounded-lg" 
          type="text" 
          placeholder='Search for...' 
        />
      </div>
    </div>
  );
};

export default Navbar;
