import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard'
import "./css/teacher.css"
const Teacher = () => {

  return (
    <div className='flex '>
      <div className='wt bg-gray-900 w-[18%] h-[95vh] text-white p-5 text-center '>
        <div className=' bgbtn border p-3 rounded-xl mb-2 border-gray-800 dark:hover:bg-blue-900 dark:hover:ring-1 dark:hover:ring-blue-600 dark:hover:pointer'>
          <Link to={"/teacher"}>Dashboard</Link>
        </div>
        <div className='bgbtn border p-3 rounded-xl mb-2 border-gray-800 dark:hover:bg-blue-900 dark:hover:ring-1 dark:hover:ring-blue-600 dark:hover:pointer'>
          <Link to={"/teacher/addstudent"}>Add Student</Link>
        </div>
        <div className='bgbtn  border p-3 rounded-xl border-gray-800 dark:hover:bg-blue-900 dark:hover:ring-1 dark:hover:ring-blue-600 dark:hover:pointer'>
          <Link to={"/teacher/addquiz"}>Add Quiz</Link>
        </div>
        <div className=' bgbtn border p-3 rounded-xl border-gray-800 dark:hover:bg-blue-900 dark:hover:ring-1 dark:hover:ring-blue-600 dark:hover:pointer'>
          <Link to={"/teacher/totalstudent"}>Total Student</Link>
        </div>
      </div>
      <div className='bg w-[85%] h-[95vh] text-white p-5 items-center'>
        <Outlet />
      
      </div>
    </div>   
  )
}

export default Teacher