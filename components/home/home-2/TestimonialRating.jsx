import Mini_button from "@/components/trustpilot/mini-button/mini_button";

const TestimonialRating = () => {
  return (
    <>
      <h2 className="text-30 text-black">
      Testimonials That Speak Volumes <br />About Our Services

        
         
      </h2>
      <p className="text-black mt-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius
        tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.
      </p>

      <div className="row y-gap-30 text-black pt-60 lg:pt-40">
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">13m+</div>
          <div className="lh-15">Happy People</div>
        </div>
        {/* End .col */}

        <div className="col-sm-5 col-6">
          <Mini_button/>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default TestimonialRating;
