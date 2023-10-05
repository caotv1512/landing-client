// src/pages/Register.jsx
import React, { useState } from 'react';
import './RegisterForm.css'; // Import CSS
import { Link } from 'react-router-dom';
import apiService from '../../services/apiService'; // Import apiService

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 0, // Mặc định là 'Người dùng'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Nếu trường name là 'role', chuyển đổi giá trị thành kiểu số
    const newValue = name === 'role' ? parseInt(value, 10) : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleRegister = async () => {
    try {
      // Gửi yêu cầu đăng ký đến API bằng apiService
      const response = await apiService.post('/users', formData);

      // Kiểm tra phản hồi từ API
      if (response) {
        // Đăng ký thành công, xử lý hoặc điều hướng sang trang khác
        console.log('Đăng ký thành công', response);
      } else {
        // Đăng ký thất bại, xử lý lỗi hoặc hiển thị thông báo cho người dùng
        console.error('Đăng ký thất bại');
      }
    } catch (error) {
      console.error('Lỗi kết nối đến API', error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Đăng ký</h2>
      <div>
        <input
          className="register-input"
          type="text"
          placeholder="Tên người dùng"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          className="register-input"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          className="register-input"
          type="password"
          placeholder="Mật khẩu"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <select
          className="register-input"
          name="role"
          value={formData.role.toString()} // Chuyển đổi kiểu dữ liệu sang chuỗi
          onChange={handleChange}
        >
          <option value="0">Người dùng</option>
          <option value="1">Quản trị viên</option>
        </select>
      </div>
      <button className="register-button" onClick={handleRegister}>
        Đăng ký
      </button>
      <p>
        Đã có tài khoản?{' '}
        <Link to="/login">Đăng nhập</Link> {/* Liên kết đến trang Đăng nhập */}
      </p>
    </div>
  );
}

export default Register;
