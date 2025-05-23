// import { likes } from './_lib/likesArray';
import Image from 'next/image';
import Link from 'next/link';
import { getLikes } from './_lib/dataService';
import VideoDetails from './_components/VideoDetails';
import VideoLibrary from './_components/VideoLibrary';

export default function Page() {
  return (
    <div>
      <VideoDetails />
      <VideoLibrary />
    </div>
  );
}

/*
const allLikes = await getLikes();

export default function Page() {
  const likes = allLikes;
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      {likes.map((like) => {
        return Inspo(like);
      })}
    </div>
  );
}

function Inspo(props) {
  return (
    <div className="relative flex-grow" key={props.link}>
      <Link href={`/${props.id}`} title={props.name} className="flex h-72">
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
*/
