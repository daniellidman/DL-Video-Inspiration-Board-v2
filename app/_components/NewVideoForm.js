'use client';

import { useState } from 'react';

function NewVideoForm() {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    author: '',
    tags: '',
    yearPublished: '',
    allStars: '',
    thumbnail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form>
      <label>URL</label>
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <button type="submit">Submit </button>
    </form>
  );
}

export default NewVideoForm;

/* To Do:
Basically make the form. Then next to the URL have a "lookup" button, so that it will fill in all the other form fields for you. 
*/
