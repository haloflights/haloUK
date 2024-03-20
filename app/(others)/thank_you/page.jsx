import dynamic from "next/dynamic";
import Header3 from "@/components/header/header-3";
import DefaultFooter from "@/components/footer/default";
import ThankYou from "@/components/common/thank_you";
export const metadata = {
  title: "Thank You | Halo Holidays",
  description: "Thank you for your inquiry! A Halo Holidays travel expert will be in touch soon to help plan your dream trip.",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <ThankYou />
      {/* End 404 section */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
