import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./css/addstudent.css"
const AddStudent = () => {
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
  const createuser = (e) => {
    e.preventDefault();
    let data = {
      name: formdata.name,
      email: formdata.email,
      phone: formdata.phone,
      password: formdata.password,
    }
    axios.post("http://localhost:3000/api/register", data)
      .then((userData) => {
        console.log(userData);
        alert("User registered")

      }).catch(err => {
        console.log("Something went wrong",err);

      })
      setformdata({
        name: '',
        email: '',
        phone: '',
        password: '',
      });

  }
  return (
    <div className="addstudent">
      <div className='mv'>
        <form className=" frm max-w-sm mx-auto w-full border border-white p-5 pt-10 pb-10 rounded-xl" onSubmit={createuser}>
          <div>
            <h3 className='adhd text-white text-2xl text-center font-bold font-mono py-10'>Add Student</h3>
          </div>
          <div className=" fld mb-5 mt-5">
            <label for="name" className="addob">Your name</label>
            <input name='name' value={formdata.name} onChange={changehandler} type="text" id="name" className="ht bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" required />
          </div>
          <div className=" fld mb-5 mt-5">
            <label for="email" className="addob">Your email</label>
            <input name='email' value={formdata.email} onChange={changehandler} type="email" id="email" className=" ht bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" required />
          </div>
          <div className="fld mb-5 mt-5">
            <label for="phone" className="addob">Your phone</label>
            <input name='phone' value={formdata.phone} onChange={changehandler} type="number" id="phone" className="ht bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter phone" required />
          </div>
          <div className=" fld mb-5 mt-5">
            <label for="password" className="addob">Your password</label>
            <input type="password" name='password' onChange={changehandler} value={formdata.password}
              placeholder='Enter password'
              id="password" className="ht black-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className='ht mt-5'>
            <button type="submit" className=" sbtn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-38 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStudent