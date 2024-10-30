import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const PaymentForm = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      address,
      phone,
      paymentMethod,
    });
  };

  return (
    <div className=' items-center justify-center min-h-screen bg-[#FEF8EA] '>
    <div className="max-w-md mx-auto py-5 ">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className=" flex mb-2 text-[20px] font-bold justify-center">Payment Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">No. Telepon:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Payment method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="" disabled>select payment method</option>
            <option value="credit-card">Kartu Kredit</option>
            <option value="bank-transfer">Transfer Bank</option>
            <option value="cash">Tunai</option>
          </select>
        </div>
        <button
           onClick={() => navigate('/Success')}
          className="w-full bg-black text-white hover:bg-slate-700 px-3 py-2 rounded-[20px] shadow-md font-semibold"
        >
          Pay
        </button>
      </form>
    </div>
    </div>
  );
}

export default PaymentForm;
