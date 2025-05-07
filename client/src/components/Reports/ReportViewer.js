import React from 'react';

const ReportViewer = ({ reportData, reportTitle }) => {
  if (!reportData) {
    return <p>No report data to display. Please generate or select a report.</p>;
  }

  // This is a very generic report viewer. Specific reports would likely have their own formatting.
  const renderReportContent = () => {
    if (typeof reportData === 'string') {
      return <pre>{reportData}</pre>; // Simple text report
    }
    if (Array.isArray(reportData)) {
      // Attempt to render a simple table if it's an array of objects
      if (reportData.length === 0) return <p>Report contains no data.</p>;
      const headers = Object.keys(reportData[0]);
      return (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              {headers.map(header => <th key={header} style={{ textAlign: 'left', padding: '8px' }}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {reportData.map((row, rowIndex) => (
              <tr key={rowIndex} style={{ borderBottom: '1px solid #eee' }}>
                {headers.map(header => <td key={`${rowIndex}-${header}`} style={{ padding: '8px' }}>{String(row[header])}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    // For more complex objects, just stringify or implement specific renderers
    return <pre>{JSON.stringify(reportData, null, 2)}</pre>;
  };

  return (
    <div style={{ border: '1px solid #eee', padding: '15px', marginTop: '20px' }}>
      <h3>{reportTitle || 'Report Viewer'}</h3>
      {renderReportContent()}
      <button onClick={() => alert('Print/Download Report - TBD')} style={{marginTop: '15px'}}>
        Print/Download Report
      </button>
    </div>
  );
};

export default ReportViewer; 