import React from 'react'

const CreateTask = () => {
  return (
    <div className='w-full mt-8 flex flex-col gap-5 sm:flex-row justify-between sm:items-center'>
            <div className='w-full sm:w-1/2'>
                <p className='font-bold text-lg'>Task Title</p>
                <input className='w-full px-3 py-2 outline-none border border-gray-800' type="text" placeholder='Make a UI design' />
                <p className='mt-3 font-bold text-lg'>Date</p>
                <input className='w-full px-3 py-2 outline-none border border-gray-800' type="date" placeholder='DD/MM/YYYY' />
                <p className='mt-3 font-bold text-lg'>Assign to</p>
                <input className='w-full px-3 py-2 outline-none border border-gray-800' type="text" placeholder='Employee Name' />
                <p className='mt-3 font-bold text-lg'>Category</p>
                <input className='w-full px-3 py-2 outline-none border border-gray-800' type="text" placeholder='design, dev, etc' />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col justify-between gap-3'>
                <p className='text-lg font-bold'>Description</p>
                <textarea className='p-3 outline-none border border-gray-500' rows={8} cols={8}></textarea>
                <button className='border border-gray-500 py-3 bg-emerald-800 text-white rounded-md'>Create Task</button>
            </div>
    </div>
  )
}

export default CreateTask