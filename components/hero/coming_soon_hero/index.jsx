const index = () => {
  return (
    <section className="masthead -type-3 z-5 " >
      <div className="masthead__bg">
        <img alt="image" src="
/img/backgrounds/cover_uk.jpg" className="js-lazy"  />
      </div>
      <div className="container mt-90">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-50 lg:text-40 md:text-30 text-white" >
               Something Exiciting Coming Soon
              </h1>
              <br />

              <a href="https://wa.me/+447712279245">
              <button className="call_us_now px-20 fw-500 text-16 green-2 bg-green-2 h-30 text-white">Contact on WhatsApp</button></a>
              
            </div>
            {/* End hero title */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
