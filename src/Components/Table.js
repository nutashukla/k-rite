import React from 'react';
import { LOGO_URL, MEMBER_URL } from './Constants';

const Table = ({ data }) => {
  return (
    <div className="flex justify-center">
      <table className="m-2 p-2 w-full border-collapse border">
        <thead>
          <tr className="p-2">
            <th className="w-1/6 p-2 border">Brand</th>
            <th className="p-2 w-1/6 border">Description</th> {/* Corrected property name */}
            <th className="p-2 w-1/6 border">Members</th>
            <th className="p-2 w-1/6 border">Categories</th>
            <th className="p-2 w-1/6 border">Tags</th>
            <th className="p-2 w-1/6 border">Next meeting</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="ring-1 ring-gray-200" key={index}>
              <td className="p-2 border">
                <div className="flex">
                  <img className = "h-6 w-6 " src={LOGO_URL} alt="" />
                  <input className="mr-1" type="checkbox" />
                  <span>{item.Brand}</span>
                </div>
              </td>
              <td className="p-2 border">{item.Discription}</td> {/* Corrected property name */}
              <td className="p-2 border">
                <div className='flex'>
                <img className="h-8 w-8 rounded-lg"src={MEMBER_URL} alt="" />
                <img className="h-8 w-8 rounded-lg"src={MEMBER_URL} alt="" />
                <img className="h-8 w-8 rounded-lg"src={MEMBER_URL} alt="" />
                  </div>{item.Members}</td>
              <td className="p-2 border text-purple-500">{item.Categories}</td>
              <td className="p-2 border">{item.tags}</td>
              <td className="p-2 border text-green-500">{item.nextMeeting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
