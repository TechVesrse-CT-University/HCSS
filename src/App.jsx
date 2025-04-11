import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Teacher from './pages/Teacher'
import Student from './pages/Student'
import Login from './pages/login'
import AddStudent from './pages/AddStudent'
import Addquiz from './pages/Addquiz'
import Dashboard from './components/dashboard/Dashboard'
import Totalstudent from './components/totalstudent/Totalstudent'
import Front from './components/front/Front'
import Instruction from './components/instruction/Instruction'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front />} />
          <Route path='/login' element={<Login />} />
          <Route path='/instruction' element={<Instruction />} />


          {/* student routes */}
          <Route path='/student' element={<Student />} >

          </Route>
          {/* teacher routes */}
          <Route path='/teacher' element={<Teacher />} >
            <Route path="/teacher" element={<Dashboard />} />
            <Route path='/teacher/addstudent' element={<AddStudent />} />
            <Route path='/teacher/addquiz' element={<Addquiz />} />
            <Route path='/teacher/totalstudent' element={<Totalstudent/>} />
          </Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
