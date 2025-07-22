import { supabase } from '../_lib/supabase';

export default async function Page() {
  const { data, error } = await supabase.auth.signUp({
    email: 'dlidman@gmail.com',
    password: 'tzAWBm_aRGL@ro8NF7mX',
  });

  return <h1>SIGN UP</h1>;
}
