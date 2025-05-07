import React, { useState, useEffect } from 'react';
import AppointmentForm from '../components/Appointments/AppointmentForm';
import AppointmentCalendar from '../components/Appointments/AppointmentCalendar'; // Simplified calendar view

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
  const [selectedAppointment, setSelectedAppointment] = useState(null); // For editing
  const [showForm, setShowForm] = useState(false);

  // Mock doctors and patients (in a real app, these would be fetched or from context)
  const mockDoctors = [
    { id: 'doc1', name: 'Dr. Smith (Cardiology)' },
    { id: 'doc2', name: 'Dr. Jones (Pediatrics)' },
    { id: 'doc3', name: 'Dr. Lee (Neurology)' },
  ];
  const mockPatients = [
    { id: 'pat1', name: 'John Doe' },
    { id: 'pat2', name: 'Jane Roe' },
    { id: 'pat3', name: 'Peter Pan' },
  ];

  // Load initial mock appointments
  useEffect(() => {
    setAppointments([
      {
        id: 'appt1',
        patientId: 'pat1',
        doctorId: 'doc1',
        date: '2023-11-15',
        time: '10:00',
        reason: 'Follow-up Consultation',
        notes: 'Check blood pressure.',
        status: 'Scheduled'
      },
      {
        id: 'appt2',
        patientId: 'pat2',
        doctorId: 'doc2',
        date: '2023-11-15',
        time: '14:30',
        reason: 'Vaccination',
        notes: '',
        status: 'Scheduled'
      },
      {
        id: 'appt3',
        patientId: 'pat3',
        doctorId: 'doc1',
        date: '2023-12-01',
        time: '09:00',
        reason: 'New Patient Visit',
        notes: 'Needs full check-up.',
        status: 'Scheduled'
      },
    ]);
  }, []);

  const handleAppointmentSubmit = (appointmentDetails) => {
    setAppointments(prev => {
      const existingIndex = prev.findIndex(a => a.id === appointmentDetails.id);
      if (existingIndex > -1) {
        // Update existing appointment
        const updatedAppointments = [...prev];
        updatedAppointments[existingIndex] = appointmentDetails;
        return updatedAppointments;
      } else {
        // Add new appointment
        return [...prev, appointmentDetails];
      }
    });
    setSelectedAppointment(null); // Clear selection
    setShowForm(false); // Hide form after submission
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    console.log('Appointments for date:', date, appointments.filter(a => a.date === date));
    // Here you might filter appointments to show for the selected date in a list view
  };

  const handleAppointmentSelectForEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setShowForm(true); // Show form for editing
  };

  const handleCancelAppointment = (appointmentId) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
        setAppointments(prev => prev.filter(a => a.id !== appointmentId));
        console.log("Appointment cancelled (locally):", appointmentId);
        alert("Appointment cancelled (locally).")
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Appointment Management</h1>
      
      <button onClick={() => { setSelectedAppointment(null); setShowForm(!showForm); }}>
        {showForm && !selectedAppointment ? 'Hide Form' : 'Book New Appointment'}
      </button>

      {showForm && (
        <AppointmentForm 
          onSubmitAppointment={handleAppointmentSubmit} 
          doctors={mockDoctors} 
          patients={mockPatients}
          existingAppointment={selectedAppointment}
        />
      )}

      <AppointmentCalendar 
        appointments={appointments} 
        onDateSelect={handleDateSelect} 
        onAppointmentSelect={handleAppointmentSelectForEdit} 
      />

      {/* Optional: A list view of appointments for the selectedDate or all appointments */}
      <div style={{marginTop: '20px'}}>
        <h3>All Scheduled Appointments (List View)</h3>
        {appointments.length === 0 ? <p>No appointments scheduled.</p> : (
            <ul style={{listStyleType: 'none', padding: 0}}>
                {appointments.map(appt => (
                    <li key={appt.id} style={{border: '1px solid #ddd', padding: '10px', marginBottom: '10px'}}>
                        <p><strong>Patient:</strong> {mockPatients.find(p=>p.id === appt.patientId)?.name || appt.patientId}</p>
                        <p><strong>Doctor:</strong> {mockDoctors.find(d=>d.id === appt.doctorId)?.name || appt.doctorId}</p>
                        <p><strong>Date:</strong> {appt.date} at {appt.time}</p>
                        <p><strong>Reason:</strong> {appt.reason}</p>
                        {appt.notes && <p><strong>Notes:</strong> {appt.notes}</p>}
                        <p><strong>Status:</strong> {appt.status}</p>
                        <button onClick={() => handleAppointmentSelectForEdit(appt)} style={{marginRight: '10px'}}>Edit</button>
                        <button onClick={() => handleCancelAppointment(appt.id)}>Cancel</button>
                    </li>
                ))}
            </ul>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage; 