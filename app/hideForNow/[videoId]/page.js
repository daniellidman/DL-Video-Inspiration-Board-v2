import Image from 'next/image';
import Link from 'next/link';
import { getSingleLike } from '../../_lib/dataService';
import VimeoEmbed from '../../_components/VimeoEmbed';

export default async function Page({ params }) {
  const likeData = await getSingleLike(params.videoId);
  const { name, author, link, release_time, thumbnail } = likeData[0];

  return (
    <div className="">
      <h1 className="text-3xl">
        REDO SUPABASE WITH ALL THE VIMEO player_embed_url links
      </h1>
      <h1 className="m-6 text-2xl font-bold">{name}</h1>
      <p>by {author}</p>
      <p>{release_time}</p>
      <p>{link}</p>
      <Image src={thumbnail} />
      <p>{thumbnail}</p>
      <VimeoEmbed link={link} />
    </div>
  );
}
