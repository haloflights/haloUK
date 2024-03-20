import dynamic from "next/dynamic";
import WhyChoose from "@/components/common/WhyChoose";
import WhyChooseMobile from "@/components/common/WhyChooseMobile";
import Blog4 from "@/components/blog/Blog4";
import DefaultFooter from "@/components/footer/default";
import Header3 from "@/components/header/header-3";
import Travellers from "@/components/holidays/all_inclusive_holidays/Travellers";
import AllInclusiveHero from "@/components/hero/all-inclusive-hero";
import Link from "next/link";
import Hotels from "@/components/hotels/common/AI_Hotels";
import Hotels2 from "@/components/hotels/common/B_Hotels";
import TrustBox from "@/components/trustpilot/page";

export const metadata = {
  title: "Discover Unbeatable All Inclusive Holiday Deals | Halo Holidays",
  description: "Relax and let us take care of everything. Browse our curated selection of all-inclusive holidays and start planning your worry-free getaway.",
};

const all_inclusive_holidays = () => {
  return (
    <>
      {/* End Page Title */}

      <Header3 />
      {/* End Header 3 */}

      {/* <Hero5 /> */}
      <AllInclusiveHero />

      {/* End Hero 5 */}

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
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Explore Top All-Inclusive Destinations
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Discover our hand-picked destinations for unforgettable memories
                </p>
              </div>
            </div>
            {/* End .col */}

            {/* <div className="col-auto">
              <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div> */}
            {/* End prev */}

            {/* <div className="col-auto">
                  <div className="pagination -dots text-border js-places-pag" />
                </div> */}
            {/* End pagination */}

            {/* <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div> */}
            {/* End Next */}
            {/* </div>
            </div> */}
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <Travellers />
          {/* End travellers component */}
        </div>
        {/* End .container */}
      </section>
      {/* End Connect with Travellers Sections */}

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

          {/* <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cruise />
          </div> */}
          {/* End .row */}
        </div>

        {/* End .container */}
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Ultimate All-Inclusive Hotel Deals</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  From Luxe Getaways to Family Fun: Find Your Ideal All-Inclusive Match
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Features All Inclusive Deals Sections */}

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
      {/* End blog Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Beach Holidays</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Sun-kissed days, ocean breeze, sandy toes. Beach bliss awaits.
                </p>
              </div>
            </div>
            {/* End .col */}


          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels2 />
          </div>
          {/* End relative */}

          <div className="text-center pt-40">
            <Link
              href="/beach_holidays"
              className="text-20 text-decoration-underline blue-1 text-blue-1 h-30"
              aria-label="more"
            >
              Show me more
            </Link>
          </div>

        </div>
      </section>




      {/* <Subscribe /> */}
      {/* End Subscribe Section */}

      {/* <AppBanner /> */}
      {/* End AppBanner Section */}

      {/* <CallToActions /> */}
      {/* End CallToActions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(all_inclusive_holidays), { ssr: false });
