import React, {useState, useEffect} from 'react';
import './AdminProfile.css';
import axios from 'axios';

export const AdminProfile = () => {
  const[admins,setadmin] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  })

  const [userCount, setUserCount] = useState(0);
  const [parkingSlotCount, setParkingSlotCount] = useState(0);
  const [editing, setEditing] = useState(false);
  const [editedAdmin, setEditedAdmin] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/user-count');
        setUserCount(response.data.userCount);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchParkingSlotCount = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/parking-slot-count');
        setParkingSlotCount(response.data.parkingSlotCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserCount();
    fetchParkingSlotCount();
  }, []);


  useEffect(()=>{
    const fetchAdminData = async () =>{
    try{
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/admins',{
        headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the request headers
                  },
                });
                setadmin(response.data);
                setEditedAdmin(response.data);
              } catch (error) {
                console.error(error);
              }
      };
      fetchAdminData();},[] );

      const handleEditProfile = () =>{
        setEditing(true);
      };
      const handleCancelEditing = () => {
        setEditing(false);
        setEditedAdmin(admins);
      };
      const handleSaveChanges = async () => {
        try {
          const token = localStorage.getItem('token');
          const updatedAdmin = {
            fullName: editedAdmin.fullName,
            email: editedAdmin.email,
            phone: editedAdmin.phone,
            address: editedAdmin.address,
          };
          const response = await axios.patch('http://localhost:3001/api/admins', updatedAdmin, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.error) {
            alert(response.data.error);
          } else {
            setadmin(response.data);
            setEditing(false);
          }
        } catch (error) {
          console.error(error);
        }
      };
      const handleInputChange = (event) => {
        setEditedAdmin({ ...editedAdmin, [event.target.name]: event.target.value });
      };

    

  return (
    <div className="admin-profile-container">
      <div className="admin-profile-picture">
        <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="Profile" />
      </div>
      <h1 className="admin-profile-role">Admin</h1>
      {editing ? (
        <form>
          <label >
            Full Name:
            <input style={{marginLeft:'10px'}} type="text" name="fullName" value={editedAdmin.fullName} onChange={handleInputChange} />
          </label>
          <br />
          <label style={{ marginTop: '10px' }}>
            Email:
            <input style={{marginLeft:'10px'}} type="email" name="email" value={editedAdmin.email} onChange={handleInputChange} />
          </label>
          <br />
          <label style={{ marginTop: '10px' }}>
            Phone:
            <input style={{marginLeft:'10px'}} type="text" name="phone" value={editedAdmin.phone} onChange={handleInputChange} />
          </label>
          <br />
          <label style={{ marginTop: '10px' }}>
            Address:
            <input style={{marginLeft:'10px'}} type="text" name="address" value={editedAdmin.address} onChange={handleInputChange} />
          </label>
          <br />
          <button className="admin-save-btn_a" onClick={handleSaveChanges}>Save Changes</button>
          <button className="admin-cancel-btn_a" onClick={handleCancelEditing}>Cancel</button>
        </form>
      ) : (
        <>
          <p className="admin-profile-name">{admins.fullName}</p>
          <p className="admin-profile-email">{admins.email}</p>
          <p className="admin-profile-phone">{admins.phone}</p>
          <p className="admin-profile-address">{admins.address}</p>
          <button className="admin-profile-edit-btn" onClick={handleEditProfile}>
            Edit Profile
          </button>
        </>
      )}
      <div className="admin-profile-stats">
        <div className="admin-profile-stat">
          <h3>Users</h3>
          <p>{userCount}</p>
        </div>
        <div className="admin-profile-stat">
          <h3>Parking Slots</h3>
          <p>{parkingSlotCount}</p>
        </div>
      </div>
    </div>
  );
};
