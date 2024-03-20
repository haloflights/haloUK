import dynamic from "next/dynamic";
import Header3 from "@/components/header/header-3";
import Hotels from "@/components/hotels/common/phuket/C_Phuket_Hotels";
import Hotels2 from "@/components/hotels/common/AI_Phuket_Hotels";
import Link from "next/link";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/common/WhyChoose";
import WhyChooseMobile from "@/components/common/WhyChooseMobile";
import Blog4 from "@/components/blog/Blog4";
import Travellers from "@/components/home/home-3/Travellers";
import TrustBox from "@/components/trustpilot/trustbox";
import MaldivesHero from "@/components/hero/all-inclusive-hero/phuket-hero";
import Maldives_cities from "@/components/holidays/couple_holidays/cities/phuket_cities";

export const metadata = {
  title: "Couple Holidays to Phuket | Halo Holidays",
  description: "Discover romantic Phuket! Explore secluded beaches, indulge in couple's spa treatments, and create memories with Halo Holidays.",
};

const maldives = () => {
  return (
    <>
      {/* End Page Title */}

      <Header3 />
      {/* End Header 3 */}

      <MaldivesHero />
      {/* End Hero 3 */}

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

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Holiday Types</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  We have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

      {/* <div className="row y-gap-30 pt-60 lg:pt-40">
            <Holidays />
          </div>
          </div> */}
      {/* </section> */}



      {/* <section className="layout-pt-md layout-pb-md">
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




      {/* End .col */}
      {/* </div> */}
      {/* End .row */}

      {/* <div className="relative overflow-hidden pt-40 sm:pt-20"> */}
      {/* <TopDestinations/> */}
      {/* <FilterHotels4 />
            
          </div>
          <div className="col-auto ">
              <div className="d-flex x-gap-20  items-center mt-10 y-gap-30 justify-content-center">
                <div className="col-auto">
                  <button className="d-flex items-center text-26  arrow-right-hover js-tour-type-prev"
                  aria-label="arrow-left">
                    <i className="icon icon-arrow-left " />
                  </button>
                </div> */}
      {/* End prev */}

      {/* <div className="col-auto">
                  <div className="pagination -dots text-border js-tour-type-pag" />
                </div> */}
      {/* End pagination */}

      {/* <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-tour-type-next "
                  aria-label="arrow-right">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div> */}
      {/* End next */}
      {/* </div>
            </div>
        </div>
        
      </section> */}


      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Explore Hot Deals</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}


      {/* Holiday   */}

      {/* <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
           
          </div>
          <div className="row y-gap-30 pt-40">
            <div className="col-xl-5">
              <DiscountsBanner /> */}
      {/* </div> */}
      {/* End col-xl-5 */}

      {/* <div className="col-xl-7"> */}
      {/* <Tours3 /> */}
      {/* </div> */}
      {/* End col-xl-7 */}
      {/* </div> */}


      {/* End .row */}
      {/* </div> */}
      {/* End .container */}
      {/* // </section> */}


      {/* End Top Destinations Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Ultimate All-Inclusive Getaways</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Where every wish is an included amenity
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-places-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}


          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-20 sm:pt-20 item_gap-x30">
            <Maldives_cities />

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
                <h2 className="sectionTitle__title">Couple Hotels in Phuket</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Where worries melt away, Experience the best all-inclusive Maldives resorts
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
        </div>
      </section>
      {/* End  Hotel sections */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div> */}
      {/* End .col */}

      {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
      {/* End .col */}
      {/* </div> */}
      {/* End .row */}

      {/* <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div> */}
      {/* End .row */}
      {/* </div> */}
      {/* End .container */}
      {/* </section> */}
      {/* End Tours Sections */}

      {/* 
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Trending Activity</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div> */}
      {/* </div> */}
      {/* End .col */}

      {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
      {/* End .col */}
      {/* </div> */}
      {/* End .row */}

      {/* <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity />
          </div> */}
      {/* End .row */}
      {/* </div> */}
      {/* End .container */}
      {/* </section> */}
      {/* Trending Activity Sections */}

      {/* <section className="layout-pt-md layout-pb-md"> */}
      {/* <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Featured Holiday Rentals
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div> */}
      {/* End .col */}

      {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                aria-label="more"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
      {/* End .col */}
      {/* </div> */}
      {/* End .row */}

      {/* <div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Rentals />
          </div> */}
      {/* End .row */}
      {/* </div> */}
      {/* End .container */}
      {/* </section> */}
      {/* Featured Rentals Sections */}



      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">All-Inclusive Hotels in Phuket</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Your Dream Awaits! All-inclusive resorts for every kind of escape
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/all_inclusive_holidays"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                aria-label="more">
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Routes</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div> */}
      {/* End .col */}

      {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
      {/* End .col */}
      {/* </div> */}
      {/* End .row */}

      {/* <div className="row y-gap-30 pt-40 sm:pt-20">
            <Flights />
          </div> */}
      {/* End .row */}
      {/* </div> */}
      {/* End .container */}
      {/* </section> */}
      {/* Popular Routes Sections */}

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

          {/* <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cruise />
          </div> */}
          {/* End .row */}
        </div>

        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}


      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default maldives;