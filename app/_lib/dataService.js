import { supabase } from './supabase';

export async function getLikes() {
  let { data, error } = await supabase.from('likes').select('*');

  if (error) {
    console.error(error);
    throw new Error(
      'Likes could not be loaded. Maybe the supabase database is paused?',
    );
  }

  return data;
}

export async function getSingleLike(videoId) {
  let { data, error } = await supabase
    .from('likes')
    .select('*')
    .eq('id', videoId);

  if (error) {
    console.error(error);
    throw new Error(
      'Likes could not be loaded. Maybe the supabase database is paused?',
    );
  }

  return data;
}
