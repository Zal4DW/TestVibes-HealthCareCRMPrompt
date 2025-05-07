import React from 'react';

const PatientInfo = ({ patient }) => {
  if (!patient) {
    return <p>Loading patient information...</p>;
  }

  return (
    <div className="patient-info-widget" style={{ border: '1px solid #eee', padding: '15px', marginBottom: '20px' }}>
      <h3>Patient Details</h3>
      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>Date of Birth:</strong> {patient.dob}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Contact:</strong> {patient.contact}</p>
      <p><strong>Address:</strong> {patient.address}</p>
      <p><strong>Emergency Contact:</strong> {patient.emergencyContact?.name} ({patient.emergencyContact?.relation} - {patient.emergencyContact?.phone})</p>
      <p><strong>Insurance Provider:</strong> {patient.insurance?.provider}</p>
      <p><strong>Policy Number:</strong> {patient.insurance?.policyNumber}</p>
      {/* Add more fields as necessary */}
      <button onClick={() => alert('Edit patient info - TBD')}>Edit Information</button>
    </div>
  );
};

export default PatientInfo; 