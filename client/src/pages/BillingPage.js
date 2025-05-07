import React, { useState, useEffect } from 'react';
import InvoiceList from '../components/Billing/InvoiceList';
import InvoiceDetail from '../components/Billing/InvoiceDetail';

const BillingPage = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Mock initial invoices load
  useEffect(() => {
    const mockInvoices = [
      {
        id: 'INV-2023-001',
        patientId: 'pat1',
        patientName: 'John Doe',
        date: '2023-10-15',
        dueDate: '2023-11-14',
        items: [
          { description: 'Consultation Fee', quantity: 1, unitPrice: 150.00 },
          { description: 'Lab Test - Blood Panel', quantity: 1, unitPrice: 75.00 },
        ],
        subtotal: 225.00,
        taxRate: 0.08, // 8%
        taxAmount: 18.00,
        amount: 243.00,
        status: 'Pending',
      },
      {
        id: 'INV-2023-002',
        patientId: 'pat2',
        patientName: 'Jane Roe',
        date: '2023-09-20',
        dueDate: '2023-10-20',
        items: [
          { description: 'Annual Physical Exam', quantity: 1, unitPrice: 200.00 },
        ],
        subtotal: 200.00,
        taxRate: 0.08,
        taxAmount: 16.00,
        amount: 216.00,
        status: 'Paid',
      },
       {
        id: 'INV-2023-003',
        patientId: 'pat1',
        patientName: 'John Doe',
        date: '2023-11-01',
        dueDate: '2023-12-01',
        items: [
          { description: 'X-Ray Service', quantity: 1, unitPrice: 120.00 },
        ],
        subtotal: 120.00,
        taxRate: 0.08,
        taxAmount: 9.60,
        amount: 129.60,
        status: 'Overdue',
      },
    ];
    setInvoices(mockInvoices);
  }, []);

  const handleSelectInvoice = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleProcessPayment = (invoiceId, amount) => {
    // Mock payment processing
    setInvoices(prevInvoices => 
      prevInvoices.map(inv => 
        inv.id === invoiceId ? { ...inv, status: 'Paid' } : inv
      )
    );
    setSelectedInvoice(prev => prev && prev.id === invoiceId ? { ...prev, status: 'Paid'} : prev);
    alert(`Payment of $${amount.toFixed(2)} for invoice ${invoiceId} recorded (locally).`);
    console.log("Payment processed (locally) for:", invoiceId, amount);
  };

  const handleUpdateInvoiceStatus = (invoiceId, newStatus) => {
    setInvoices(prevInvoices => 
      prevInvoices.map(inv => 
        inv.id === invoiceId ? { ...inv, status: newStatus } : inv
      )
    );
    setSelectedInvoice(prev => prev && prev.id === invoiceId ? { ...prev, status: newStatus} : prev);
    alert(`Invoice ${invoiceId} status updated to ${newStatus} (locally).`);
    console.log("Invoice status updated (locally):", invoiceId, newStatus);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Billing and Invoices</h1>
      <button onClick={() => alert('Create New Invoice - TBD')} style={{marginBottom: '15px'}}>
        Create New Invoice
      </button>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 2 }}>
          <InvoiceList invoices={invoices} onSelectInvoice={handleSelectInvoice} />
        </div>
        <div style={{ flex: 3 }}>
          {selectedInvoice ? (
            <InvoiceDetail 
                invoice={selectedInvoice} 
                onProcessPayment={handleProcessPayment} 
                onUpdateStatus={handleUpdateInvoiceStatus} 
            />
          ) : (
            <p>Select an invoice from the list to view its details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingPage; 