import React from 'react'
import { useState } from 'react'
import { DROP_DOWN_URL, DROP_UP_URL, FOLDER_PNG, LOGO_URL } from './Constants'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const [isProjectOpen, setIsProjectOpen] = useState(false)
    const [isSaleOpen, setIsSaleOpen] = useState(false)
    const [isDesignOpen, setIsDesignOpen] = useState(false)
    const handleClick = ()=>{
        setIsProjectOpen(!isProjectOpen)
        setIsDesignOpen(false)
        setIsSaleOpen(false)
    }
    const handleSaleClick = ()=>{
        setIsSaleOpen(!isSaleOpen)
        setIsDesignOpen(false)
        setIsProjectOpen(false)
    }
    const handleDesignClick = ()=>{ 
        setIsDesignOpen(!isDesignOpen)
        setIsProjectOpen(false)
        setIsSaleOpen(false)
    }
  return (
    <div className='w-[23%] m-2 rounded-md ring-1 ring-gray-300 '>
        <div className='flex'>
            <img className = "w-12 h-12  p-1"src={LOGO_URL} alt="Logo" />
            <div>
               <h1 className="text-gray-400 ">INC</h1>
               <h1 className=' font-bold'>InnovateHub</h1>
            </div>
            <img className = " ml-[20%] w-8 h-8 mt-2 p-1 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" alt="" />
            </div>
            <div className='m-2 p-2 ring-1 ring-gray-300 rounded-md'>
            <div className='flex justify-between m-1 p-1 hover:bg-slate-50'>
                <h3 className='font-bold'>Design team</h3>
                <button className='text-gray-400 ring-1 ring-gray-400 rounded-lg px-1 '>X + 1</button>
            </div>
            <hr/>
            <div className='flex justify-between m-1 p-1 hover:bg-slate-50'>
                <h3 className='font-bold'>Marketing team</h3>
                <button className='text-gray-400 ring-1 ring-gray-400 rounded-lg px-1 '>X + 1</button>
            </div>
            <hr />
            <div className='flex justify-between m-1 p-1 hover:bg-slate-50'>
                <h3 className='font-bold'>Development team</h3>
                <button className='text-gray-400 ring-1 ring-gray-400 rounded-lg px-1 '>X + 1</button>
            </div>
            <hr />
            <div className='m-1 p-1 text-gray-400'>
                <img src="" alt="" />
                <h3>Creat a team</h3>
            </div> 
            </div>
            <div className='flex justify-between m-2 p-2'>
            <h3 className='text-gray-400'>FOLDERS</h3>
            <h3 className='text-gray-400'>+</h3>
            </div>
            <div>
                <div className='flex justify-between hover:bg-slate-50 m-2 pl-2'>
                    <div className='flex'>
                    <img className='w-4 h-4 mt-1' src={FOLDER_PNG} alt="" />
                    <h1 className=' font-bold'>Products</h1>
                    </div>
                <img className = "h-4 w-4 m-2" onClick={handleClick} src={isProjectOpen ? DROP_DOWN_URL : DROP_UP_URL} alt="dropdown" />
                </div>
                {isProjectOpen ? 
                <div className='ml-6'>
                    <h3 className='pb-2 hover:bg-slate-50 cursor-pointer'>Roadmap </h3>                   
                    <h3 className='pb-2 hover:bg-slate-50'>Feedback</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Performance</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Team</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Analytics</h3>
                </div> : null}
            </div>
            <div>
                <div className='flex justify-between m-2 pl-2 hover:bg-slate-50'>
                <div className='flex'>
                    <img className='w-4 h-4 mt-1' src={FOLDER_PNG} alt="" />
                    <h1 className=' font-bold'>Sales</h1>
                    </div>
                <img className = "h-4 w-4 m-2" onClick={handleSaleClick} src={isSaleOpen ? DROP_DOWN_URL : DROP_UP_URL} alt="dropdown" />
                </div>
                {isSaleOpen ? 
                <div className='ml-6'>
                <h3 className='pb-2 hover:bg-slate-50 cursor-pointer'>Roadmap</h3>                 
                <h3 className='pb-2 hover:bg-slate-50'>Feedback</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Performance</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Team</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Analytics</h3>
                </div> : null}
            </div>
            <div>
                <div className='flex justify-between m-2 pl-2 hover:bg-slate-50'>
                <div className='flex'>
                    <img className='w-4 h-4 mt-1' src={FOLDER_PNG} alt="" />
                    <h1 className=' font-bold'>Design</h1>
                    </div>
                <img className = "h-4 w-4 m-2" onClick={handleDesignClick} src={isDesignOpen ? DROP_DOWN_URL : DROP_UP_URL} alt="dropdown" />
                </div>
                {isDesignOpen ? 
                <div className='ml-6'>
                    <h3 className='pb-2 hover:bg-slate-50 cursor-pointer'>Roadmap</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Feedback</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Performance</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Team</h3>
                    <h3 className='pb-2 hover:bg-slate-50'>Analytics</h3>
                </div> : null}
                </div>
                <div>
                <div className='ml-[5%] flex'>
                    <img className='w-4 h-4 mt-1' src={FOLDER_PNG} alt="" />
                    <h1 className=' font-bold'>Office</h1>
                    </div>
                    <div className=' ml-[5%] mt-2 flex'>
                    <img className='w-4 h-4 mt-1' src={FOLDER_PNG} alt="" />
                    <h1 className=' font-bold'>Legal</h1>
                    </div>
                <div className='mt-[20%]'>
                <h1 className='hover:bg-slate-50 m-2 p-2'>Invite teammates</h1>
                <div className='flex justify-between hover:bg-slate-50'>
                <h1 className='f m-2 p-2'>Help and first steps</h1>
                <h1 className='text-gray-400 m-2 p-2'>O/0</h1>
                </div>
                <div className='flex justify-between'>
                <h3 className='m-2 p-2'>days left on trail</h3>
               <button className='m-2 p-2 bg-black text-white rounded-md'>Add biling</button>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Sidebar