export default function VimeoEmbed(link) {
  return (
    <div className="relative aspect-video pt-3">
      <iframe
        src="https://player.vimeo.com/video/805576563?h=df0a90a7fa"
        className="absolute left-0 top-0 h-full w-full rounded-2xl"
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
}
