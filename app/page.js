import { likes } from './_lib/likesArray';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
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
      <Link href="#" title={props.name} className="flex h-72">
        <Image
          src={props.pictures.base_link}
          fill
          className="w-full object-cover"
          alt={props.name}
        />
        <div className="thumbnail-text">
          <h3>{props.name}</h3>
          <h4>by {props.user.name}</h4>
        </div>
      </Link>
    </div>
  );
}
