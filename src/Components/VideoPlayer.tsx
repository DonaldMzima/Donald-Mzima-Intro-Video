import React from "react";
import ReactPlayer from "react-player";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

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
    <div className="relative flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white text-center">
        <h1 className="text-xl font-semibold">
          Donald Mzima's Video Intro for Trigify.io
        </h1>
      </nav>

      {/* Video Player Container */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-full max-w-3xl">
          <ReactPlayer
            url={videoUrl}
            playing
            controls
            width="100%"
            height="auto"
            className="rounded-lg overflow-hidden"
          />
          {/* Download Button on Top of Video */}
          <button
            onClick={handleDownload}
            className="absolute top-3 left-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 z-10"
          >
            Download Video
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-white">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-4 mb-2">
            <a
              href="https://github.com/DonaldMzima"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/donald-mzima-8557a3231/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://donald-portfolio-beta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGlobe size={24} />
            </a>
            <a
              href="mailto:donaldmzima8@gmail.com"
              className="hover:text-gray-400"
            >
              <FaEnvelope size={24} />
            </a>
            <a href="tel:+27789941731" className="hover:text-gray-400">
              <FaPhone size={24} />
            </a>
          </div>

          {/* Developed By Text */}
          <p className="text-center">Developed by Donald Mzima</p>

          {/* Contact Info */}
          <div className="mt-2">
            <p>
              Email:{" "}
              <a
                href="mailto:donaldmzima8@gmail.com"
                className="hover:underline"
              >
                donaldmzima8@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+27789941731" className="hover:underline">
                +27789941731
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoPlayer;
0;
