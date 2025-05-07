import React from 'react';

const InvoiceList = ({ invoices, onSelectInvoice }) => {
  if (!invoices || invoices.length === 0) {
    return <p>No invoices available.</p>;
  }

  return (
    <div className="invoice-list">
      <h3>Invoices</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ textAlign: 'left', padding: '8px' }}>Invoice ID</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Patient</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Date</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Amount</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{invoice.id}</td>
              <td style={{ padding: '8px' }}>{invoice.patientName}</td>
              <td style={{ padding: '8px' }}>{invoice.date}</td>
              <td style={{ padding: '8px' }}>${invoice.amount.toFixed(2)}</td>
              <td style={{ padding: '8px' }}>{invoice.status}</td>
              <td style={{ padding: '8px' }}>
                <button onClick={() => onSelectInvoice(invoice)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList; 