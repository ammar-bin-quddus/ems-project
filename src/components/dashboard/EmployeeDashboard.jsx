import React from 'react'
import Header from '../compo/Header'
import TaskListNum from '../compo/TaskListNum'
import Tasks from '../taskList/Tasks'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='w-[90%] h-screen mx-auto py-5'>
        <Header data={data} />
        <TaskListNum data={data} />
        <Tasks data={data} />
    </div>
  )
}

export default EmployeeDashboard