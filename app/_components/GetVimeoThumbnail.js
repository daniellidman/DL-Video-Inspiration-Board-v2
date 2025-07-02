export async function getVimeoThumbnail(videoUrl) {
  // Extract Vimeo video ID
  const match = videoUrl.match(/vimeo\.com\/(?:.*\/)?(\d+)/);
  if (!match) {
    throw new Error('Invalid Vimeo URL');
  }
  const videoId = match[1];

  // Use Vimeo oEmbed API to get thumbnail
  const oEmbedUrl = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`;

  const response = await fetch(oEmbedUrl);
  if (!response.ok) {
    throw new Error(`Vimeo API error: ${response.status}`);
  }

  const data = await response.json();
  return data.thumbnail_url;
}

/*
// Example usage
getVimeoThumbnail('https://vimeo.com/76979871')
  .then((thumbnailUrl) => console.log('Thumbnail:', thumbnailUrl))
  .catch((err) => console.error(err));
*/
