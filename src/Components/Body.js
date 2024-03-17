import React, { useState } from 'react';
import Navbar from './Navbar';
import Button from './Button';

import Table from './Table';
import { data } from './Constants';
import Footer from './Footer';

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text.toLowerCase());
  };

  const filteredData = data.filter(item =>
    (item.Brand && item.Brand.toLowerCase().includes(searchText)) ||
    (item.Description && item.Description.toLowerCase().includes(searchText)) ||
    (item.Members && item.Members.toLowerCase().includes(searchText)) ||
    (item.Categories && item.Categories.toLowerCase().includes(searchText)) ||
    (item.tags && item.tags.toLowerCase().includes(searchText)) ||
    (item.nextMeeting && item.nextMeeting.toLowerCase().includes(searchText))
  );

  return (
    <div className='ring-1 ring-gray-400 m-2 p-2 rounded-md w-full'>
      <Navbar onSearch={handleSearch} />
      <hr />
      <Button/>
      <hr />
      <Table data={filteredData} />
      <div className='ml-[35%] mt-[1%]'>
      
      <Footer/>
      </div>
    </div>
  );
};

export default Body;
