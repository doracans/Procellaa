import React from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FEF8EA]">
      <div className="bg-[#FEF8EA] p-8 w-full max-w-md">
        <h1 className="text-[50px] font-semibold mb-6 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <input 
              placeholder="Username"
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-[10px]"
              required
            />
          </div>
          <div className="mb-4">
            <input 
              placeholder="Password"
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-[10px]"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input 
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              Remember Me
            </label>
            <a href="/forgot-password" className="text-slate-800 hover:underline">
              Forgot Me?
            </a>
          </div>
          <button
             onClick={() => navigate('/Home')}
            className="w-full bg-black text-white py-2 rounded-[30px] hover:bg-slate-700 shadow-md mt-10 font-bold"
          >
            Sign In
          </button>
          <button
             onClick={() => navigate('/Nopage')}
            className="w-full bg-white text-black py-2 rounded-[30px] hover:bg-slate-200 mt-3 shadow-md font-bold"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
