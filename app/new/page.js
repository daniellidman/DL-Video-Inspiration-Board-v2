'use client';

import NewVideo from '../_components/NewVideo';
import { redirect } from 'next/navigation';
import { useSession } from '@supabase/auth-helpers-react';

export default function Page() {
  const session = useSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div>
      <NewVideo />
    </div>
  );
}
