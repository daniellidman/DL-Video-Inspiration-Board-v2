import { supabase } from './supabase';

export async function getLikes() {
  let { data, error } = await supabase.from('videos').select('*');

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
    .from('videos')
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

export async function updateSupabase(video) {
  const { name, author, url, yearPublished, thumbnail, notes, id } = video;

  const { data, error } = await supabase
    .from('videos')
    .update({ name, author, url, thumbnail, notes, yearPublished })
    .eq('id', id);

  console.log(data);

  if (error) throw new Error('Database could not be updated');
  return data;
}
