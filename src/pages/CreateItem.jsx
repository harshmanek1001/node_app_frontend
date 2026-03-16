import React, { useState } from 'react';
import { createItem } from '../services/api';

const CreateItem = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });
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
      await createItem(formData);
      setMessage('Item created successfully!');
      setFormData({ name: '', description: '' });
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to create item');
    }
  };

  return (
    <div>
      <h2>Create New Item</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label><br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
};

export default CreateItem;
