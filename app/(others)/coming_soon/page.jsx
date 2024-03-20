import dynamic from "next/dynamic";
import Header3 from "@/components/header/header-3";
import DefaultFooter from "@/components/footer/default";
import ComingSoon from "@/components/common/coming_soon";
export const metadata = {
  title: "Coming Soon | Halo Holidays",
  description: "Something exciting is on the horizon! Stay tuned for new destinations, offers, and travel inspiration from Halo Holidays.",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <ComingSoon />
      {/* End 404 section */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
