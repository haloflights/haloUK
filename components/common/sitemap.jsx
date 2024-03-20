import React from 'react';

const Sitemap = () => {
  return (
    <ul className="sitemap">
      <li className="has-sub-links text-20">
        <a href="/">Home</a>
      </li>
      <li className="has-sub-links text-20">
        <a href="/about">Destinations</a>
      </li>
      <li className="has-sub-links text-20">
        <a>Holidays</a>
      </li>
      <li className='had-sub-links'>  
        <ul className='ml-10'>
          <li>
            <a href="/services/web-design">All Inclusive Holidays</a>
          </li>
          <li>
            <a href="/services/web-design">Beach Holidays</a>
          </li>
          <li>
            <a href="/services/web-design">Couple Holidays</a>
          </li>
          <li>
            <a href="/services/web-design">Family Holidays</a>
          </li>
          <li>
            <a href="/services/web-design">Honeymoon Holidays</a>
          </li>
          <li>
            <a href="/services/web-design">Last Minute Holidays</a>
          </li>
          <li>
            <a href="/services/web-design">Luxury Holidays</a>
          </li>
        </ul>
      </li>
      <li className="has-sub-links text-20">
        <a href="/contact">Blogs</a>
      </li>
      <li className="has-sub-links text-20">
        <a>More</a>
      </li>
      <li className='had-sub-links'>  
        <ul className='ml-10'>
          <li>
            <a href="/services/web-design">All Inclusive Holidays</a>
          </li>
          <li>
            <a href="/services/web-design">Beach Holidays</a>
          </li>
          </ul>
          </li>
    </ul>
  );
};

export default Sitemap;
