// HomePage.tsx
import React from "react";
import VideoBackground from "./VideoBackground";

const HomePage: React.FC = () => {
  const videoSources = ["/1.mp4", "/2.mp4", "/3.mp4"];

  return (
    <div>
      <VideoBackground videos={videoSources} />
    </div>
  );
};

export default HomePage;
