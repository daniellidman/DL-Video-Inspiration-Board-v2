import Image from 'next/image';
import Link from 'next/link';
import { getLikes } from '../_lib/dataService';

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

function Inspo(props) {
  return (
    <div
      className="relative h-64 w-64 flex-grow hover:bg-black"
      key={props.link}
    >
      <Link href={`/${props.id}`} title={props.name} className="hover:bg-black">
        <Image
          src={props.thumbnail}
          fill
          className="w-full object-cover"
          alt={props.name}
        />
        <div className="thumbnail-text">
          <h3>{props.name}</h3>
          <h4>by {props.author}</h4>
        </div>
      </Link>
    </div>
  );
}

export default VideoLibrary;
