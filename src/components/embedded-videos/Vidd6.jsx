import React, { useState, useRef } from 'react';
import './Vidd.css';

const Vidd6 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  const videoUrl = '/videos/Embedded/vidd6.mp4'; // Replace this with your video URL

  return (
    <div
      className='emb-video'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Customize the container dimensions as needed
    >
      <video
        ref={videoRef}
        autoPlay={false} // Set to false so the video doesn't autoplay initially
        controls={false} // Hide controls
        muted // Mute the video to avoid sudden audio playback
      >
        <source src={videoUrl} type="video/mp4" />
        {/* You can add additional source elements for different video formats */}
      </video>
    </div>
  );
};

export default Vidd6;
