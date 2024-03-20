
'use client'
import React from 'react';
import { useEffect} from 'react';

const Grid = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null);
  useEffect(() => {
    try {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(ref.current, true);
      }
    } catch (error) {
      console.error('Error loading Trustpilot script:');
    }
  }, []);
  return (
    <>
 {/* <!-- TrustBox widget - Grid --> */}
<div className="trustpilot-widget" data-locale="en-US" data-template-id="539adbd6dec7e10e686debee" data-businessunit-id="61a4b09e7f15887ca7dbf014" data-style-height="500px" data-style-width="100%" data-theme="light" data-stars="2,3,4,5" data-review-languages="en">
  <a href="https://www.trustpilot.com/review/haloflights.us" target="_blank" rel="noopener">Trustpilot</a>
</div>
{/*  <!-- End TrustBox widget --> */}
</>
  );
};
export default Grid;