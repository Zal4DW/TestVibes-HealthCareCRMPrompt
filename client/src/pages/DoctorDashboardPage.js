import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import SummaryWidget from '../components/Dashboard/SummaryWidget';

const DoctorDashboardPage = () => {
  // Mock data for demonstration
  const kpis = {
    upcomingAppointments: 12,
    unreadMessages: 5,
    patientsAssigned: 85,
  };

  return (
    <DashboardLayout userRole="Doctor">
      <h2>Doctor Overview</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <SummaryWidget title="Upcoming Appointments" value={kpis.upcomingAppointments} detailsLink="#/doctor/appointments" />
        <SummaryWidget title="Unread Messages" value={kpis.unreadMessages} detailsLink="#/doctor/messages" />
        <SummaryWidget title="My Patients" value={kpis.patientsAssigned} detailsLink="#/doctor/patients" />
      </div>
      {/* Further sections for doctor dashboard */}
      <section>
        <h3>Today's Schedule</h3>
        {/* Placeholder for today's appointments list */}
        <p>List of appointments for today will appear here.</p>
        <button>View Full Schedule</button>
      </section>
      <section>
        <h3>Recent Patient Activity</h3>
        {/* Placeholder for recent patient updates */}
        <p>Updates on recent lab results, messages from patients assigned to this doctor.</p>
      </section>
      <section>
        <h3>Quick Links</h3>
        <button>Access Patient Records</button>
        <button>Send New Message</button>
      </section>
    </DashboardLayout>
  );
};

export default DoctorDashboardPage; 