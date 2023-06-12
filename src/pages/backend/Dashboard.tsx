import React from 'react'
import { Outlet } from 'react-router-dom'
import "./style.css";
const Dashboard = () => {
  return (
    <>
    <div className="container">
      <nav>
        <div className="profile">
          <div className="profileImg">
            <i className="bi bi-person-fill"></i>
          </div>
          <div className="left">
            <h3 className="profTitle">Grooze</h3>
            <span className="profName">Analytics Dashboard</span>
          </div>
        </div>

        <hr />
        <span className="">MENU</span>
        <ul className="nav-links">
          <li><i className="bi bi-house"></i><span> Dashboard </span></li>
          <li>
            <i className="bi bi-cart"></i
            ><span>Orders <span className="noti">6</span></span>
          </li>
          <li><i className="bi bi-people"></i><span>Users</span></li>
          <li><i className="bi bi-bag"></i><span>Product </span></li>
        </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
      </div>
      
      </>
    
  )
}

export default Dashboard;
