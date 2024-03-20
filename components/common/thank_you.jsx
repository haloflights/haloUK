import Link from "next/link";

const ThankYou = () => {
  const data = {
    imageSrc: "/img/general/thank_you.webp",
    title: "We are Here For You - Just sit back and relax",
    description:
      "While you wait, why not dive into some travel inspiration on our blog?",
    buttonLabel: "Get Inspired !",
    buttonUrl: "/blogs",
  };

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-lg-4">
            <img src={data.imageSrc} alt="image" />
          </div>
          <div className="col-lg-7">
            <div className="no-page">
              <div className="no-page__title text-80 mb-20">
                THANK<span className="text-blue-1"> YOU</span>
              </div>
              <h2 className="text-20 fw-600">We are <span className="text-blue-1">Here For You</span> - Just sit back and relax</h2>
              <div className="pr-30 mt-30 mb--30">{data.description}</div>
              <div className="d-inline-block mt-40 md:mt-20">
                <Link
                  href={data.buttonUrl}
                  className="button -md -dark-1 bg-blue-1 text-white"
                >
                  {data.buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;