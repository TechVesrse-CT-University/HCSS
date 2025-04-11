import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTeacher = () => {
  const nav = useNavigate("")
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  })


  const changehandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const createuser = async () => {
    let responsedata;
    await fetch('http://localhost:3000/teacher/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdata)
    }).then((response) => response.json()).then((data) => responsedata = data)
    if (responsedata.success) {
      localStorage.setItem('auth-token', responsedata.token)
      window.location.replace("/")
    }
    else {
      alert("user already exist")
    }
  }
  return (
    <div className="AddTeacher">
      <div className='items-center'>
        <form className="max-w-sm mx-auto w-full border border-white p-5 pt-10 pb-10 rounded-xl" onSubmit={changehandler}>
          <div>
            <h3 className='text-white text-2xl text-center font-bold font-mono py-10'>Add Student</h3>
          </div>
          <div className="mb-5">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <input name='name' value={formdata.name} onChange={changehandler} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" required />
          </div>
          <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input name='email' value={formdata.email} onChange={changehandler} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" required />
          </div>
          <div className="mb-5">
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
            <input name='phone' value={formdata.phone} onChange={changehandler} type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter phone" required />
          </div>
          <div className="mb-5">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name='password' onChange={changehandler} value={formdata.password}
              placeholder='Enter password'
              id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className='flex justify-center mt-10'>
            <button type="submit" onClick={() => { createuser() }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-38 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTeacher