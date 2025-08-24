'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { updateSupabase } from '../_lib/dataService';
import { useRouter } from 'next/navigation';
import { VideoEmbedCode } from './VideoEmbedCode';
import { useSession } from '@supabase/auth-helpers-react';

function DLVideoInspirationBoardComponent({ allLikes }) {
  let likes = allLikes;
  const [selectedVideo, setSelectedVideo] = useState();
  const [filteredLikes, setFilteredLikes] = useState(likes);

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
      <div className="flex w-full bg-gray-900">
        <button>
          <Image
            src="/filter.png"
            alt="Sort Icon"
            width={30}
            height={30}
            className="my-2 ml-5"
          />
        </button>
      </div>

      {/* VIDEO LIBRARY */}
      <div className="flex flex-wrap justify-between gap-2">
        {filteredLikes.map((like) => {
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

  const session = useSession();

  console.log(selectedVideo);

  if (!selectedVideo) {
    return <></>;
  }

  return (
    <div>
      {showEditComponent ? (
        <EditComponent
          video={video}
          onClose={() => setShowEditComponent(false)}
        />
      ) : (
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <div className="m-5">
            <div className="w-full rounded-md">
              <VideoEmbedCode video={video} />
            </div>
          </div>
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

            {session ? (
              <button
                className="my-6 rounded-lg p-2 text-sm hover:bg-gray-600"
                onClick={() => setShowEditComponent(!showEditComponent)}
              >
                Edit
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function EditComponent({ video, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    ...video,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateSupabase(formData);
      onClose();
      router.refresh();
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
        <button
          onClick={onClose}
          className="rounded-lg p-2 text-sm hover:bg-gray-600"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
