import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import SummaryWidget from '../components/Dashboard/SummaryWidget';

const AdminDashboardPage = () => {
  // Mock data for demonstration
  const kpis = {
    totalUsers: 150,
    totalPatients: 1200,
    appointmentsToday: 45,
    systemHealth: 'Optimal',
  };

  return (
    <DashboardLayout userRole="Admin">
      <h2>Admin Overview</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <SummaryWidget title="Total Users" value={kpis.totalUsers} detailsLink="#/admin/users" />
        <SummaryWidget title="Total Patients" value={kpis.totalPatients} detailsLink="#/admin/patients" />
        <SummaryWidget title="Appointments Today" value={kpis.appointmentsToday} detailsLink="#/admin/appointments" />
        <SummaryWidget title="System Health" value={kpis.systemHealth} />
      </div>
      {/* Further sections for admin dashboard */}
      <section>
        <h3>User Management</h3>
        {/* Placeholder for user management tools */}
        <p>User list, role assignment, etc. will be here.</p>
        <button>View All Users</button>
      </section>
      <section>
        <h3>System Reports</h3>
        {/* Placeholder for report generation links/previews */}
        <p>Links to patient acquisition reports, adherence reports, etc.</p>
        <button>Generate Patient Acquisition Report</button>
      </section>
      <section>
        <h3>Settings</h3>
        <p>Application settings, configurations, etc.</p>
        <button>Go to Settings</button>
      </section>
    </DashboardLayout>
  );
};

export default AdminDashboardPage; 