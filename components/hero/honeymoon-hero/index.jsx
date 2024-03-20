import MainFilterSearchBox from "./MainFilterSearchBox";

const index = () => {
  return (
    <section className="masthead -type-3 z-5">
      <div className="masthead__bg mt-50">
        <img alt="image" src="/img/backgrounds/Honeymoon.svg" className="js-lazy" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-white mb-70"
                data-aos="fade-up"
              >
                Honeymoon Holidays
              </h1>
            
            {/* <p className="mt-20" data-aos="fade-up" data-aos-delay="500">
              Experience the various exciting tour and travel packages and Make
              hotel reservations, find
              <br className="lg:d-none" /> vacation packages, search cheap
              hotels and events
            </p> */}

            
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
