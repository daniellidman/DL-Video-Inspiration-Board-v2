import NewVideo from '../_components/NewVideo';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';

export const metadata = {
  title: 'Add New Video | Video Inspiration Board',
};

export default async function Page() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div>
      <NewVideo />
    </div>
  );
}
