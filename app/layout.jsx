"use client";

import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Helmet } from 'react-helmet';
// import {initGA , logPageView} from "@/data/analytics";
import FacebookPixel from "@/components/facebookPixel/fb_pixel";
// import initializeFacebookPixel from "@/data/analytics";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useEffect(() => {
    // initGA(); // Initialize Google Analytics
    // logPageView(); // Log the initial page view

  }, []);

  return (
    <html lang="en">
      <head>
        <Helmet>

          <script id="CookieConsent" src="https://policy.app.cookieinformation.com/uc.js"
            data-culture="EN" data-gcm-version="2.0" type="text/javascript"></script>

        </Helmet>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KQNWY5N65B"></script>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNP4MCL5"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <script type="text/javascript"
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" ></script>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./favicon.ico" />

        {/* <noscript><img height="1" width="1" style={{display:'none'}}
src="https://www.facebook.com/tr?id=915458103441656&ev=PageView&noscript=1"
/></noscript> */}

      </head>
      <body>

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGZVP2LM"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <main>
          {/* <initializeFacebookPixel/> */}

          <FacebookPixel />
          <Provider store={store}>
            {children}
            <SrollTop />
          </Provider>
        </main>
      </body>
    </html>
  );
}
