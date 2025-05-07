import React, { useState } from 'react';
import ReportViewer from '../components/Reports/ReportViewer';

const ReportsPage = () => {
  const [currentReport, setCurrentReport] = useState(null);
  const [reportTitle, setReportTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock report generation functions
  const generatePatientAcquisitionReport = async () => {
    setIsLoading(true);
    setReportTitle('Patient Acquisition Report (Oct 2023)');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockData = [
      { month: 'July 2023', newPatients: 35, source: 'Referral', conversionRate: '60%' },
      { month: 'August 2023', newPatients: 42, source: 'Online', conversionRate: '55%' },
      { month: 'September 2023', newPatients: 38, source: 'Walk-in', conversionRate: '70%' },
      { month: 'October 2023', newPatients: 50, source: 'Referral', conversionRate: '65%' },
    ];
    setCurrentReport(mockData);
    setIsLoading(false);
  };

  const generateAppointmentAdherenceReport = async () => {
    setIsLoading(true);
    setReportTitle('Appointment Adherence Report (Q3 2023)');
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockData = {
      totalScheduled: 550,
      totalAttended: 480,
      totalCancelled: 30,
      totalNoShow: 40,
      adherenceRate: `${((480 / 550) * 100).toFixed(1)}%`,
      breakdownByDoctor: [
        { doctor: 'Dr. Smith', attended: 180, noShow: 15 },
        { doctor: 'Dr. Jones', attended: 200, noShow: 10 },
        { doctor: 'Dr. Lee', attended: 100, noShow: 15 },
      ]
    };
    setCurrentReport(mockData);
    setIsLoading(false);
  };
  
  const generateBillingSummaryReport = async () => {
    setIsLoading(true);
    setReportTitle('Billing Summary (Last 30 Days)');
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockData = [
        { service: 'Consultation', totalBilled: 15000, totalCollected: 13500, outstanding: 1500 },
        { service: 'Lab Tests', totalBilled: 8000, totalCollected: 7000, outstanding: 1000 },
        { service: 'Procedures', totalBilled: 25000, totalCollected: 22000, outstanding: 3000 },
    ];
    setCurrentReport(mockData);
    setIsLoading(false);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Report Generation</h1>
      <p>Select a report type to generate. (Data is mocked)</p>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={generatePatientAcquisitionReport} disabled={isLoading} style={{marginRight: '10px'}}>
          Patient Acquisition
        </button>
        <button onClick={generateAppointmentAdherenceReport} disabled={isLoading} style={{marginRight: '10px'}}>
          Appointment Adherence
        </button>
        <button onClick={generateBillingSummaryReport} disabled={isLoading}>
          Billing Summary
        </button>
        {/* Add more report types as needed */}
      </div>

      {isLoading && <p>Generating report, please wait...</p>}
      
      {!isLoading && currentReport && (
        <ReportViewer reportData={currentReport} reportTitle={reportTitle} />
      )}
      {!isLoading && !currentReport && (
          <p>Please select and generate a report to view data.</p>
      )}
    </div>
  );
};

export default ReportsPage;
