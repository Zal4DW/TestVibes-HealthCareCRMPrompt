import React from 'react';
// import { Link } from 'react-router-dom'; // We will use this once routing is in App.js

// Mock navigation links - will be replaced by React Router Links
const Navigation = () => {
  // Mock user role, this would come from AuthContext typically
  const userRole = 'admin'; // 'doctor', 'staff', or null (logged out)

  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '20px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
        <li><a href="#/">Home (App Welcome)</a></li>
        {!userRole && <li><a href="#/login">Login</a></li>}
        
        {userRole === 'admin' && <li><a href="#/admin/dashboard">Admin Dashboard</a></li>}
        {userRole === 'doctor' && <li><a href="#/doctor/dashboard">Doctor Dashboard</a></li>}
        {userRole === 'staff' && <li><a href="#/staff/dashboard">Staff Dashboard</a></li>}

        {(userRole === 'doctor' || userRole === 'staff' || userRole === 'admin') && (
            <li><a href="#/patients/mockPatient123">Patient Profile (Jane Doe)</a></li>
        )}
        {(userRole === 'doctor' || userRole === 'staff' || userRole === 'admin') && (
            <li><a href="#/appointments">Appointments</a></li>
        )}
        {(userRole === 'doctor' || userRole === 'staff' || userRole === 'admin') && (
            <li><a href="#/messaging">Messaging</a></li>
        )}
        {(userRole === 'staff' || userRole === 'admin') && (
            <li><a href="#/billing">Billing</a></li>
        )}
        {(userRole === 'staff' || userRole === 'admin') && (
            <li><a href="#/insurance">Insurance</a></li>
        )}
        {userRole === 'admin' && <li><a href="#/reports">Reports</a></li>}
        {userRole && <li><a href="#/settings">Settings</a></li>}
        {userRole && <li><button onClick={() => alert('Logout TBD')}>Logout</button></li>}
      </ul>
      <p style={{textAlign: 'center', fontSize: '0.9em'}}>
        (Note: This is conceptual navigation. Actual routing with React Router will be in App.js. Current user role mock: {userRole || 'Logged Out'})
      </p>
    </nav>
  );
};

export default Navigation; 