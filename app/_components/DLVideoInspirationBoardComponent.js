'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tweet } from 'react-tweet';
import { updateSupabase } from '../_lib/dataService';

function DLVideoInspirationBoardComponent({ allLikes }) {
  let likes = allLikes;
  const [selectedVideo, setSelectedVideo] = useState();

  const handleClick = (video) => {
    setSelectedVideo(video);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <VideoDetails selectedVideo={selectedVideo} />

      {/* VIDEO LIBRARY */}
      <div className="flex flex-wrap justify-between gap-2">
        {likes.map((like) => {
          return (
            <div className="relative h-64 w-64 flex-grow" key={like.id}>
              <div className="hover:opacity-10">
                <Image
                  src={like.thumbnail ? like.thumbnail : '/tempThumb.jpg'}
                  fill
                  className="z-10 w-full object-cover"
                  alt={like.name}
                  onClick={() => handleClick(like)}
                />
              </div>
              <h3 className="p-4 text-lg font-bold text-white">{like.name}</h3>
              <h4 className="px-4 text-white">by {like.author}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DLVideoInspirationBoardComponent;

function VideoDetails({ selectedVideo }) {
  const [showEditComponent, setShowEditComponent] = useState(false);
  const video = selectedVideo;

  if (!selectedVideo) {
    return <></>;
  }

  return (
    <div>
      {showEditComponent ? <EditComponent video={video} /> : <></>}
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <div className="m-5">
          <div className="w-full rounded-md">
            <VideoEmbedCode video={video} />
          </div>
        </div>
        {/* <VideoInfo video={video} /> */}
        <div className="m-5 overflow-scroll text-wrap break-words text-white">
          <h1 className="text-2xl font-bold">{video.name}</h1>
          <h2 className="mb-1 mt-1 text-lg font-semibold">{video.author}</h2>
          <Link
            href={video.url ? video.url : ''}
            target="_blank"
            className="mb-10 text-sm text-blue-200 underline"
          >
            {video.url}
          </Link>
          <p className="mb-10 mt-2 text-xs">{video.yearPublished}</p>
          <h2 className="mt-10 text-lg font-semibold">Notes</h2>
          <p className="mb-10 text-xs">{video.notes}</p>
          <h2 className="text-lg font-semibold">Tags</h2>
          <p className="text-xs">{video.tags}</p>
          <button
            className="my-6 text-xs"
            onClick={() => setShowEditComponent(!showEditComponent)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

function VideoInfo({ video }) {
  return (
    <div className="m-5 overflow-scroll text-wrap break-words text-white">
      <h1 className="text-2xl font-bold">{video.name}</h1>
      <h2 className="mb-1 mt-1 text-lg font-semibold">{video.author}</h2>
      <Link
        href={video.url ? video.url : ''}
        target="_blank"
        className="mb-10 text-sm text-blue-200 underline"
      >
        {video.url}
      </Link>
      <p className="mb-10 mt-2 text-xs">{video.yearPublished}</p>
      <h2 className="mt-10 text-lg font-semibold">Notes</h2>
      <p className="mb-10 text-xs">{video.notes}</p>
      <h2 className="text-lg font-semibold">Tags</h2>
      <p className="text-xs">{video.tags}</p>
      <button
        className="my-6 text-xs"
        onClick={() => setShowEditComponent(!showEditComponent)}
      >
        Edit
      </button>
    </div>
  );
}

function VideoEmbedCode({ video }) {
  // NO VIDEO URL

  // VIMEO
  if (video.url.includes('vimeo.com')) {
    // Extract Vimeo video ID
    const match = video.url.match(/vimeo\.com\/(?:.*\/)?(\d+)/);
    if (!match) {
      throw new Error('Invalid Vimeo URL');
    }
    const vimeoId = match[1];

    return (
      <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?h=59d1872ce3&autoplay=0`}
          frameBorder="0"
          allow="fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      </div>
    );
  }

  // YOUTUBE
  if (video.url.includes('youtube.com') || video.url.includes('youtu.be')) {
    const id = video.url.split('?v=')[1];

    return (
      <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
        <iframe
          // width="full"
          // height="full"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
          className="aspect-video w-full"
        ></iframe>
      </div>
    );
  }

  // TWITTER / X
  if (video.url.includes('twitter.com' || video.url.includes('x.com'))) {
    const id = video.url.split('status/')[1];

    console.log(id);

    return <Tweet id={id} />;
  }

  if (video.url.includes('instagram.com')) {
    // INSTAGRAM EMBED CODE HERE
    return <></>;
  } else {
    return (
      <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
        <img src={video.thumbnail} alt="No embeddable video" width="full" />
        {/* <iframe
          src={`https://player.vimeo.com/video/724972964?h=59d1872ce3&autoplay=0`}
          frameBorder="0"
          allow="fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full"
        ></iframe> */}
      </div>
    );
  }
}

function EditComponent({ video }) {
  const [value, setValue] = useState({
    ...video,
  });

  const handleChange = (e) => {
    const { name, formValue } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: formValue }));
  };

  const handleSubmit = () => {};

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
      <button onClick={handleSubmit} className="block">
        Submit
      </button>
    </form>
  );
}
