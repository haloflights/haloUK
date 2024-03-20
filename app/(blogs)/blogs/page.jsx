import React from "react";
import Header3 from "@/components/header/header-3";
import LocationTopBar from "@/components/common/LocationTopBar";
import DefaultFooter from "@/components/footer/default";
import Blog1 from "@/components/blog/Blog1";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Travel Tips, Trends & Tales from Halo Holidays",
  description: "Explore our blog for the latest travel trends, destination guides, and insider advice for your next getaway.",
};

const BlogListV1 = () => {
  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h1 className="sectionTitle__title">Your Essential Travel Guide & Inspiration</h1>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Unleash your wanderlust! Explore, discover, be inspired
                </p>
              </div>
            </div>
          </div>
          <Blog1 />
        </div>
      </section>

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(BlogListV1), { ssr: false });
