import React from 'react'
import Header from '../compo/Header'
import CreateTask from '../compo/CreateTask'
import AllTask from '../compo/AllTask'

const AdminDashboard = () => {
  return (
    
    <div className='w-[90%] h-screen mx-auto py-5'>
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard