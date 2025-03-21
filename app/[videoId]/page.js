import Image from 'next/image';
import Link from 'next/link';
import { getSingleLike } from '../_lib/dataService';

export default async function Page({ params }) {
  const likeData = await getSingleLike(params.videoId);
  const { name, author, link, release_time, thumbnail } = likeData[0];

  return (
    <div className="">
      <p>{name}</p>
      <p>{author}</p>
      <p>{release_time}</p>
      <p>{link}</p>
      <p>{thumbnail}</p>
      // FIGURE OUT HOW TO EMBED VIMEO VID
      <iframe src="https://player.vimeo.com/606547650" allowFullScreen />
    </div>
  );
}
