import React,{useState} from 'react';
import './Sidebar.css';
import { FaUser, FaFileAlt, FaParking, FaHome, FaInfoCircle, FaComment, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate  } from 'react-router-dom'; // Import Link for navigation



 export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    navigate('/'); // Redirect to login page
  };
 
  return ( 
    <div >
      <button className="sidebar__toggle" onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
      {isSidebarOpen? <span>&times;</span>: <span>&#9776;</span>}</button>
    <div className={`sidebar ${isSidebarOpen ? 'open': ''}`}>
      <div className="sidebar-content">
      <div className="sidebar__header">
        <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/s/m/smart_parking_system_app_colored_icon_in_powerpoint_pptx_png_and_editable_eps_format_slide01.jpg" alt="Logo" className="sidebar__logo" />
        <h3>Parking System</h3>
      </div>
      <ul className="sidebar__menu">
        <li><Link to="/private/home"><FaHome /> Home</Link></li>
        <li><Link to="/private/parking"><FaParking /> Parking slots</Link></li>
        <li><Link to="/private/profile"><FaUser /> Profile</Link></li>
        <li><Link to="/private/help"><FaInfoCircle /> Help/Support</Link></li>
        <li><Link to="/private/feedback"><FaComment /> Feedback</Link></li>
        <li><Link to="/private/report"><FaFileAlt /> Report</Link></li>
        {/* <li><Link to="/"><FaSignOutAlt /> Sign out</Link></li> */}
        <li><a href="#" onClick={handleLogout}><FaSignOutAlt /> Sign out</a></li> {/* Updated sign-out link */}
      </ul>
    </div>
    </div>
    </div>
  );
}

