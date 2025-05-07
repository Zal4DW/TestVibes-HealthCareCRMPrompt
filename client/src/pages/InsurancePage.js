import React, { useState } from 'react';
import InsuranceVerificationForm from '../components/Insurance/InsuranceVerificationForm';

const InsurancePage = () => {
  const [currentPatientId, setCurrentPatientId] = useState('PAT789'); // Example patient ID
  const [lastVerificationResult, setLastVerificationResult] = useState(null);

  const handleVerification = (result) => {
    console.log('Insurance verification result on page:', result);
    setLastVerificationResult(result);
    // Potentially update patient record or log this event
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Insurance Verification Portal</h1>
      {/* In a real app, patient selection would be more dynamic */}
      <p>Verifying for Patient ID: <strong>{currentPatientId}</strong></p>
      <input 
        type="text" 
        placeholder="Enter Patient ID to verify for" 
        value={currentPatientId}
        onChange={(e) => setCurrentPatientId(e.target.value)}
        style={{marginBottom: '10px'}}
      />
      
      <InsuranceVerificationForm 
        patientId={currentPatientId} 
        onVerificationResult={handleVerification} 
      />

      {lastVerificationResult && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>Last Verification Summary:</h3>
          <p><strong>Status:</strong> {lastVerificationResult.status}</p>
          {lastVerificationResult.details && 
            <p><strong>Details:</strong> {lastVerificationResult.details.notes || JSON.stringify(lastVerificationResult.details.copay)}</p>}
        </div>
      )}
      {/* TODO: Add a list of recent verifications or link to patient's insurance history */}
    </div>
  );
};

export default InsurancePage;
