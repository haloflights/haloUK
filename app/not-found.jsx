import dynamic from "next/dynamic";
import Header3 from "@/components/header/header-3";
import DefaultFooter from "@/components/footer/default";
import NotFound from "@/components/common/NotFound";

export const metadata = {
  title: "You are Lost Here in 404 | Halo Holidays",
  description: "Oops, looks like this page took a wrong turn. Let's help you find your way back to Halo Holidays adventures.",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
