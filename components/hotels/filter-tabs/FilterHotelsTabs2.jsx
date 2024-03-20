
'use client'

import { useState } from "react";

const FilterHotelsTabs2 = ({filterOption, setFilterOption}) => {


  const filterOptions = [
    { label: "All Inclusive", value: "new_york" },
    { label: "Couple", value: "london" },
    { label: "Cruise", value: "paris" },
    { label: "Last-Minute", value: "istanbul" },
    { label: "Family", value: "new_york" },
    { label: "Luxury", value: "london" },
    { label: "Honeymoon", value: "paris" },
    { label: "Beach", value: "istanbul" },
    // add more options as needed
  ];

  return (
    <div className="tabs__controls row x-gap-15 justify-center js-tabs-controls">
      {filterOptions.map((option) => (
        <div className="col-auto" key={option.value}>
          <button
            className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button mb-10 ${
              filterOption === option.value ? "is-tab-el-active" : ""
            }`}
            onClick={() => setFilterOption(option.value)}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterHotelsTabs2;
