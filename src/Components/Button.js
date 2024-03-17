import React from 'react'

const Button = () => {
  return (
    <div className='flex justify-between'>
    <div className='flex'>
        <button className='m-1 p-1 ring-1 ring-slate-200 rounded-lg'>All brands</button>
        <button className='m-1 p-1 ring-1 ring-slate-200 rounded-lg'>Desk</button>
        <button className='m-1 p-1 ring-1 ring-slate-200 rounded-lg'>Tags</button>
        <button className='m-1 p-1 ring-1 ring-slate-200 rounded-lg'>Sort</button>
        <button className='m-1 p-1 ring-1 ring-slate-200 rounded-lg'>Filter</button>
    </div>
    <div className='flex'>
    <button className='m-1 p-1 ring-1 ring-slate-200 rounded-lg'>Meeting</button>
        <button className='m-1 p-1 ring-1 ring-slate-200 rounded-lg'>Import/Export</button>
    </div>
</div>
  )
}

export default Button