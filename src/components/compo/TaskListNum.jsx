import React from 'react'

const TaskListNum = () => {
  return (
    <div className='w-full rounded-md bg-slate-100 mt-5 px-5 py-4 grid gap-3 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-4'>
        <div className='w-full rounded-md bg-red-200 p-6 flex flex-col justify-start gap-5'>
            <p className='text-2xl font-bold'>0</p>
            <p className='text-3xl font-bold'>New Task</p>
        </div>
        <div className='w-full rounded-md bg-red-200 p-6 flex flex-col justify-start gap-5'>
            <p className='text-2xl font-bold'>0</p>
            <p className='text-3xl font-bold'>New Task</p>
        </div>
        <div className='w-full rounded-md bg-red-200 p-6 flex flex-col justify-start gap-5'>
            <p className='text-2xl font-bold'>0</p>
            <p className='text-3xl font-bold'>New Task</p>
        </div>
        <div className='w-full rounded-md bg-red-200 p-6 flex flex-col justify-start gap-5'>
            <p className='text-2xl font-bold'>0</p>
            <p className='text-3xl font-bold'>New Task</p>
        </div>
    </div>
  )
}

export default TaskListNum