import React from 'react'
import './firstviewport.css'
import { useEffect, useRef } from 'react';




const FirstViewport = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.35; // accélère 2x
    }
  }, []);
  return (
    // <div className='bg-viewport-img'>
    <div className="">
         <video ref={videoRef} muted loop playsInline autoPlay style={{ width: '100%', height:'82vh', objectFit: 'cover' }} src="/video/video1.mp4"></video>
    </div>

  )
}

export default FirstViewport