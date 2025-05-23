import Link from 'next/link';

function VideoDetails() {
  return (
    <div className="grid grid-cols-2">
      <EmbeddedVideo />
      <VideoInfo />
    </div>
  );
}

function EmbeddedVideo() {
  return (
    <div className="m-5">
      <div className="h-96 w-full rounded-md bg-red-300">
        <h1>Video Here</h1>
        <TempEmbedCode />
      </div>
    </div>
  );
}

function VideoInfo() {
  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold text-white">
        SEAWATCH - Human rights are #non-negotiable
      </h1>
      <h2 className="mb-1 mt-1 text-lg font-semibold text-white">
        Stefanie Soho
      </h2>
      <Link
        href="https://vimeo.com/606547650"
        target="_blank"
        className="mb-10 text-sm text-blue-200 underline"
      >
        https://vimeo.com/606547650
      </Link>
      <h2 className="mt-10 text-lg font-semibold text-white">Notes</h2>
      <p className="mb-10 text-xs text-white">
        I like the color grade on this video.
      </p>
      <h2 className="text-lg font-semibold text-white">Tags</h2>
      <p className="text-xs text-white">
        LHNL Case Study, Bayside DS, Summit 2025
      </p>
    </div>
  );
}

function TempEmbedCode() {
  return (
    <>
      <div className="relative w-full">
        <iframe
          src="https://player.vimeo.com/video/606547650?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          width="1337"
          height="640"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className=""
          // style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="SEAWATCH - Human rights are #non-negotiable"
        ></iframe>
      </div>

      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}

export default VideoDetails;
