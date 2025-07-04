'use client';

import Link from 'next/link';
import { useState } from 'react';
import NewVideoForm from './NewVideoForm';

function VideoDetails() {
  const [addVideoState, setAddVideoState] = useState(false);

  console.log(addVideoState);

  return (
    <div>
      {addVideoState ? (
        <NewVideoForm />
      ) : (
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <EmbeddedVideo />
          <VideoInfo />
        </div>
      )}
      <div className="col-span-2">
        <button className="text-white">Edit</button>
        <button
          onClick={() => setAddVideoState(!addVideoState)}
          className="text-white"
        >
          Add New
        </button>
      </div>
    </div>
  );
}

function EmbeddedVideo() {
  return (
    <div className="m-5">
      <div className="w-full rounded-md">
        <TempEmbedCode />
      </div>
    </div>
  );
}

function VideoInfo() {
  return (
    <div className="m-5 overflow-scroll text-wrap break-words text-white">
      <h1 className="text-2xl font-bold">
        SEAWATCH - Human rights are #non-negotiable
      </h1>
      <h2 className="mb-1 mt-1 text-lg font-semibold">Stefanie Soho</h2>
      <Link
        href="https://vimeo.com/606547650"
        target="_blank"
        className="mb-10 text-sm text-blue-200 underline"
      >
        https://vimeo.com/606547650
      </Link>
      <p className="mb-10 mt-2 text-xs">2024</p>
      <h2 className="mt-10 text-lg font-semibold">Notes</h2>
      <p className="mb-10 text-xs">I like the color grade on this video.</p>
      <h2 className="text-lg font-semibold">Tags</h2>
      <p className="text-xs">LHNL Case Study, Bayside DS, Summit 2025</p>
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

export default VideoDetails;
