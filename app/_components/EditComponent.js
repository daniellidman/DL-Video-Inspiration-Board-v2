import { useState } from 'react';
import { updateSupabase } from '../_lib/dataService';

export default function EditComponent({ video }) {
  const [value, setValue] = useState({
    ...video,
  });

  const handleChange = (e) => {
    const { name, formValue } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: formValue }));
  };

  const handleSubmit = async (video) => {
    updateSupabase(video);
  };

  console.log(value);
  return (
    <form className="text-white">
      <p>Name</p>
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleChange}
        className="w-3/4 bg-gray-800"
      ></input>
      <p>Author</p>
      <input
        type="text"
        name="author"
        value={value.author}
        onChange={handleChange}
        className="w-3/4 bg-gray-800"
      ></input>
      <p>URL</p>
      <input
        type="text"
        name="url"
        value={value.url}
        onChange={handleChange}
        className="w-3/4 bg-gray-800"
      ></input>
      <p>Notes</p>
      <input
        type="text"
        name="notes"
        value={value.notes}
        onChange={handleChange}
        className="w-3/4 bg-gray-800"
      ></input>
      <p>Thumbnail Link</p>
      <input
        type="text"
        name="thumbnail"
        value={value.thumbnail}
        onChange={handleChange}
        className="w-3/4 bg-gray-800"
      ></input>
      <button onClick={handleSubmit} className="m-2 block">
        Submit
      </button>
    </form>
  );
}
