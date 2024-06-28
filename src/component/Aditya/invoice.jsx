import React, { useState, useEffect } from 'react';

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch('http://localhost:6060/api/v1/auth/getAllInvoice');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setInvoices(data); // Assuming data is an array of invoices
        setLoading(false);
      } catch (error) {
        console.error('Error fetching invoices:', error);
        // Handle error state or display a message to the user
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  const subtotal = invoices.reduce((acc, invoice) => acc + invoice.price, 0);
  const tax = subtotal * 0.18; // Assuming GST is 18%
  const total = subtotal + tax;

  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-6">Invoice</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <table className="w-full mb-6">
              <thead>
                <tr>
                  <th className="text-left">Invoice No</th>
                  <th className="text-left">Description</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Offer (%)</th>
                  <th className="text-right">GST Detail</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr key={index}>
                    <td className="text-left">{invoice.invoice_no}</td>
                    <td className="text-left">{invoice.description}</td>
                    <td className="text-right">${invoice.price.toFixed(2)}</td>
                    <td className="text-right">{invoice.offer}%</td>
                    <td className="text-right">{invoice.gst_detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex justify-end">
              <div className="text-right">
                <p className="font-semibold">Subtotal:</p>
                <p className="font-semibold">Tax (18% GST):</p>
                <p className="font-semibold">Total:</p>
              </div>
              <div className="ml-4">
                <p className="text-right">${subtotal.toFixed(2)}</p>
                <p className="text-right">${tax.toFixed(2)}</p>
                <p className="text-right">${total.toFixed(2)}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Invoice;
