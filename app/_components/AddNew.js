'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession } from '@supabase/auth-helpers-react';

function AddNew() {
  const session = useSession();

  return (
    <div>
      {session ? (
        <Link href="/new">
          <button className="m-6 text-xl font-bold text-white">+</button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AddNew;
