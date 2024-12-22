import React,{useState} from 'react';
import { FaUser, FaFileAlt,  FaHome, FaComment, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate  } from 'react-router-dom'; // Import Link for navigation
import './AdminSidebar.css';


 export function AdminSidebar() {
  const [SidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    navigate('/'); // Redirect to login page
  };
 
  return ( 
    <div >
      <button className="sidebar__toggle_a" onClick={()=>setSidebarOpen(!SidebarOpen)}>
      {SidebarOpen? <span>&times;</span>: <span>&#9776;</span>}</button>
    <div className={`sidebar_a ${SidebarOpen ? 'open1': ''}`}>
      <div className="sidebar-content_a">
      <div className="sidebar__header_a">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar__menu_a">
        <li><Link to="/admin/dashboard"><FaHome /> Dashboard</Link></li>
        <li><Link to="/admin/profile"><FaUser />Profile</Link></li>
        <li><Link to="/admin/feedback"><FaComment />Feedback</Link></li>
        <li><Link to="/admin/report"><FaFileAlt />Admin Report</Link></li>
        <li><a href="#" onClick={handleLogout}><FaSignOutAlt /> Sign out</a></li> {/* Updated sign-out link */}
      </ul>
    </div>
    </div>
    </div>
  );
}

