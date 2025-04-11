import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../dashboard/dashboard.css"
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3000/api/all").then((res) => {
      setUsers(res.data.data)
      // console.log(data);

    })
  })


  return (
    <div className="mm">
      <h2 className="leader">📊 Quiz Leaderboard</h2>
      <div className="dasharea">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">sr.no</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Score</th>
            </tr>
          </thead>
          <tbody>

            {users.map((el, idx) => (
              el.userType == 2 ? <tr className="tt" key={idx}>
                <td className="py-2 px-2">{idx}</td>
                <td className="py-2 px-2">{el.name}</td>
                <td className="py-2 px-2">{el?.email}</td>
                <td className="py-2 px-2 font-bold">{el?.score}</td>
              </tr> : null
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
