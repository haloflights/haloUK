"use client";
import Link from 'next/link';
import React from 'react';
const Mini_button = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null);
  React.useEffect(() => {

if (window.Trustpilot) {
  window.Trustpilot.loadFromElement(ref.current, true);
}
  }, []);
  return (
    <>

{/* <!-- TrustBox widget - Mini --> */}
<div className="trustpilot-widget" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="61a4b09e7f15887ca7dbf014" data-style-height="150px" data-style-width="100%" data-theme="light">
  <a href="https://www.trustpilot.com/review/haloflights.us" target="_blank" rel="noopener">Trustpilot</a>
</div>
{/* <!-- End TrustBox widget --> */}

</>
  );
};
export default Mini_button;
