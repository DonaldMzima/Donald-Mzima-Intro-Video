import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC = () => {
  const videoUrl = "/DonandMzima.mov"; // Correct path to your video file

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = "video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <ReactPlayer
        url={videoUrl}
        playing
        controls
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
      />
      <button
        onClick={handleDownload}
        className="absolute bottom-5 left-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Download Video
      </button>
    </div>
  );
};

export default VideoPlayer;
