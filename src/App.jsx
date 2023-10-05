// src/App.tsx
import './styles/admin.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import UserManagement from './components/UserManagement';
import Navigation from './components/Navigation';
import Login from './pages/login/Login';
import Register from './pages/register/Register'; // Import trang Đăng ký

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây (gửi yêu cầu API đăng nhập)
    // Sau khi đăng nhập thành công, đặt setIsLoggedIn(true)
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <div>
            <Navigation />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<ProductManagement />} />
              <Route path="/users" element={<UserManagement />} />
              {/* Định nghĩa các Route cho các trang khác nhau ở đây */}
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />} // Trang Đăng nhập
            />
            <Route
              path="/register"
              element={<Register />} // Trang Đăng ký
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
