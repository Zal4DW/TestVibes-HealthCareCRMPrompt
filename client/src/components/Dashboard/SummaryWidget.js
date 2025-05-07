import React from 'react';

const SummaryWidget = ({ title, value, icon, detailsLink }) => {
  return (
    <div className="summary-widget" style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
      <h4>{title}</h4>
      {icon && <span className="widget-icon">{icon}</span>} {/* Placeholder for an icon */}
      <p style={{ fontSize: '2em', margin: '5px 0' }}>{value}</p>
      {detailsLink && <a href={detailsLink}>View Details</a>}
    </div>
  );
};

export default SummaryWidget; 