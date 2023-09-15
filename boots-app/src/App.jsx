import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [boots] = useState([
    { id: 1, name: "Boot 1", size: "10", color: "Black" },
    { id: 2, name: "Boot 2", size: "9", color: "Red" },
  ]);

  const handleRegister = async (formData) => {
  
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );
      if (response.status === 201) {
        console.log(response.data);
         navigate('/login');

      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        formData
      );
      if (response.status === 200) {
        console.log(response.data);
        const { token, userId } = response.data;
        setUser({ token, userId });
        navigate('/home')

      } else {
        console.error("Login Failed");
      }
    } catch(error) {
      console.error(error);
    }
  };

  return (
        <Routes>
          <Route index  element={<Register onRegsiter={handleRegister} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={user ? <Home boots={boots} /> : <Login onLogin={handleLogin} />} />
        </Routes>
  );
};

export default App;
