import React from 'react';

const InvoiceDetail = ({ invoice, onProcessPayment, onUpdateStatus }) => {
  if (!invoice) {
    return <p>Select an invoice to see details.</p>;
  }

  return (
    <div className="invoice-detail" style={{ border: '1px solid #eee', padding: '15px', marginTop: '20px' }}>
      <h3>Invoice Details: {invoice.id}</h3>
      <p><strong>Patient:</strong> {invoice.patientName} (ID: {invoice.patientId})</p>
      <p><strong>Date Issued:</strong> {invoice.date}</p>
      <p><strong>Due Date:</strong> {invoice.dueDate}</p>
      <p><strong>Status:</strong> {invoice.status}</p>
      
      <h4>Services Rendered:</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ textAlign: 'left', padding: '5px' }}>Description</th>
            <th style={{ textAlign: 'right', padding: '5px' }}>Quantity</th>
            <th style={{ textAlign: 'right', padding: '5px' }}>Unit Price</th>
            <th style={{ textAlign: 'right', padding: '5px' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '5px' }}>{item.description}</td>
              <td style={{ textAlign: 'right', padding: '5px' }}>{item.quantity}</td>
              <td style={{ textAlign: 'right', padding: '5px' }}>${item.unitPrice.toFixed(2)}</td>
              <td style={{ textAlign: 'right', padding: '5px' }}>${(item.quantity * item.unitPrice).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="3" style={{textAlign: 'right', fontWeight: 'bold', padding: '5px'}}>Subtotal:</td>
                <td style={{textAlign: 'right', fontWeight: 'bold', padding: '5px'}}>${invoice.subtotal.toFixed(2)}</td>
            </tr>
            <tr>
                <td colSpan="3" style={{textAlign: 'right', fontWeight: 'bold', padding: '5px'}}>Tax ({invoice.taxRate*100}%):</td>
                <td style={{textAlign: 'right', fontWeight: 'bold', padding: '5px'}}>${invoice.taxAmount.toFixed(2)}</td>
            </tr>
            <tr>
                <td colSpan="3" style={{textAlign: 'right', fontWeight: 'bold', padding: '5px'}}>Total Amount Due:</td>
                <td style={{textAlign: 'right', fontWeight: 'bold', padding: '5px'}}>${invoice.amount.toFixed(2)}</td>
            </tr>
        </tfoot>
      </table>

      {invoice.status !== 'Paid' && (
        <button onClick={() => onProcessPayment(invoice.id, invoice.amount)} style={{ marginRight: '10px' }}>
          Record Payment
        </button>
      )}
      <button onClick={() => alert('Print/Download Invoice - TBD')} style={{ marginRight: '10px' }}>Print Invoice</button>
      {/* Example: Update status for admin/staff */}
      {onUpdateStatus && (
        <select 
            value={invoice.status} 
            onChange={(e) => onUpdateStatus(invoice.id, e.target.value)} 
            style={{ marginRight: '10px' }}
        >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Overdue">Overdue</option>
            <option value="Cancelled">Cancelled</option>
        </select>
      )}
    </div>
  );
};

export default InvoiceDetail; 