import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // To get patient ID from URL
import PatientInfo from '../components/Patients/PatientInfo';
import MedicalHistory from '../components/Patients/MedicalHistory';
// import AppointmentsList from '../components/Appointments/AppointmentsList'; // Future component
// import PatientMessages from '../components/Messaging/PatientMessages'; // Future component

const PatientProfilePage = () => {
  // const { patientId } = useParams(); // Example: if using React Router
  const patientId = 'mockPatient123'; // Hardcoded for now

  const [patientData, setPatientData] = useState(null);
  const [medicalHistory, setMedicalHistory] = useState([]);

  // Mock data fetching
  useEffect(() => {
    // In a real app, fetch data based on patientId
    console.log(`Fetching data for patient: ${patientId}`);
    // Mock patient data
    setPatientData({
      id: patientId,
      name: 'Jane Doe',
      dob: '1985-07-22',
      gender: 'Female',
      contact: 'jane.doe@example.com | 555-0101',
      address: '123 Health St, Wellness City, HC 12345',
      emergencyContact: { name: 'John Doe', relation: 'Husband', phone: '555-0102' },
      insurance: { provider: 'HealthFirst Inc.', policyNumber: 'HF123456789' },
    });

    // Mock medical history
    setMedicalHistory([
      {
        date: '2023-01-15',
        condition: 'Annual Checkup',
        treatment: 'Routine physical exam, blood tests',
        doctor: 'Dr. Smith',
        notes: 'Overall good health.',
      },
      {
        date: '2022-11-05',
        condition: 'Flu',
        treatment: 'Rest, fluids, antiviral medication',
        doctor: 'Dr. Smith',
        notes: 'Recovered fully.',
      },
    ]);
  }, [patientId]);

  if (!patientData) {
    return <p>Loading patient profile...</p>;
  }

  return (
    <div className="patient-profile-page" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h2>Patient Profile: {patientData.name}</h2>
        {/* Potentially add navigation back to a patient list or dashboard */}
      </header>
      
      <PatientInfo patient={patientData} />
      <MedicalHistory history={medicalHistory} />

      {/* Placeholder for other sections like upcoming appointments, messages, etc. */}
      <section className="patient-appointments-section">
        <h3>Upcoming Appointments</h3>
        {/* <AppointmentsList patientId={patientId} /> */}
        <p>Appointment list for this patient will be shown here.</p>
      </section>

      <section className="patient-messages-section">
        <h3>Recent Messages</h3>
        {/* <PatientMessages patientId={patientId} /> */}
        <p>Messages exchanged with this patient will be shown here.</p>
      </section>

      {/* Add more sections as needed: Billing, Documents, etc. */}
    </div>
  );
};

export default PatientProfilePage; 