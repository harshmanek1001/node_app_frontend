import React, { useState } from 'react';
import { updateItem } from '../services/api';

const UpdateItem = () => {
  const [formData, setFormData] = useState({ id: '', name: '', description: '' });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      if (!formData.id) {
        setError('Item ID is required');
        return;
      }
      await updateItem(formData.id, { name: formData.name, description: formData.description });
      setMessage('Item updated successfully!');
      setFormData({ id: '', name: '', description: '' });
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to update item');
    }
  };

  return (
    <div>
      <h2>Update Existing Item</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Item ID:</label><br />
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>New Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>New Description:</label><br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItem;
