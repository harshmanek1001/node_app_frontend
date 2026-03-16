import React, { useEffect, useState } from 'react';
import { getItems } from '../services/api';

const GetItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch items');
    }
  };

  return (
    <div>
      <h2>Items List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{new Date(item.created_at).toLocaleString()}</td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td colSpan="4">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetItems;
