import React, { useState } from "react";
import axios from "axios";
import Logo from '../../assets/foto/toplogo.png'
import { useNavigate } from "react-router-dom";


function PanelLogin(){
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({username: "", password: ""}); 
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({ ...credentials, [name]: value });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post("http://localhost:8000/panel/api/token/", {
              username: credentials.username,
              password: credentials.password,
            });
        localStorage.setItem("token", response.data.access);navigate("/panel/dashboard");
    } catch (err) {
      setError("Invalid username or password.");
    }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <div className="logo text-center">
                <img src={Logo} className="h-20 mx-auto" alt="MediFlow" />
                <h2 className="text-md text-gray-800 font-bold mb-4 uppercase">
                    Admin Panel
                </h2>
            </div>
            {error && <div className="text-white p-2 text-center font-bold bg-red-500 text-sm mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block my-1 text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </div>
    
              <div className="mb-6">
                <label htmlFor="password" className="block my-1 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
    
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }

export default PanelLogin