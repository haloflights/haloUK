'use client'
import React from 'react';
import { useEffect} from 'react';
import dynamic from "next/dynamic";

const TrustBox = () => {
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
<div className="trustpilot-widget" data-locale="en-US" data-template-id="5406e65db0d04a09e042d5fc" 
    data-businessunit-id="5b3cdead266600000141929b" data-style-height="28px" 
    data-style-width="100%" data-theme="light" data-font-family="Poppins"
  ref={ref} // We need a reference to this element to load the TrustBox in the effect.
//  className="trustpilot-widget" // Renamed this to className.
 // [ long list of data attributes...]
>
    <h3 className='text-align:center'> What Customers Saying about us</h3>
  <a href="https://www.trustpilot.com/review/haloflights.co.uk" target="_blank" rel="noopener"> Trustpilot </a>
  <br/>
<br/>
<br/>
</div>
</>
  );
};
// export default TrustBox;
export default dynamic(() => Promise.resolve(TrustBox), { ssr: false });