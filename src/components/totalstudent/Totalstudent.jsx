import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "../totalstudent/totalstudent.css"
function Totalstudent() {
  const [student, setstudent] = React.useState([])
  useEffect(() => {
    axios.post("http://localhost:3000/api/all").then((res) => {
      setstudent(res?.data?.data)
      localStorage.setItem('alluser', JSON.stringify(res.data.data))
    })
  }, [])
  return (


    <div className="">
      <h2 className="tthd">All Users</h2>
      {student.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="total space-y-2">
          {student.map((student, index) => (
            <li key={student._id || index} className="boxx">
              <p className='pr'><strong>Name:</strong> {student.name}</p>
              <p className='pr'><strong>Email:</strong> {student.email}</p>
              <p className='pr'><strong>Phone:</strong> {student.phone}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="rf"><button onClick={() => {
        window.location.reload();
      }}>Refresh Users</button></div>
    </div>
  )
}

export default Totalstudent



