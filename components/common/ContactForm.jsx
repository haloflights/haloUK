
'use client'

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    tel: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_7vxakub', 'template_0eyccd3', values, '_suyIjJd0xShlo2Fq')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          tel: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
        setStatus('FAILED');
      });
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      <div className="col-12">
      <div className="form-input">
        <label className="lh-1 text-16 text-light-1 mt--10" htmlFor="name">Full Name:</label>
        <input type="text" name="fullName" value={values.fullName} onChange={handleChange} required />
      </div>
      </div>

      <div className="col-12">
      <div className="form-input">
        <label className="lh-1 text-16 text-light-1 mt--10">Email:</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} required />
      </div>
      </div>
      <div className="col-12">
      <div className="form-input">
        <label className="lh-1 text-16 text-light-1 mt--10">Phone Number:</label>
        <input type="text" name="tel" value={values.tel} onChange={handleChange} required />
      </div>
      </div>
      <div className="col-12">
      <div className="form-input">
        <label className="lh-1 text-16 text-light-1 mt--10">Message:</label>
        <textarea name="message" value={values.message} onChange={handleChange} required></textarea>
      </div>
      </div>
      <div className="col-auto">
      <button
          type="submit"
          className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
        </div>
      {status === 'SUCCESS' && <p className="text-14 text-green-2">Message submitted successfully!</p>}
      {status === 'FAILED' && <p className="text-14 text-red-1">Failed to submit message. Please try again later.</p>}
    </form>
  );
};

export default dynamic(() => Promise.resolve(ContactForm), { ssr: false });