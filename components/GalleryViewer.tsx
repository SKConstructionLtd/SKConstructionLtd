'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  name: string;
  folder: string;
  description: string;
  imageCount: number;
  firstImage: string;
}

interface GalleryViewerProps {
  categories: Category[];
}

export default function GalleryViewer({ categories }: GalleryViewerProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<{ category: Category, index: number } | null>(null);

  const handleImageClick = (category: Category, index: number = 0): void => {
    setSelectedImageIndex({ category, index });
  };

  const navigateImage = (direction: 'next' | 'prev'): void => {
    if (!selectedImageIndex) return;
    const { category, index } = selectedImageIndex;
    const newIndex = direction === 'next' 
      ? (index + 1) % category.imageCount
      : (index - 1 + category.imageCount) % category.imageCount;
    setSelectedImageIndex({ category, index: newIndex });
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImageIndex) return;
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <div
            key={category.folder}
            className="gallery-item rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            style={{
              opacity: 0,
              animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s forwards`
            }}
            onClick={() => handleImageClick(category, 0)}
          >
            <div className="relative aspect-square overflow-hidden bg-slate-200 rounded-xl shadow-lg">
              <img
                src={`/images/${category.folder}/${category.firstImage}`}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = '/images/logo/logo-1.jpg';
                  target.style.objectFit = 'contain';
                  target.style.padding = '20px';
                }}
              />
              {/* Title in center of image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl md:text-2xl text-center px-4 py-3 bg-black/60 backdrop-blur-sm rounded-lg shadow-lg">
                  {category.name}
                </h3>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <p className="text-emerald-400 text-sm font-semibold">
                    {category.imageCount} {category.imageCount === 1 ? 'image' : 'images'} • Click to view →
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Size Image Viewer */}
      {selectedImageIndex && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/98"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-black bg-white hover:bg-emerald-400 hover:text-white transition-colors z-10 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
          >
            <X size={32} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <ChevronLeft size={40} />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <ChevronRight size={40} />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/images/${selectedImageIndex.category.folder}/${selectedImageIndex.category.folder}-${selectedImageIndex.index + 1}.jpg`}
              alt={`${selectedImageIndex.category.name} ${selectedImageIndex.index + 1}`}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = '/images/logo/logo-1.jpg';
                target.style.objectFit = 'contain';
              }}
            />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="inline-flex flex-col gap-2 bg-black/70 px-6 py-3 rounded-full">
                <p className="text-white font-semibold text-lg">
                  {selectedImageIndex.category.name}
                </p>
                <p className="text-emerald-400 text-sm">
                  Image {selectedImageIndex.index + 1} of {selectedImageIndex.category.imageCount}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
            <div className="flex gap-2 overflow-x-auto max-w-full py-2 px-4 bg-black/50 rounded-lg backdrop-blur-sm">
              {Array.from({ length: selectedImageIndex.category.imageCount }).map((_, idx) => (
                <button
                  key={idx}
                  className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${
                    idx === selectedImageIndex.index
                      ? 'border-emerald-400 scale-110'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex({ ...selectedImageIndex, index: idx });
                  }}
                >
                  <img
                    src={`/images/${selectedImageIndex.category.folder}/${selectedImageIndex.category.folder}-${idx + 1}.jpg`}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}