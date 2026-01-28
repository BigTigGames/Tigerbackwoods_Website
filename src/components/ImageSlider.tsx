import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  video?: {
    src: string | string[];
    poster?: string;
    type?: string;
  };
  autoPlayInterval?: number;
  showNavigation?: boolean;
  showDots?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  video,
  autoPlayInterval = 5000,
  showNavigation = true,
  showDots = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval > 0 && (!video || images.length > 1)) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, images.length, video]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // If video is provided and no images, show video only
  if (video && (!images || images.length === 0)) {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        <video
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          {Array.isArray(video.src) ? (
            video.src.map((src, index) => (
              <source key={index} src={src} type={video.type} />
            ))
          ) : (
            <source src={video.src} type={video.type} />
          )}
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // If no video and no images, return null
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background (if provided) */}
      {video && (
        <video
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          onError={(e) => console.error('Video error:', e)}
        >
          {Array.isArray(video.src) ? (
            video.src.map((src, index) => (
              <source key={index} src={src} type={video.type} />
            ))
          ) : (
            <source src={video.src} type={video.type} />
          )}
          Your browser does not support the video tag.
        </video>
      )}

      {/* Image Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: 'center' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {showNavigation && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ImageSlider; 