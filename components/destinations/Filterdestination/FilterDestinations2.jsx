"use client";

import React, { useState } from "react";
import FilterDestinations from "./FilterDestinations";
import FilterDestinationstabs from "./filter-tabs/FilterDestinaionsTabs";

export default function FilterDestinations2() {
  const [filterOption, setFilterOption] = useState("asia");
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Destinations</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
                Checkout your favourite destination you wanna travel
              </p>
            </div>
          </div>
          {/* End .col-auto */}

          <div className="col-auto tabs -pills-2 ">
            <FilterDestinationstabs
              filterOption={filterOption}
              setFilterOption={setFilterOption}
            />
          </div>
          {/* End .col-auto */}
        </div>
        {/* End .row */}

        <div className="relative overflow-hidden pt-40 sm:pt-20">
          <div className="row y-gap-30">
            <FilterDestinations filterOption={filterOption} />
          </div>
        </div>
        {/* End relative */}
      </div>
    </section>
  );
}
