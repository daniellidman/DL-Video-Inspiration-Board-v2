'use client ';
import Image from 'next/image';
import Link from 'next/link';
import { getLikes } from '../_lib/dataService';
import { getVimeoThumbnail } from './GetVimeoThumbnail';

async function VideoLibrary() {
  const allLikes = await getLikes();
  let likes = allLikes;

  return (
    <div className="flex flex-wrap justify-between gap-2">
      {likes.map((like) => {
        return Inspo(like);
      })}
    </div>
  );
}

async function Inspo(props) {
  const thumbnailSRC = await getVimeoThumbnail(props.url);

  return (
    <div className="relative h-64 w-64 flex-grow" key={props.link}>
      <div className="hover:opacity-10">
        <Link href={`/?${props.id}`} title={props.name}>
          <Image
            src={thumbnailSRC}
            fill
            className="z-10 w-full object-cover"
            alt={props.name}
          />
        </Link>
      </div>
      <h3 className="p-4 text-lg font-bold text-white">{props.name}</h3>
      <h4 className="px-4 text-white">by {props.author}</h4>
    </div>
  );
}

export default VideoLibrary;
