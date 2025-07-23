'use client';

import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

import { createClient } from '@supabase/supabase-js';

export function SupabaseProvider({ children }) {
  const [supabaseClient] = useState(() =>
    createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY,
    ),
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}

// Try to combine Supabase with Supabase Provider
