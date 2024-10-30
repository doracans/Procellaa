import React from 'react';
import success from "../assets/success.png";
import { useNavigate } from 'react-router-dom'

const SuccessPage = () => {
    const navigate = useNavigate()
  return (
    <div className=" bg-[#FEF8EA] flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <img className="mx-auto mb-4" src={success} alt="iconsucces" width={85} />
        <h1 className="text-2xl font-bold mb-4">Payment Success!</h1>
        <p className="text-gray-700 mb-6">
        Thank you for making payment. Your order is being processed.
        </p>
        <button
          className="px-10 bg-black text-white hover:bg-slate-700 py-2 rounded-[20px] shadow-md font-semibold"
          onClick={() => navigate('/Home')}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
