import React from 'react'

const Footer = () => {
  return (
    <div>
        <div>
            <button className='p-2 m-2 ring-1 ring-slate-300 rounded-lg'><input type="checkbox" />selected</button>
            <button className='p-2 m-2 ring-1 ring-slate-300 rounded-lg'>Archive</button>
            <button className='p-2 m-2 ring-1 text-red-600 ring-slate-300 rounded-lg'> Delete </button>
            <button className='p-2 m-2 ring-1 ring-slate-300 rounded-lg'> More</button>
        </div>
    </div>
  )
}

export default Footer