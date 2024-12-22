import { Sidebar } from './sidebar.js';
import React,{useState} from 'react';
import { BrowserRouter , Route, Routes, Navigate  } from 'react-router-dom'; // Import Router and Routes
import {SmartParkingInfo} from './SmartParkingContent.js';
import {LoginForm} from './SmartParkingLogin.js';
import { ProfileInfo } from './profile.js';
import { FeedbackPage } from './feedback.js';
import { ReportPage } from './Report.js';
import { ParkingMap } from './ParkingMap.js';
import { FloorSelection } from './FloorSelection.js';
import { ErrorPage } from './ErrorPage.js';
import { UserPrivateRoute } from './SmartParkingLogin.js';
import { AdminPrivateRoute } from './SmartParkingLogin.js';
import { HelpPage } from './helppage.js';
import { Dashboard } from './Dashboard.js';
import { AdminSidebar } from './AdminSidebar.js';
import { FeedbackDetails } from './Adminfeedback.js';
import { AdminProfile } from './AdminProfile.js';
import { PaymentPage } from './PaymentPage.js';
import { ReportDetails } from './ReportDetails.js';
import { NavigateToLocation } from './NavigateToLocation.js';




function App(){
  const [selectedVehicle, setSelectedVehicle] = useState('Car');
   return(
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<LoginForm />} />

{/* Protected routes under /private */}
<Route path="/private" element={<UserPrivateRoute />}>
  {/* Default to /private/home */}
  <Route index element={<Navigate to="/private/home" replace />} />
  <Route path="home" element={
    <div>
      <Sidebar />
      <div>
        <SmartParkingInfo />
      </div>
    </div>
  } />
  <Route path="parking" element={
    <div>
      <Sidebar />
      <FloorSelection />
    </div>
  } />
  <Route path="floor/:floorNumber" element={
    <div>
      <Sidebar />
      <ParkingMap />
    </div>
  } />
  <Route path="profile" element={
    <div>
      <Sidebar />
      <ProfileInfo />
    </div>
  } />
  <Route path="help" element={
    <div>
      <Sidebar />
      <HelpPage />
    </div>
  } />
  <Route path="feedback" element={
    <div>
      <Sidebar />
      <FeedbackPage />
    </div>
  } />
  <Route path="report" element={
    <div>
      <Sidebar />
      <ReportPage />
    </div>
  } />
  <Route path="payment" element={  
    <div>
      <Sidebar />
      <PaymentPage />
    </div>
  } />
  <Route path="location" element={  
    <div>
      <Sidebar />
      <NavigateToLocation />
    </div>
  } />
  <Route path="logout" element={<LoginForm />} />
</Route>
<Route path="/admin" element={<AdminPrivateRoute />}>
<Route index element={<Navigate to="/admin/dashboard" replace />} />
  <Route path="dashboard" element={
    <div>
      <AdminSidebar />
        <Dashboard />
    </div>
  } />
  <Route path="feedback" element={
    <div>
      <AdminSidebar />
      <FeedbackDetails />
    </div>
 } />
 <Route path="profile" element={
  <div>
     <AdminSidebar />
     < AdminProfile/>
  </div>
 } />
 <Route path="report" element={
  <div>
     <AdminSidebar />
     < ReportDetails/>
  </div>
 } />
 </Route>

{/* Catch-all route for undefined paths */}
<Route path="*" element={<ErrorPage />} />
      </Routes>
  </BrowserRouter>

);
}
 
export default App;

