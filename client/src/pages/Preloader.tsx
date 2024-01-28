/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import preloaderVideo from "/preloader.mp4";

const flashAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const PreloaderLogo = styled.img`
  animation: ${flashAnimation} 2s infinite;
  width: auto;
  height: 80vh;
  @media (max-width: 786px) {
    width: 80%;
    height: auto;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Preloader = ({ onFinish }: any) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsVisible(false);
      onFinish(); // Callback to notify the parent component that the preloader has finished
    }, 5000); // 5000 milliseconds (5 seconds)

    const flashingTimer = setTimeout(() => {
      // Start flashing animation after 1 second
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(flashingTimer);
      clearTimeout(preloaderTimer);
    }; // Cleanup the timers on component unmount
  }, [onFinish]);

  return isVisible ? (
    <PreloaderContainer className="preloader">
      {/* Replace 'logo.png' with the path to your actual logo image */}
      <BackgroundVideo autoPlay muted loop>
        <source src={preloaderVideo} type="video/mp4" />
      </BackgroundVideo>
      <PreloaderLogo src="/logo.png" alt="Logo" />
    </PreloaderContainer>
  ) : null;
};

export default Preloader;
