// VideoBackground.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface VideoBackgroundProps {
  videos: string[]; // Array of video sources
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videos }) => {
  const [visibleVideoIndex, setVisibleVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setVisibleVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    const currentVideo = document.getElementById(
      `video-${visibleVideoIndex}`
    ) as HTMLVideoElement;

    currentVideo.addEventListener("ended", handleVideoEnd);

    return () => {
      currentVideo.removeEventListener("ended", handleVideoEnd);
    };
  }, [visibleVideoIndex, videos, handleVideoEnd]);

  return (
    <Container>
      {videos.map((video, index) => (
        <StyledVideo
          key={index}
          id={`video-${index}`}
          autoPlay
          muted
          loop={index === videos.length - 1 ? true : false}
          style={{
            display: index === visibleVideoIndex ? "block" : "none",
          }}
        >
          <source src={video} type="video/mp4" />
        </StyledVideo>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default VideoBackground;
