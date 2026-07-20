"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp, FaTimes, FaPlay, FaPause } from "react-icons/fa";

export default function FloatingVideo() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Shuru mein muted rahegi taaki autoplay 100% chal jaye
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 4.5 seconds ke baad fade-in hokar autoplay start hoga
    const timer = setTimeout(() => {
      setIsLoaded(true);

      if (videoRef.current) {
        videoRef.current.muted = true; // Ensure karein ki shuru mein muted ho
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay was prevented by browser:", error);
            setIsPlaying(false);
          });
      }
    }, 4500); 

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  // Jab user play button ya video par click karega, tab video unmute ho jayegi aur play/pause toggle hoga
  const handleUserInteraction = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Jab user click karega toh sath hi un-mute bhi kar denge aur play bhi
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Click event ko parent par jane se rorega
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[240px] sm:w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-800 transition-all duration-1000 transform ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Responsive Aspect Ratio Container */}
      <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          src="/thesayhi.mp4"
          loop
          playsInline
          muted={isMuted}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleUserInteraction}
        />

        {/* Action Controls */}
        <div className="absolute top-3 right-3 flex items-center space-x-2 z-10">
          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-md"
            aria-label="Mute Toggle"
          >
            {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-md"
            aria-label="Close Widget"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* Play Overlay if paused */}
        {!isPlaying && (
          <div 
            onClick={handleUserInteraction}
            className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg">
              <FaPlay size={18} className="ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}