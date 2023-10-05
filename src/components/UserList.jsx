// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách người dùng khi component được tạo
    apiService.get('/users') // Thay đổi URL thành các API của bạn
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.userName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
