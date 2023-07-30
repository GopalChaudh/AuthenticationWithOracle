import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex justify-between p-2'>
        <div className="left">
            <Link className='bg-green-200 text-gray-500 font-bold hover:text-black p-1 '>Home</Link>
        </div>
        <div className="text-center grid grid-cols-2 gap-x-2 text-white w-1/3 justify-between">
            <Link className=' bg-green-500  p-1 ' to='login'>Login</Link>
            <Link to='/register' className='bg-red-500 p-1  '>register</Link>
        </div>
    </div>
  )
}
