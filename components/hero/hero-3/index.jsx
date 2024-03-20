import MainFilterSearchBox from "./MainFilterSearchBox";

const index = () => {
  return (
    <section className="masthead -type-3 z-5">
      <div className="masthead__bg ">
        <img alt="image" src="/img/general/homepg.webp" className="js-lazy" width="1349" height="928"/>
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <p className="text-40 lg:text-40 md:text-30 text-white" data-aos="fade-up">Explore the World With Our</p>
              <h1
                className="text-50 lg:text-40 md:text-30 text-white mb-80"
                data-aos="fade-up"
              >
                All Inclusive Holiday Deals
              </h1>
            </div>
            {/* End hero title */}

            {/* <div
              className="masthead__tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MainFilterSearchBox />
            </div> */}
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
