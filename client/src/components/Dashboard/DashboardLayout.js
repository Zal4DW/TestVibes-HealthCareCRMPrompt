import React from 'react';

// This component could provide a common structure for all dashboards,
// like a sidebar, header, and main content area.
const DashboardLayout = ({ userRole, children }) => {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>{userRole} Dashboard</h1>
        {/* Common header elements like user profile, logout button could go here */}
        <p>Welcome, {userRole}!</p>
      </header>
      <aside className="dashboard-sidebar">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            {userRole === 'admin' && (
              <>
                <li><a href="#">User Management</a></li>
                <li><a href="#">System Settings</a></li>
                <li><a href="#">Reports</a></li>
              </>
            )}
            {userRole === 'doctor' && (
              <>
                <li><a href="#">My Patients</a></li>
                <li><a href="#">Appointments</a></li>
                <li><a href="#">Messages</a></li>
              </>
            )}
            {userRole === 'staff' && (
              <>
                <li><a href="#">Patient Registration</a></li>
                <li><a href="#">Appointment Scheduling</a></li>
                <li><a href="#">Billing</a></li>
              </>
            )}
            <li><a href="#">Profile</a></li>
            {/* More links will be added via routing later */}
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content">
        {children}
      </main>
      <footer className="dashboard-footer">
        <p>&copy; {new Date().getFullYear()} Healthcare CRM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardLayout; 