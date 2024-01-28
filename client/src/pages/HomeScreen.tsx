import { useRef, useEffect } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: 90%;
  z-index: 1;
  padding: 25px;
  color: #ffffff;
  /* Neumorphism base styles */
  background-color: #f2f2f2; /* Light background color */
  border-radius: 32px;
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5),
    inset 0 2px 8px rgba(0, 0, 0, 0.15);

  /* Glassmorphism effect on top */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.2);
`;

const videoSources = [
  "1.mp4",
  "2.mp4",
  "3.mp4",
  "4.mp4",
  "5.mp4",
  "6.mp4",
  "7.mp4",
  "8.mp4",
];

const HomeScreen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const playNextVideo = () => {
        const currentIndex = videoElement.dataset.index
          ? parseInt(videoElement.dataset.index, 10)
          : 0;

        const nextIndex = (currentIndex + 1) % videoSources.length;
        videoElement.src = videoSources[nextIndex];
        videoElement.dataset.index = nextIndex.toString();
        videoElement.play();

        // Set the playbackRate to reduce speed by half
        videoElement.playbackRate = 0.5;
      };

      videoElement.addEventListener("ended", playNextVideo);

      return () => {
        videoElement.removeEventListener("ended", playNextVideo);
      };
    }
  }, []);

  return (
    <>
      <VideoContainer>
        <Video ref={videoRef} autoPlay muted playsInline>
          <source src={videoSources[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
      <ContentContainer>
        <div>
          <h1>Welcome to Your Website</h1>
          <p>This is your home screen content.</p>
        </div>
      </ContentContainer>
    </>
  );
};

export default HomeScreen;
