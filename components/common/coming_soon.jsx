import Link from "next/link";

const ComingSoon = () => {
  const data = {
    imageSrc: "/img/general/coming_soon.webp",
    title: "Shh... something big is brewing.",
    description:
      "Stay tuned for the unveiling!",
    buttonLabel: "Go back to homepage",
    buttonUrl: "/",
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
                COMING<span className="text-blue-1"> SOON</span>
              </div>
              <h2 className="text-20 fw-600">{data.title}</h2>
              <div className="pr-30 mt-5">{data.description}</div>
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

export default ComingSoon;