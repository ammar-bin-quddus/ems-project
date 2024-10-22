import React from 'react'

const Tasks = () => {
  return (
    <div id='tasklist' className='w-full h-[50%] py-4 mt-8  
                    flex justify-start items-center 
                    gap-4 flex-nowrap overflow-x-auto'>
        <div className='flex-shrink-0 flex flex-col justify-between h-full p-4 w-[300px] rounded-md bg-yellow-300'>
            <div className='flex justify-between items-center text-xs'>
                <p className='bg-red-400 px-2 py-1'>High</p>
                <p>20 Feb 2024</p>
            </div>
            <p className='text-2xl font-bold'>Go to sleep</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Quae, repellat.Lorem ipsum dolor sit amet consectetur 
               adipisicing elit. Quia, placeat?</p>
        </div>
        
    </div>
  )
}

export default Tasks