import dynamic from "next/dynamic";
import Blog4 from "@/components/blog/Blog4";
import DefaultFooter from "@/components/footer/default";
import Header3 from "@/components/header/header-3";
import Beachhero from "@/components/hero/beach-hero/";
import Travellers from "@/components/holidays/beach_holidays/Travellers";
import WhyChoose from "@/components/common/WhyChoose";
import WhyChooseMobile from "@/components/common/WhyChooseMobile";
import TrustBox from "@/components/trustpilot/page";
import Link from "next/link";
import Hotels from "@/components/hotels/common/B_Hotels";
import Hotels2 from "@/components/hotels/common/F_Hotels";

export const metadata = {
  title: "Your Perfect Beach Holiday Awaits | Halo Holidays",
  description: "Discover your dream beach escape! Find stunning destinations, pristine beaches, and incredible deals with Halo Holidays.",
};

const beach_holidays = () => {
  return (
    <>
      {/* End Page Title */}

      <Header3 />
      {/* End Header 2 */}

      <Beachhero />
      {/* End Hero 2 */}

      <section className="layout-pt-md layout-pb-md d-none d-sm-block">
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
                Top Destinations for All-Inclusive Beach Bliss
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Sun-kissed shores, zero worries. Find your perfect beach bliss, all-inclusive
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
      {/* <FilterHotels3 /> */}

      {/* End Best Seller Hotels Sections */}

      {/* <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            {/* <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div> */}
            {/* End .col */}
          {/* </div> */}
          {/* End .row */}

          {/* <div className="row justify-center text-center pt-60">
            <div className="col-auto">
              <div className="text-15 lh-1 text-white">
                Trusted by the world’s best
              </div>
            </div>
          </div> */}
          {/* End .row */}

          {/* <div className="px-40 md:px-0">
            <div className="row y-gap-30 justify-between items-center pt-60 lg:pt-40">
              <Brand2 />
            </div>
          </div>
        </div> 
      </section> */}
      {/* End testimonial and brand sections Section */}


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
            <TrustBox/>
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
                <h2 className="sectionTitle__title">Top All-Inclusive Beach Resorts for Every Traveler</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                From solo escapes to family fun, discover your perfect all-inclusive beach haven
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
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Best Family Beach Holidays</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Splash into memories that last a lifetime. Unforgettable family beach adventures start here
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
                href="/family_holidays"
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

export default dynamic(() => Promise.resolve(beach_holidays), { ssr: false });
