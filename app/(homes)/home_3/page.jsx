import dynamic from "next/dynamic";
import Header3 from "@/components/header/header-3";
import Hero3 from "@/components/hero/hero-3";
import Hotels from "@/components/hotels/common/H_Hotels";
import Link from "next/link";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/home/home-3/WhyChoose";
import WhyChooseMobile from "@/components/home/home-3/WhyChooseMobile";
import TourCategories from "@/components/home/home-3/TourCategories";
import Blog4 from "@/components/blog/Blog4"; ``
import Travellers from "@/components/home/home-3/Travellers";
import TrustBox from "@/components/trustpilot/trustbox";
import Hotels2 from "@/components/hotels/common/AI_Hotels";
import Hotels3 from "@/components/hotels/common/B_Hotels";

export const metadata = {
  title: "Halo Holidays | All Inclusive Holiday Experts in USA",
  description: "Planning your dream holiday? Halo Holidays crafts all-inclusive escapes to worldwide destinations from your doorstep in the USA.",
};

const home_3 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header3 />
      {/* End Header 3 */}

      <Hero3 />
      {/* End Hero 3 */}

      <section className="layout-pt-md layout-pb-md d-none d-sm-block">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title pt-30">Why Halo Holidays for All Inclusive Holidays?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Your holiday should be as unique as you are. With unbeatable prices, flexible bookings, and round-the-clock support, we ensure your holiday experience is seamless and tailored to your preferences.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50 mb-30">
            <WhyChoose />
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose Section */}

      <section className="layout-pt-md layout-pb-md d-md-none">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title pt-30">Why Choose Halo Holidays for Your All Inclusive Holidays?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Your holiday should be as unique as you are. With unbeatable prices, flexible bookings, and round-the-clock support, we ensure your holiday experience is seamless and tailored to your preferences.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50 mb-30">
            <WhyChooseMobile />
          </div>

          <div className="col-auto ">
            <div className="d-flex x-gap-20  items-center mt-10 y-gap-30 justify-content-center">
              <div className="col-auto">
                <button className="d-flex items-center text-26  arrow-right-hover js-tour-type-prev"
                  aria-label="arrow-left">
                  <i className="icon icon-arrow-left " />
                </button>
              </div>
              {/* End prev */}

              <div className="col-auto">
                <div className="pagination -dots text-border js-tour-type-pag" />
              </div>
              {/* End pagination */}

              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-tour-type-next "
                  aria-label="arrow-right">
                  <i className="icon icon-arrow-right" />
                </button>
              </div>
              {/* End next */}
            </div>
          </div>
          {/* End row */}

        </div>
        {/* End .container */}
      </section>
      {/* End Why choose mobile Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Choose your All Inclusive Holiday Type</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Discover your ideal getaway with Halo Holidays. Choose from serene beaches, romantic escapes, or family adventures, all with all-inclusive ease. Our handpicked holidays—from last-minute deals to luxury cruises—are designed for memorable experiences and great value. Dive into our selection and find your perfect holiday today.
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
          <div className="relative overflow-hidden pt-40 sm:pt-20">
            {/* <TopDestinations/> */}
            <TourCategories />
          </div>
          <div className="col-auto ">
            <div className="d-flex x-gap-20  items-center mt-10 y-gap-30 justify-content-center">
              <div className="col-auto">
                <button className="d-flex items-center text-26  arrow-right-hover js-tour-type-prev"
                  aria-label="arrow-left">
                  <i className="icon icon-arrow-left " />
                </button>
              </div>
              {/* End prev */}

              <div className="col-auto">
                <div className="pagination -dots text-border js-tour-type-pag" />
              </div>
              {/* End pagination */}

              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-tour-type-next "
                  aria-label="arrow-right">
                  <i className="icon icon-arrow-right" />
                </button>
              </div>
              {/* End next */}
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Explore Top All-Inclusive Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Confused where you should go? Explore our top destinations for all inclusive holidays
                </p>
              </div>
            </div>
            {/* End .col */}


          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-20 sm:pt-20 item_gap-x30">
            <Travellers />

          </div>
          {/* End relative */}

          <div className="text-center pt-40">
            <Link
              href="/destinations"
              className="text-20 text-decoration-underline blue-1 text-blue-1 h-30"
              aria-label="more"
            >
              Explore more destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Explore Our Curated Collection of Romantic Escapes</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Finding a Honeymoon Holiday Hotel can be stressfull sometimes, but not with us. We take care of the stress bringing you nothing but the best.
                </p>
              </div>
            </div>
            {/* End .col */}


          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels />
          </div>
          {/* End relative */}

          <div className="text-center pt-40">
            <Link
              href="/honeymoon_holidays"
              className="text-20 text-decoration-underline blue-1 text-blue-1 h-30"
              aria-label="more"
            >
              Show me more
            </Link>
          </div>

        </div>
      </section>


      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Affordable All-Inclusive Resorts</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Find your perfect getaway at our all-inclusive resorts for every budget
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/all_inclusive_holidays"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                aria-label="more"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels2 />
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* End  Hotel sections */}


      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Beach Holidays</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Sun-Kissed Shores and Salty Breezes: Escape to Paradise with Our Beach Holidays
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/beach_holidays"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                aria-label="more">
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels3 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Travel Tips & Stories to Fuel Your Wanderlust
                </h2>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog4 />
          </div>
          {/* End .row */}
          <div className="col-auto ">
            <div className="d-flex x-gap-20  items-center mt-10 y-gap-30 justify-content-center">
              <div className="col-auto">
                <button className="d-flex items-center text-26  arrow-right-hover js-blog-prev"
                  aria-label="arrow-left">
                  <i className="icon icon-arrow-left " />
                </button>
              </div>
              {/* End prev */}

              <div className="col-auto">
                <div className="pagination -dots text-border js-blog-pag" />
              </div>
              {/* End pagination */}

              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-blog-next "
                  aria-label="arrow-right">
                  <i className="icon icon-arrow-right" />
                </button>
              </div>
              {/* End next */}
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-content-center items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Experience The Love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0 text-center">
                  This is Why We do What We do
                </p>
              </div>
            </div>
            {/* End .col */}
            <TrustBox />
          </div>
          {/* End .row */}
        </div>

        {/* End .container */}
      </section>
      {/* Trustpilot */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_3), { ssr: false });