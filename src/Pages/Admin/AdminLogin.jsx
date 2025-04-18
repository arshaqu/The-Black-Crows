import React, { useState } from 'react';
import './Admin.css';
import Image1 from '../../Assets/tshirt6.jpg'; // Import your image
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
      
        try {
            const response = await axios.post('https://13.60.192.35/api/admin_side/admin-login/', {
                email: email,
                password: password
              });
              console.log(response, 'fsdfsdf');
              const AdminToken = response.data.tokens.access;
              console.log('Access Token stored:', AdminToken);              
              localStorage.setItem('AdminToken', AdminToken);
              navigate('/admin/dashboard')
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
    return (
        <div
            style={{
                backgroundImage: `url(${Image1})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="relative min-h-screen flex justify-center items-center"
        >
            
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* Login form */}
            <div style={{backgroundColor:'rgba(255, 255, 255, 0.5)' , width:'450px' ,height:'auto'}} className="relative z-10 shadow-md rounded-lg text-left w-105 p-8">
                <h2 className="text-xl text-gray-800 text-center montserratant font-bold">Admin Login to your Account</h2>
                <div className="mt-4">
                    <label className="block font-semibold text-gray-800 montserrat">Email</label>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="border w-full h-10 px-4 mt-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400 montserrat"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="block font-semibold text-gray-800 montserrat">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="border w-full h-10 px-4 mt-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 montserrat"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="mt-2">
                        <button
                           
                            onClick={handleSubmit}
                            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-colors montserrat"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
