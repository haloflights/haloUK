const LocationTopBar = () => {
  return (
    <section
      data-aos="fade"
      className="d-flex items-center py-15 border-top-light"
    >
      <div className="container">
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
              {/* <div className="col-auto">
                <div>Europe</div>
              </div> */}
              {/* <div className="col-auto">
                <div>&gt;</div>
              </div> */}
              <div className="col-auto">
                <div>Home</div>
              </div>
              <div className="col-auto">
                <div>&gt;</div>
              </div>
              <div className="col-auto">
                <div className="text-dark-1">Blogs</div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <a href="https://haloholidays.co.uk" className="text-14 text-light-1">
              Halo Holidays UK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationTopBar;
