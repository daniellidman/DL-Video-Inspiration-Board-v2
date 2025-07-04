'use client';

import Image from 'next/image';
import { useState } from 'react';

function NewVideoForm() {
  const [formData, setFormData] = useState({
    name: 'Name',
    url: 'URL',
    author: 'Author',
    tags: '',
    yearPublished: 'Year Published',
    thumbnail: '',
    notes: '',
  });

  async function videoLookUp(inputUrl) {
    // Extract Vimeo video ID
    const match = inputUrl.match(/vimeo\.com\/(?:.*\/)?(\d+)/);
    if (!match) {
      throw new Error('Invalid Vimeo URL');
    }
    const videoId = match[1];

    // Use Vimeo oEmbed API to get thumbnail
    const oEmbedUrl = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`;

    const response = await fetch(oEmbedUrl);
    if (!response.ok) {
      throw new Error(`Vimeo API error: ${response.status}`);
    }

    const data = await response.json();
    // return data.thumbnail_url;

    setFormData((prevState) => ({
      ...prevState,
      thumbnail: data.thumbnail_url,
    }));

    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      <div className="m-5">
        <div className="w-full rounded-md">
          {formData.thumbnail === '' ? (
            <div className="bg-slate-200"></div>
          ) : (
            <Image
              src={formData.thumbnail}
              alt="thumbnail"
              fill
              className="z-10 w-full object-cover"
            />
          )}
        </div>
      </div>
      <form className="m-5 text-white">
        {/* <label className="block font-semibold">Name</label> */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full bg-transparent text-2xl font-bold"
        />
        {/* <label className="block font-semibold">Author</label> */}
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="mb-1 mt-1 block w-full bg-transparent text-lg font-semibold"
        />
        {/* <label className="block font-semibold">URL</label> */}
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          className="block w-full bg-transparent text-sm text-blue-200 underline"
        />

        {/* <label className="block font-semibold">Year Published</label> */}
        <input
          type="text"
          name="yearPublished"
          value={formData.yearPublished}
          onChange={handleChange}
          className="mb-10 mt-2 block w-full bg-transparent text-xs"
        />

        <label className="mt-10 block text-lg font-semibold">Notes</label>
        <input
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="mb-10 block w-full bg-transparent text-xs"
        />
        <label className="block text-lg font-semibold">Tags</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="block w-full bg-transparent text-xs"
        />

        {/* <label className="block font-semibold">Thumbnail URL</label> */}
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          className="block w-full bg-transparent"
        />
        <button
          type="submit"
          className="mb-2 me-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium hover:bg-black focus:outline-none focus:ring-1 focus:ring-gray-300"
        >
          Submit{' '}
        </button>
      </form>
    </div>
  );
}

export default NewVideoForm;

/* To Do:
Basically make the form. Then next to the URL have a "lookup" button, so that it will fill in all the other form fields for you. 
*/
