import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './portfolio.css';
import CallbackPopup from '../../mainUtils/CallbackPopup';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const loaderCss = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Portfolio() {
  const { category } = useParams();
  const [mediaType, setMediaType] = useState('image'); // Default to image
  const [mediaLinks, setMediaLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/portfolio/${category}/media`, {
          params: { mediaType: mediaType }
        });
        const mediaLinksArray = response.data.map((mediaData) => mediaData.link);
        setMediaLinks(mediaLinksArray);
      } catch (error) {
        console.error('Error fetching media links:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, mediaType]);

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div>
      <h2 className='text-center text-capitalize mt-4'>{category} Portfolio</h2>
    
      <div className="text-center media-type-switch mt-2">
        <label>
          <input type="radio" value="image" checked={mediaType === 'image'} onChange={() => setMediaType('image')} />
          Images
        </label>
        <label>
          <input type="radio" value="video" checked={mediaType === 'video'} onChange={() => setMediaType('video')} />
          Videos
        </label>
      </div>

      {loading ? (
        <div className="loader-container">
          <RingLoader color="#36D7B7" loading={true} size={100} />
          <p className="loader-text">Fodrix - We capture your memories forever</p>
        </div>
      ) : (
        <div className='newgallery'>
          {mediaLinks.map((link, index) => (
            mediaType === 'image' ? (
              <img
                key={index}
                src={link}
                alt={`Image ${index + 1}`}
                onClick={() => openLightbox(index)}
                onContextMenu={(e) => { e.preventDefault(); }} // Disable right-click context menu
                onDragStart={(e) => e.preventDefault()} // Prevent drag and drop
              />
            ) : (
              <ReactPlayer
                key={index}
                url={link}
                controls
                // width="300"
                // height="300"
              />
            )
          ))}
        </div>
      )}

      {lightboxOpen && (
        <Lightbox
          mainSrc={mediaLinks[lightboxIndex]}
          nextSrc={mediaLinks[(lightboxIndex + 1) % mediaLinks.length]}
          prevSrc={mediaLinks[(lightboxIndex + mediaLinks.length - 1) % mediaLinks.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + mediaLinks.length - 1) % mediaLinks.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % mediaLinks.length)}
          onImageLoadError={() => console.error('Error loading media')}
          reactModalStyle={{ overlay: { zIndex: 1100 } }}
        />
      )}

      <CallbackPopup popup={true} callBackForm={true} />
    </div>
  );
}
