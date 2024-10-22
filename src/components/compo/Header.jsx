import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Hello <br/> <span className='text-3xl font-bold'>Ammar 👋</span></h1>
        <button className='bg-emerald-800 px-4 py-2 text-white rounded-md text-md'>Log Out</button>
    </div>
  )
}

export default Header