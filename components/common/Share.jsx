// ShareButton.js
'use client'
import React, { useState } from 'react';

const ShareButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: 'Check out this awesome content!',
          url: window.location.href,
        });

        // Update the state to reflect that the button has been clicked
        setClicked(true);
      } else {
        // Fallback for browsers that do not support the Web Share API
        console.warn('Web Share API is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="col-auto">
      <button
        aria-label="Share"
        className={`button px-15 py-10 -blue-1 ${clicked ? 'clicked' : ''}`}
        onClick={handleShareClick}
      >
        <i className="icon-share mr-10" />
        Share
      </button>
    </div>
  );
};

export default ShareButton;
