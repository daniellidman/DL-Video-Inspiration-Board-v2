export const fetchCache = 'force-no-store'; // alternative to force-dynamic

import { getLikes } from './_lib/dataService';
import DLVideoInspirationBoardComponent from './_components/DLVideoInspirationBoardComponent';

console.log('Page Component Running');

export default async function Page() {
  const allLikes = await getLikes();
  return (
    <div>
      <DLVideoInspirationBoardComponent allLikes={allLikes} />
    </div>
  );
}
