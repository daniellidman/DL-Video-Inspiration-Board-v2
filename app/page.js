import Image from 'next/image';
import Link from 'next/link';
import { getLikes } from './_lib/dataService';
import VideoDetails from './_components/VideoDetails';
import VideoLibrary from './_components/VideoLibrary';
import DLVideoInspirationBoardComponent from './_components/dlVideoInspirationBoardComponent';

export default async function Page() {
  const allLikes = await getLikes();
  return (
    <div>
      <DLVideoInspirationBoardComponent allLikes={allLikes} />
      {/* <VideoDetails />
      <VideoLibrary /> */}
    </div>
  );
}
