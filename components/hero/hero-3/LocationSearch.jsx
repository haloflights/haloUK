'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const LocationSearch = ({ onSelect }) => {
  const [searchValue, setSearchValue] = useState('');
  const [hotelsData, setHotelsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseURL = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination';

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(baseURL, {
        params: { query: searchValue },
        headers: {
          'X-RapidAPI-Key': 'fdabbe2885msh1b819cc1cf42f1bp125d79jsn2caf4b639d91',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        },
      });
      setHotelsData(response.data.data || []);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchValue) {
      fetchData();
    } else {
      setHotelsData([]);
    }
  }, [searchValue]);

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    onSelect(item); // Pass the selected item to the parent or another component
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div data-bs-toggle="dropdown" data-bs-auto-close="true" data-bs-offset="0,22">
          <h5 className="text-15 fw-500 ls-2 lh-16">Location</h5>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Where are you going?"
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <ul className="y-gap-5 js-results">
              {hotelsData.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1`}
                  key={item.dest_id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.name}
                      </div>
                      <div className="text-14 lh-12 text-light-1 mt-5">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSearch;
