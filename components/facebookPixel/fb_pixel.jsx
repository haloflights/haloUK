"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
// import * as pixel from "/lib/fpixel";


const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    pixel.pageview();
    console.log('loaded');
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/data/analytics.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={915458103441656}
      />
    </div>
  );
};

export default FacebookPixel;