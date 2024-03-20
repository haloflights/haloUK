import dynamic from "next/dynamic";
import Header3 from "@/components/header/header-3";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/common/WhyChoose";
import WhyChooseMobile from "@/components/common/WhyChooseMobile";
import Block1 from "@/components/about/Block1";
import Image from "next/image";
import Counter from "@/components/counter/Counter";
import TrustBox from "@/components/trustpilot/trustbox";

export const metadata = {
  title: "Who We Are | Halo Holidays",
  description: "Get to know Halo Holidays, your UK-based holiday specialists. Learn about our values, our team, and our commitment to exceptional travel experiences.",
};

const About = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <section className="section-bg layout-pt-lg layout-pb-lg mt--30">
        <div className="section-bg__item col-12">
          <Image
            width={1920}
            height={400}
            src="/img/general/about_us.webp"
            alt="image"
            priority
          />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1
                className="text-30 lg:text-40 md:text-25 text-white"
                data-aos="fade-up"
              >
                A Splash of Adventure, a Burst of Joy
              </h1>
              <p className="text-25 lg:text-40 md:text-20 text-white" data-aos="fade-up">Welcome to Our World of Travel</p>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}

      <section className="text-center mt--10 mb--50 mr-20">
      <div className="col-12">
      <Image
          width={300}
          height={200}
          src="/img/general/about.webp"
          alt="image"
          className="rounded-4 mt--50 mb--20"
        />
        </div>

      </section>

      <section className="">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 />
          </div>
        </div>
      </section>
      {/* End about block section */}

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

      <section className="pt-60">
        <div className="container">
          <div className="border-bottom-light pb-40">
            <div className="row y-gap-30 justify-center text-center">
              <Counter />
            </div>
          </div>
        </div>
      </section>
      {/* End counter Section */}

      <section className="section-bg layout-pt-lg layout-pb-lg mt-50">
        <div className="section-bg__item -mx-20 bg-light-2 rounded-4" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md mt--50 mb--30">
                <h2 className="sectionTitle__title">
                  Your Experience Is What Inspires Us!
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Customer testimonials
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="overflow-hidden pt-80 js-section-slider">
            <div className="item_gap-x30">
              <TrustBox />
            </div>
          </div>
          {/* End .overflow-hidden */}
        </div>
        {/* End .container */}
      </section>
      {/* End testimonial section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
