"use client";
import Link from 'next/link';
import React from 'react';
import dynamic from "next/dynamic";
const TrustBox = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null);
  React.useEffect(() => {
// If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
// If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
// When it is, it will automatically load the TrustBox.
if (window.Trustpilot) {
  window.Trustpilot.loadFromElement(ref.current, true);
}
  }, []);
  return (
    <>
<div
  ref={ref} // We need a reference to this element to load the TrustBox in the effect.
 className="trustpilot-widget" 
//  class="trustpilot-widget" 
 data-locale="en-US" 
 data-template-id="53aa8912dec7e10d38f59f36"
 data-businessunit-id="5b3cdead266600000141929b"
 data-style-height="140px" 
 data-style-width="100%" 
 data-theme="light" 
 data-stars="2,3,4,5" 
 data-review-languages="en" 
 data-font-family="Open Sans"
 // [ long list of data attributes...]
>
  <Link href="https://www.trustpilot.com/review/haloflights.co.uk" target="_blank" rel="noopener"> Trustpilot </Link>
</div>

</>
  );
};

export default dynamic(() => Promise.resolve(TrustBox), { ssr: false });
