import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./style.css";
import logo from "../../assets/logo-green.png";
import { AccountContext } from '../../setup/contexts/AuthContext';
const Dashboard = () => {
  const {setIsLogoutEnabled} = useContext(AccountContext);
  return (
    <div className="container-dashboard">
      <aside className='side-bar-menu-dashboard'>
        <div className='to-item'>
          <div className='logo-dashboard-container-left'>
            <Link to={"/"}><img src={logo}/></Link>
          </div>
          <nav className='dashboard-nav'>
            <span>HOME</span>
            <ul>
              <li><Link to="/dashboard"><i className="bi bi-columns-gap"></i> Dashboard</Link></li>
              <li><Link to="/dashboard"><i className="bi bi-speedometer2"></i> My Profile</Link></li>
            </ul>
          </nav>
          <nav className='dashboard-nav'>
            <span>Work</span>
            <ul>
              <li><Link to="/dashboard/selectHouses"><i className="bi bi-speedometer"></i>Select Houses</Link></li>
              <li><Link to="/dashboard/myWork"><i className="bi bi-speedometer"></i>My Work</Link></li>
              <li><Link to="/dashboard/test"><i className="bi bi-speedometer2"></i>TEST</Link></li>
            </ul>
          </nav>
          <nav className='dashboard-nav'>
            <span>General</span>
            <ul>
              <li><Link to="/dashboard/setting"><i className="bi bi-columns-gap"></i> Setting</Link></li>
              <li><Link to="/dashboard"><i className="bi bi-speedometer2"></i> Help</Link></li>
            </ul>
          </nav>
        </div>
        <div className='user-profile'>
          <div className='user-profile-text'>
            <span>Logged in as</span>
            <h3>Aryan Bhalla</h3>
          </div>
          <button onClick={() => setIsLogoutEnabled(true)}><i className="bi bi-box-arrow-right"></i> </button>
        </div>
      </aside>
      <main className='content-dashboard-data'>
        <div className='single-pages-content-sizing-limit-width'>
          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default Dashboard;
