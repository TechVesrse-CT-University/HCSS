import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './css/login.css'
import pic3 from "../assets/pic-3.webp"
const Login = () => {
  const nav = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const changehandler = async (e) => {
    e.preventDefault()

    const data = { email, password }

    try {
      const response = await axios.post("http://localhost:3000/api/login", data)
      const resData = response.data

      if (resData.success) {
        // ✅ Save token and user data to localStorage
        localStorage.setItem("token", resData.token)
        localStorage.setItem("loggedInUser", JSON.stringify(resData.data))

        // ✅ Redirect based on userType
        if (resData.data.userType === 1) {
          nav("/teacher")
        } else if (resData.data.userType === 2) {
          nav("/student")
        } else {
          alert("Unknown user type!")
        }
      } else {
        alert(resData.message || "Invalid credentials!")
      }
    } catch (error) {
      console.error("Login error:", error)
      alert("Something went wrong during login.")
    }
  }

  return (
    
    <div className="parent" >
      <div className='frm '>
        <form  onSubmit={changehandler}>
          <h3 className='hd'>QUIZOO</h3>
<hr />
          <div className="em">
            <label htmlFor="email" className="emin">EMAIL</label>
            <br />
            <input
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter email"
              className="inp"
              required
            />
          </div>

          <div className="em">
            <label htmlFor="password" className="emin"> PASSWORD</label>
            <br />
            <input
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter password"
              className="inp"
              required
            />
          </div>

          <div className=''>
            <button
              type="submit"className="sb">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
