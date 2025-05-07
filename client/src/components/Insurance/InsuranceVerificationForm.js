import React, { useState } from 'react';

const InsuranceVerificationForm = ({ patientId, onVerificationResult }) => {
  const [policyNumber, setPolicyNumber] = useState('');
  const [insuranceProvider, setInsuranceProvider] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null); // null, 'Verifying', 'Verified', 'Failed'
  const [coverageDetails, setCoverageDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!policyNumber || !insuranceProvider) {
      alert('Please enter both Insurance Provider and Policy Number.');
      return;
    }
    setVerificationStatus('Verifying...');
    setCoverageDetails(null);

    // Simulate API call for verification
    console.log('Verifying insurance for:', { patientId, insuranceProvider, policyNumber });
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // Mock response based on input (very basic logic)
    if (policyNumber.includes('VALID')) {
      setVerificationStatus('Verified');
      const mockDetails = {
        memberId: policyNumber,
        planName: `${insuranceProvider} Gold Plan`,
        effectiveDate: '2023-01-01',
        expirationDate: '2023-12-31',
        copay: {
          primaryCare: '$25',
          specialist: '$50',
          emergency: '$100',
        },
        deductible: '$500 (Individual) / $1000 (Family)',
        outOfPocketMax: '$3000 (Individual) / $6000 (Family)',
        notes: 'Pre-authorization required for certain procedures.'
      };
      setCoverageDetails(mockDetails);
      if (onVerificationResult) onVerificationResult({ status: 'Verified', details: mockDetails });
    } else if (policyNumber.includes('PENDING')){
      setVerificationStatus('Verification Pending Review');
      setCoverageDetails({ notes: 'Manual review required by staff.'});
      if (onVerificationResult) onVerificationResult({ status: 'Pending Review', details: { notes: 'Manual review required by staff.'} });
    } else {
      setVerificationStatus('Verification Failed');
      setCoverageDetails({ notes: 'Policy not found or inactive.' });
      if (onVerificationResult) onVerificationResult({ status: 'Failed', details: { notes: 'Policy not found or inactive.' } });
    }
  };

  return (
    <div style={{ border: '1px solid #eee', padding: '15px', marginTop: '20px' }}>
      <h3>Insurance Verification</h3>
      <form onSubmit={handleSubmit}>
        {patientId && <p><strong>Patient ID:</strong> {patientId}</p>}
        <div>
          <label htmlFor="insuranceProvider">Insurance Provider:</label>
          <input
            type="text"
            id="insuranceProvider"
            value={insuranceProvider}
            onChange={(e) => setInsuranceProvider(e.target.value)}
            placeholder="e.g., HealthFirst, BlueCross"
            required
          />
        </div>
        <div>
          <label htmlFor="policyNumber">Policy Number:</label>
          <input
            type="text"
            id="policyNumber"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            placeholder="Enter policy number (try 'VALID123')"
            required
          />
        </div>
        <button type="submit" disabled={verificationStatus === 'Verifying...'}>
          {verificationStatus === 'Verifying...' ? 'Verifying...' : 'Verify Insurance'}
        </button>
      </form>

      {verificationStatus && verificationStatus !== 'Verifying...' && (
        <div style={{ marginTop: '15px', padding: '10px', border: `1px solid ${verificationStatus === 'Verified' ? 'green' : 'red'}` }}>
          <h4>Verification Result: {verificationStatus}</h4>
          {coverageDetails && (
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              {JSON.stringify(coverageDetails, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default InsuranceVerificationForm; 