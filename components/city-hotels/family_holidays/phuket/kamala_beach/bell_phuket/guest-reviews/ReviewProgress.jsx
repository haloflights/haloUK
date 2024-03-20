import holidays from "@/data/cityHotels";

const ReviewProgress = ({ holiday }) => {
  const reviewProgressContent = [
    { id: 1, reviewReason: "Staff", ratings: "9.1", progressPercent: "91%" },
    { id: 2, reviewReason: "Facilities", ratings: "8.7", progressPercent: "87%" },
    { id: 3, reviewReason: "Cleanliness", ratings: "8.8", progressPercent: "88%" },
    { id: 4, reviewReason: "Comfort", ratings: "8.8", progressPercent: "88%" },
    { id: 5, reviewReason: "Value for money", ratings: "8.3", progressPercent: "83%" },
    { id: 6, reviewReason: "Location", ratings: "7.6", progressPercent: "76%" },
    { id: 7, reviewReason: "Free WiFi", ratings: "7.5", progressPercent: "75%" },
  ];

  return (
    <>
      <div className="row y-gap-30 items-center pt-20">
        <div className="col-lg-3">
          <div className="flex-center rounded-4 min-h-250 bg-blue-1-05">
            <div className="text-center">
              <div className="text-60 md:text-50 fw-600 text-blue-1">{holiday.ratings}</div>
              <div className="fw-500 lh-1">{holiday.review}</div>
            </div>
          </div>
        </div>
        {/* End .col-lg-3 */}

        <div className="col-lg-9">
          <div className="row y-gap-30">
            {reviewProgressContent.map((item) => (
              <div className="col-md-4 col-sm-6" key={item.id}>
                <div className="d-flex items-center justify-between">
                  <div className="text-15 fw-500">{item.reviewReason}</div>
                  <div className="text-15 text-light-1">{item.ratings}</div>
                </div>
                <div className="progressBar mt-10">
                  <div className="progressBar__bg bg-blue-2" />
                  <div
                    className="progressBar__bar bg-blue-1"
                    style={{ width: item.progressPercent }}
                  />
                </div>
              </div>
            ))}

            {/* End .col-md-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col-gll-9 */}
      </div>
      {/* End .row */}
    </>
  );
};

export default ReviewProgress;
