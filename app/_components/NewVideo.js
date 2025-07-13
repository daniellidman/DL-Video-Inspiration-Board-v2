'use client';

import { useState } from 'react';
import { submitNewVideo } from '../_lib/dataService';
import { useRouter } from 'next/navigation';

export default function NewVideo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: 'Name',
    url: 'url',
    author: 'author',
    notes: '',
    thumbnail: '',
    yearPublished: 'Year Published',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitNewVideo(formData);
      router.push('/');
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  return (
    <div className="mx-5 mb-8 grid grid-cols-1 rounded-lg bg-gray-700 py-5 sm:grid-cols-2 lg:grid-cols-2">
      <div className="m-5 my-auto">
        <div className="m-auto">
          <img
            src={formData.thumbnail ? formData.thumbnail : '/tempThumb.jpg'}
            alt="thumbnail"
            fill
            className="rounded-2xl"
          />
        </div>
      </div>
      <form className="m-5 overflow-scroll text-wrap break-words text-white">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-3/4 bg-gray-700 text-2xl font-bold"
        ></input>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="mb-1 mt-1 w-3/4 bg-gray-700 text-lg font-semibold"
        ></input>
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          className="w-3/4 bg-gray-700 text-sm text-blue-200 underline"
        ></input>
        <input
          type="text"
          name="yearPublished"
          value={formData.yearPublished}
          onChange={handleChange}
          className="mb-10 mt-2 w-3/4 bg-gray-700 text-xs"
        ></input>
        <p className="text-lg font-semibold">Notes</p>
        <input
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="mb-10 w-full bg-gray-700 text-xs"
        ></input>
        <p className="mt-10 text-lg font-semibold">Thumbnail Link</p>
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          className="mb-6 w-full bg-gray-700 text-xs text-blue-200 underline"
        ></input>
        <br></br>
        <button
          onClick={handleSubmit}
          className="mr-2 rounded-lg p-2 text-sm hover:bg-gray-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
