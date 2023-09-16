import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Cart from "./components/Cart";
import { useDispatch , useSelector } from "react-redux";
import { addToCart , removeFromCart , increaseQuantity , decreaseQuantity } from "./actions/CartAction";


const App = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState(null);
  const [boots] = useState([
    { id: 1, name: "Boot 1", size: "10", color: "Black" },
    { id: 2, name: "Boot 2", size: "9", color: "Red" },
  ]);

  const dispatch = useDispatch();

  const handleAddToCart = (bootId) => {
    dispatch(addToCart(bootId));
    navigate('/cart');
  }

  const handleRemoveFromCart = (bootId) => {
    dispatch(removeFromCart(bootId));
  }

  const handleIncreaseQuantity = (bootId) => {
    dispatch(increaseQuantity(bootId));
  }


  const handleDecreaseQuantity = (bootId) => {
    dispatch(decreaseQuantity(bootId));
  }




  // const handleClick = (boot) => {
  //   dispatch(addToCart(boot));
  //   navigate('/cart')
  // }

  const saveTokenToSessionStorage = (token) => {
    sessionStorage.setItem("Token" , token);
  }

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
        saveTokenToSessionStorage(token);
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
          <Route path="/home" element={<Home boots={boots} onAddToCart={handleAddToCart} />} />
          <Route path='/cart' element={user ? (<Cart boots={boots}  removeFromCart={handleRemoveFromCart} increaseQuantity={handleIncreaseQuantity} decreaseQuantity={handleDecreaseQuantity} />) : (<Navigate to='/login' replace />)} />
        </Routes>
  );
};

export default App;
