import Image from 'next/image';
import Link from 'next/link';
import { getSingleLike } from '../_lib/dataService';
import VimeoEmbed from '../_components/VimeoEmbed';

export default async function Page({ params }) {
  const likeData = await getSingleLike(params.videoId);
  const { name, author, link, release_time, thumbnail } = likeData[0];

  return (
    <div className="">
      <h1 className="text-3xl">
        REDO SUPABASE WITH ALL THE VIMEO player_embed_url links
      </h1>
      <p>{name}</p>
      <p>{author}</p>
      <p>{release_time}</p>
      <p>{link}</p>
      <p>{thumbnail}</p>
      <VimeoEmbed link={link} />
    </div>
  );
}
