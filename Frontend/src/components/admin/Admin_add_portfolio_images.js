import React, { useState } from 'react';
import axios from 'axios';

export default function AdminAddPortfolioMedia() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [mediaItems, setMediaItems] = useState([]);
  const [newMediaLink, setNewMediaLink] = useState('');
  const [mediaType, setMediaType] = useState('image'); // Default to image
  const [error, setError] = useState('');

  const categories = ['wedding', 'business', 'baby', 'pre-wedding', 'maternity', 'personal', 'family', 'post-wedding', 'travel', 'other'];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleNewMediaLinkChange = (event) => {
    setNewMediaLink(event.target.value);
  };

  const handleMediaTypeChange = (event) => {
    setMediaType(event.target.value);
  };

  const handleRemoveMediaItem = (index) => {
    const updatedMediaItems = [...mediaItems];
    updatedMediaItems.splice(index, 1);
    setMediaItems(updatedMediaItems);
  };

  const handleSubmit = async () => {
    try {
      if (selectedCategory && mediaItems.length > 0) {
        await axios.post(`http://localhost:5000/portfolio/${selectedCategory}/add`, { mediaType, links: mediaItems });
        alert('Media links added successfully.');
        setSelectedCategory('');
        setMediaItems([]);
        setNewMediaLink('');
        setMediaType('image');
        setError('');
      } else {
        setError('Please select a category and add at least one media link.');
      }
    } catch (error) {
      setError('Error adding media links. Please try again.');
      console.error('Error adding media links:', error);
    }
  };

  const handleAddMediaItem = () => {
    if (newMediaLink.trim() !== '') {
      // Check for duplicates before adding the new link
      if (!mediaItems.includes(newMediaLink.trim())) {
        setMediaItems([...mediaItems, newMediaLink.trim()]);
        setNewMediaLink('');
        setError('');
      } else {
        setError('Media link already exists.');
      }
    } else {
      setError('Please enter a valid media link.');
    }
  };

  return (
    <div className="container my-3" style={{ display: "block" }}>
      <h1 className="text-center mt-4">Add Portfolio Media</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group mt-4">
        <label htmlFor="category">Select Category:</label>
        <select className="form-control" id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="mediaType">Select Media Type:</label>
        <select className="form-control" id="mediaType" value={mediaType} onChange={handleMediaTypeChange}>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="newMediaLink">Add {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)} Link:</label>
        <div className="input-group mb-3">
          <input type="text" className="form-control w-100" id="newMediaLink" value={newMediaLink} onChange={handleNewMediaLinkChange} />
          <div className="input-group-append">
            <button className="btn btn-primary mt-2" type="button" onClick={handleAddMediaItem}>Add {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}</button>
          </div>
        </div>
      </div>
      {mediaItems.length > 0 && (
        <div className="form-group">
          <label>Added {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)} Links:</label>
          <ul className="list-group">
            {mediaItems.map((link, index) => (
              <li key={index} className="list-group-item">
                {link}
                <button type="button" className="btn btn-danger btn-sm ml-2" onClick={() => handleRemoveMediaItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  );
};
