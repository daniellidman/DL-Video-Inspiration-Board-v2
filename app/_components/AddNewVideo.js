'use client';

import { useState } from 'react';
import Link from 'next/link';

function AddNewVideo() {
  const [formData, setFormData] = useState({
    url: '',
    name: '',
    thumbnail: '',
  });
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="bg-slate-600">
      <form action={handleSubmit}>
        <input type="text" value={formData.url} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewVideo;

// REFACTOR: THIS IS COPIED AND PASTED FROM THE VIDEO DETAILS COMPONENT

function EmbeddedVideo() {
  return (
    <div className="m-5">
      <div className="w-full rounded-md">
        <TempEmbedCode />
      </div>
    </div>
  );
}

function TempEmbedCode() {
  return (
    <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
      <iframe
        src="https://player.vimeo.com/video/724972964?h=59d1872ce3&autoplay=0"
        frameBorder="0"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute left-0 top-0 h-full w-full"
      ></iframe>
    </div>
  );
}

function VideoInfo() {
  return (
    <div className="m-5 overflow-scroll text-wrap break-words">
      <h1 className="text-2xl font-bold text-white">
        SEAWATCH - Human rights are #non-negotiable
      </h1>
      <h2 className="mb-1 mt-1 text-lg font-semibold text-white">
        Stefanie Soho
      </h2>
      <Link
        href="https://vimeo.com/606547650"
        target="_blank"
        className="mb-10 text-sm text-blue-200 underline"
      >
        https://vimeo.com/606547650
      </Link>
      <h2 className="mt-10 text-lg font-semibold text-white">Notes</h2>
      <p className="mb-10 text-xs text-white">
        I like the color grade on this video.
      </p>
      <h2 className="text-lg font-semibold text-white">Tags</h2>
      <p className="text-xs text-white">
        LHNL Case Study, Bayside DS, Summit 2025
      </p>
    </div>
  );
}
