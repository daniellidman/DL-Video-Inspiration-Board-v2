export default function VimeoEmbed(link) {
  return (
    <>
      <div className="relative">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1051061734?h=3867793bea"
          width="640"
          height="360"
          // frameborder="0"
          // allowfullscreen
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}
