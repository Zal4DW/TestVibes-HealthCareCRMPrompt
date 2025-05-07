import React, { useState } from 'react';

const AppointmentForm = ({ onSubmitAppointment, doctors, patients, existingAppointment }) => {
  const [patientId, setPatientId] = useState(existingAppointment?.patientId || '');
  const [doctorId, setDoctorId] = useState(existingAppointment?.doctorId || '');
  const [appointmentDate, setAppointmentDate] = useState(existingAppointment?.date || '');
  const [appointmentTime, setAppointmentTime] = useState(existingAppointment?.time || '');
  const [reason, setReason] = useState(existingAppointment?.reason || '');
  const [notes, setNotes] = useState(existingAppointment?.notes || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientId || !doctorId || !appointmentDate || !appointmentTime || !reason) {
      alert('Please fill in all required fields: Patient, Doctor, Date, Time, and Reason.');
      return;
    }
    const appointmentDetails = {
      id: existingAppointment?.id || `appt_${Date.now()}`,
      patientId,
      doctorId,
      date: appointmentDate,
      time: appointmentTime,
      reason,
      notes,
      status: existingAppointment?.status || 'Scheduled', // Default to Scheduled
    };
    onSubmitAppointment(appointmentDetails);
    alert(`Appointment ${existingAppointment ? 'updated' : 'booked'} (locally). Check console.`);
    console.log('Appointment details:', appointmentDetails);
    // Optionally clear form if it's not an update
    if (!existingAppointment) {
        setPatientId('');
        setDoctorId('');
        setAppointmentDate('');
        setAppointmentTime('');
        setReason('');
        setNotes('');
    }
  };

  // Mock data for dropdowns - in real app, these would be props or fetched
  const mockDoctors = doctors || [
    { id: 'doc1', name: 'Dr. Smith' },
    { id: 'doc2', name: 'Dr. Jones' },
  ];
  const mockPatients = patients || [
    { id: 'pat1', name: 'John Doe' },
    { id: 'pat2', name: 'Jane Roe' },
  ];

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #eee', padding: '15px', marginTop: '20px' }}>
      <h3>{existingAppointment ? 'Edit Appointment' : 'Book New Appointment'}</h3>
      <div>
        <label htmlFor="patient">Patient:</label>
        <select id="patient" value={patientId} onChange={(e) => setPatientId(e.target.value)} required>
          <option value="">Select Patient</option>
          {mockPatients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="doctor">Doctor:</label>
        <select id="doctor" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required>
          <option value="">Select Doctor</option>
          {mockDoctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="appointmentDate">Date:</label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="appointmentTime">Time:</label>
        <input
          type="time"
          id="appointmentTime"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="reason">Reason for Visit:</label>
        <input
          type="text"
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="notes">Notes (Optional):</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="3"
        ></textarea>
      </div>
      <button type="submit">{existingAppointment ? 'Update Appointment' : 'Book Appointment'}</button>
      {existingAppointment && <button type="button" onClick={() => alert('Cancel edit - TBD')}>Cancel Edit</button>}
    </form>
  );
};

export default AppointmentForm; 