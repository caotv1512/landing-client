// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        {/* Thêm các liên kết khác tại đây */}
      </ul>
    </nav>
  );
}

export default Navigation;
