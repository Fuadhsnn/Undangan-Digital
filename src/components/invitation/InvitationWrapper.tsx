"use client";

import React, { useState, useEffect } from "react";
import { Cover } from "./Cover";
import { AudioPlayer } from "./AudioPlayer";

interface InvitationWrapperProps {
  children: React.ReactNode;
}

export function InvitationWrapper({ children }: InvitationWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [autoPlayTrigger, setAutoPlayTrigger] = useState(false);

  // Prevent background scrolling while cover is active
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setAutoPlayTrigger(true);

    // Smooth scroll to top of content
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Cover isOpen={isOpen} onOpen={handleOpenInvitation} />
      <AudioPlayer autoPlayTrigger={autoPlayTrigger} />
      <main
        id="main-invitation-content"
        className={`transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {children}
      </main>
    </>
  );
}
