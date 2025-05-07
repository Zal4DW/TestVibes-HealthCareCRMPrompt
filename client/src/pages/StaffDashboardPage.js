import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import SummaryWidget from '../components/Dashboard/SummaryWidget';

const StaffDashboardPage = () => {
  // Mock data for demonstration
  const kpis = {
    patientsToRegister: 3,
    pendingAppointments: 8,
    insuranceVerifications: 4,
  };

  return (
    <DashboardLayout userRole="Staff">
      <h2>Staff Overview</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <SummaryWidget title="Patients to Register Today" value={kpis.patientsToRegister} detailsLink="#/staff/registration" />
        <SummaryWidget title="Pending Appointments" value={kpis.pendingAppointments} detailsLink="#/staff/appointments" />
        <SummaryWidget title="Insurance Verifications Due" value={kpis.insuranceVerifications} detailsLink="#/staff/insurance" />
      </div>
      {/* Further sections for staff dashboard */}
      <section>
        <h3>Tasks for Today</h3>
        {/* Placeholder for task list */}
        <p>List of tasks like follow-ups, scheduling confirmations, etc.</p>
        <button>View All Tasks</button>
      </section>
      <section>
        <h3>Quick Actions</h3>
        <button>Register New Patient</button>
        <button>Schedule Appointment</button>
        <button>Verify Insurance</button>
      </section>
    </DashboardLayout>
  );
};

export default StaffDashboardPage; 