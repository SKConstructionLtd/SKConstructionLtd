"use client";

import { ReactNode } from "react";

interface GalleryAnimationsProps {
  children: ReactNode;
}

export default function GalleryAnimations({ children }: GalleryAnimationsProps) {
  return (
    <div className="overflow-hidden">
      {/* Add animation wrappers here if needed */}
      {children}
    </div>
  );
}
