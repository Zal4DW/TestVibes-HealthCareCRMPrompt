import React from 'react';

const MedicalHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return <p>No medical history available.</p>;
  }

  return (
    <div className="medical-history-widget" style={{ border: '1px solid #eee', padding: '15px', marginBottom: '20px' }}>
      <h3>Medical History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Condition:</strong> {item.condition}</p>
            <p><strong>Treatment:</strong> {item.treatment}</p>
            <p><strong>Doctor:</strong> {item.doctor}</p>
            {item.notes && <p><em>Notes: {item.notes}</em></p>}
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Add medical history entry - TBD')}>Add New Entry</button>
    </div>
  );
};

export default MedicalHistory; 