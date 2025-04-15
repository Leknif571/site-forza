import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function ImageGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.map((img, index) => (
            <a
              href={img.original}
              className="gallery__item"
              target="_blank"
              rel="noreferrer"
              data-pswp-width={'800px'}
              data-pswp-height={'650px'}
              key={props.galleryID + '-' + index}
              >
              <img
                className={index ===0 ? "img-responsive inline-block w-1/3 m-1 first-img" : "img-responsive hidden w-1/3 m-1 all-img md:inline-block"}
                src={img.original}
              />
              
            </a>
    // ) 
       
         
      ))}
    </div>
  );
}
