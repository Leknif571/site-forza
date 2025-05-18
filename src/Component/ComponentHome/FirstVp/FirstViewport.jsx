import React from 'react'
import './firstviewport.css'
import { useEffect, useRef } from 'react';




const FirstViewport = () => {
  const videoRef = useRef(null);

  return (
    // <div className='bg-viewport-img'>
    <div className="">
         <video muted loop playsInline autoPlay style={{ width: '100%', height:'90vh', objectFit: 'cover' }} src="/video/video1.mp4"></video>
    </div>

  )
}

export default FirstViewport