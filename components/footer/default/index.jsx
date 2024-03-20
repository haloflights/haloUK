'use client'

import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import AppButton from "./AppButton";
import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

const index = () => {

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email using EmailJS
    emailjs.send('service_7vxakub', 'template_4njhgeh', { email }, '_suyIjJd0xShlo2Fq')
      .then((response) => {
        console.log('Email sent:', response);
        setStatus('SUCCESS');
      })
      .catch((error) => {
        console.error('Email error:', error);
        setStatus('FAILED');
      });
    // Clear the input field
    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };


  return (
    <footer className="footer -type-1">
      <section className="layout-pt-md layout-pb-md bg-dark-2">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="row y-gap-20 flex-wrap items-center">
                <div className="col-auto">
                  <div className="icon-newsletter text-60 sm:text-40 text-white" />
                </div>
                <div className="col-auto">
                  <h6 className="text-26 text-white fw-600">
                    Your Travel Journey Starts Here
                  </h6>
                  <div className="text-white">
                    Sign up and we'll send the best deals to you
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <form onSubmit={handleSubmit}>
                <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
                  <input
                    className="bg-white h-40 mr-10"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit" className="button -md h-40 bg-blue-1 text-white">
                    Subscribe
                  </button>
                </div>
              </form>
              {status === 'SUCCESS' && <p className="text-white mt-10">Thank You For Subscribing!</p>}
              {status === 'FAILED' && <p>Failed to subscribe. Please try again later.</p>}
            </div>
          </div>
        </div>
      </section>
      
      
      <div className="container">
        <div className="pt-20 pb-10 ">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <ContactInfo />
            </div>
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

             <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Certification</h5>
              <AppButton />
             </div>
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
