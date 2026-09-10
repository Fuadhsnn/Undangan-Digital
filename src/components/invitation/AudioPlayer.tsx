"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { event } from "@/config/event";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export function AudioPlayer({ autoPlayTrigger = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && !hasInteracted && audioRef.current) {
      // Attempt gentle playback on user trigger
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Browser prevented autoplay without explicit interaction; keep paused
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger, hasInteracted]);

  const togglePlay = () => {
    setHasInteracted(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback issue:", err);
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={event.backgroundMusic}
        loop
        preload="none"
        aria-hidden="true"
      />

      <div
        className="fixed bottom-5 right-5 z-40 flex items-center space-x-1 bg-white/90 backdrop-blur-md border border-[#E2DCD0] shadow-[0_4px_20px_rgba(45,64,48,0.1)] rounded-full p-1.5 transition-all duration-300 hover:border-[#9C7A4A]"
        role="region"
        aria-label="Kontrol Musik Latar"
      >
        <button
          onClick={togglePlay}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium text-[#2D4030] hover:bg-[#FAF8F5] transition-colors focus-visible:ring-2 focus-visible:ring-[#9C7A4A] cursor-pointer"
          aria-label={isPlaying ? "Jeda musik latar" : "Putar musik latar"}
        >
          {isPlaying ? (
            <div className="flex items-center space-x-1" aria-hidden="true">
              <span className="w-1 h-3 bg-[#9C7A4A] rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
              <span className="w-1 h-4 bg-[#2D4030] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_200ms]" />
              <span className="w-1 h-2 bg-[#9C7A4A] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_400ms]" />
            </div>
          ) : (
            <Music className="w-3.5 h-3.5 text-[#58635B]" />
          )}
          <span className="hidden sm:inline text-xs text-[#2D4030]">
            {isPlaying ? "Musik Aktif" : "Musik"}
          </span>
        </button>

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full text-[#58635B] hover:text-[#2D4030] hover:bg-[#FAF8F5] transition-colors focus-visible:ring-1 focus-visible:ring-[#9C7A4A] cursor-pointer"
            aria-label={isMuted ? "Bunyikan musik" : "Bisukan musik"}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-[#9E2A2B]" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
        )}
      </div>
    </>
  );
}
