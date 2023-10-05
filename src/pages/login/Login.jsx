// src/components/Login.jsx
import React, { useState } from "react";
import "./index.css"; // Import CSS
import { Link } from "react-router-dom";
import apiService from "../../services/apiService"; // Import apiService

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      // Gửi yêu cầu đăng nhập đến API bằng apiService
      const response = await apiService.post("users/login", formData);
      console.log(response, "response");
      // Kiểm tra phản hồi từ API
      if (response) {
        // Đăng nhập thành công, xử lý token hoặc điều hướng sang trang khác
        console.log("Đăng nhập thành công", response);
      } else {
        // Đăng nhập thất bại, xử lý lỗi hoặc hiển thị thông báo cho người dùng
        console.error("Đăng nhập thất bại");
      }
    } catch (error) {
      console.error("Lỗi kết nối đến API", error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Đăng nhập</h2>
      <div>
        <input
          className="login-input"
          type="text"
          placeholder="Tên người dùng"
          name="username" // Sử dụng name để xác định trường cần cập nhật
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          className="login-input"
          type="password"
          placeholder="Mật khẩu"
          name="password" // Sử dụng name để xác định trường cần cập nhật
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Đăng nhập
      </button>
      <p>
        Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>{" "}
        {/* Liên kết đến trang Đăng ký */}
      </p>
    </div>
  );
}

export default Login;
