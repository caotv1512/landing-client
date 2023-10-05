// src/components/UserManagement.jsx
import React, { useState, useEffect } from 'react';

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách người dùng và cập nhật state 'users'
  }, []);

  return (
    <div>
      <h2>Quản lý người dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.email})
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
