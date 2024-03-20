
'use client'

import TagManager from 'react-gtm-module';
import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";
import ReactGA from 'react-ga';
// import {initGA , logPageView} from "@/data/analytics";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Clicked Button',
      label: 'My Button',
    });
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    TagManager.initialize({gtmId: 'GTM-KNP4MCL5' });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`} >
        <div className="header__container px-40 sm:px-30 ">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center" >
                <Link href="/" className="header-logo mr-50">
                  <img src="/img/general/Halo Holidaysuk.svg" alt="logo icon" width="250" height="400"/>
                  
                </Link>
                {/* End logo */}

                
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1"/>
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="row x-gap-20 items-center xxl:d-none">
                  
                  {/* End Megamenu for Currencty */}

                  {/* Start vertical devider*/}
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                  {/* End vertical devider*/}

                  {/* End Megamenu for Language */}
                </div>

                {/* End language and currency selector */}
                {/* Start btn-group */}
              <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">

                  
                  <Link
                    href="tel:1302522656"
                    className="button call_us_now px-30 fw-500 text-15 -blue-1 bg-blue-1 h-30 text-white"
                    onClick={handleButtonClick}
                  >
                    Call Us Now
                  </Link>
                </div> 


            {/* <div className="button-item">
              <Link href="tel:1302522656">
              <button className="mainSearch__submit button text-center mr-20 -dark-4 py-25 px-12 h-40 col-12 rounded-4 bg-blue-1 text-white">
                <i className="icon-mobile text-20 mr-10 " />
                Call Us Now
              </button>
              </Link>
            </div> */}

                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  {/* <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div> */}
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header1;
