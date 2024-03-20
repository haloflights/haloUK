"use client"
import Link from "next/link";
import dynamic from "next/dynamic";
import Popup from "@/data/popup"
import React, { useEffect, useState } from "react";
import InputField from "@/data/inputfield";
import TextArea from "@/data/textArea";
import emailjs from '@emailjs/browser';

const HighlightList = ({ holiday }) => {

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    tel: '',
    depdate: '',
    travelno: '',
    nights: '',
    adults: '',
    children: '0',
    destination: holiday?.location || '',
    hotel: holiday?.title || '',
    vacation: holiday?.type || '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_7vxakub', 'template_noqzlrs', values, '_suyIjJd0xShlo2Fq')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          tel: '',
          depdate: '',
          travelno: '',
          nights: '',
          adults: '',
          children: '',
          destination: '',
          hotel: '',
          vacation: '',
          message: ''
        });
        setStatus('SUCCESS')
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
        window.location.href = '/thank_you';
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="col-12 pb-20 ">
      <ul class="list list--bullet">
    <li >5 Nights</li>
    <li >Free Wifi</li>
    <li >Breakfast Included</li>
    <li >Connecting rooms available at the hotel</li>
    <li >Provides a free local shuttle to the city center</li>
    <li >Old Town with the Blue Mosque, Hagia Sophia Museum, and the Grand Bazaar are around 20 minutes from our door</li>
</ul>
        {/* End Location */}
        
      </div>
      {/* End .col-12 */}


      <div className="col-12">
        <button onClick={togglePopup} className="text-white button -dark-2 py-15 px-35 h-40 col-12 rounded-4 bg-blue-1">

          Enquire Now
        </button>
        {isOpen && <Popup
          handleClose={togglePopup}
          content={<div>
            <h3 className="text-center mt--10">World Wonders Wait</h3>
            <p className="text-center">Your Enquiry is the Key</p>
            <form onSubmit={handleSubmit}>
              <InputField value={values.fullName} col="w-100" handleChange={handleChange} className="border-light rounded-4 w-100 bg-light-2 px-10 text-14" label="Full Name" name="fullName" type="text" placeholder="John Doe" />
              <div className="form-row">
                <InputField value={values.email} col="w-50" handleChange={handleChange} className="border-light rounded-4 w-100 bg-light-2 px-10 text-14" label="E-Mail" name="email" type="email" placeholder="john@example.com" />
                <InputField value={values.tel} col="w-50" handleChange={handleChange} className="border-light rounded-4 w-100 bg-light-2 px-10 text-14" label="Phone-Number" name="tel" type="tel" placeholder="2148516143" />
              </div>
              <div className="form-row">
                <InputField value={values.depdate} col='w-100' handleChange={handleChange} className="border-light rounded-4 w-100 bg-light-2 px-10 text-14" label="Departure Date" name="depdate" type="date" placeholder="01st January 2024" />
                <InputField value={values.nights} col='d-none d-sm-block d-sm-block' handleChange={handleChange} className="border-light rounded-4 bg-light-2 px-10 text-14" label="Nights" name="nights" type="number" placeholder="1" />
                <InputField value={values.travelno} col='d-none d-sm-block' handleChange={handleChange} className="border-light rounded-4 w-100 bg-light-2 px-10 text-14" label="Travelers" name="travelno" type="number" placeholder="1" />
                <InputField value={values.adults} col='d-none d-sm-block' handleChange={handleChange} className="border-light rounded-4 bg-light-2 px-10 text-14" label="Adults" name="adults" type="number" placeholder="1" />
                <InputField value={values.children} col='d-none d-sm-block' handleChange={handleChange} className="border-light rounded-4 bg-light-2 px-10 text-14" label="Children" name="children" type="number" placeholder="1" />
              </div>
              <div className="form-row d-md-none">
                <InputField value={values.nights} col='' handleChange={handleChange} className="border-light rounded-4 bg-light-2 px-10 text-14" label="Nights" name="nights" type="number" placeholder="1" />
                <InputField value={values.travelno} col='' handleChange={handleChange} className="border-light rounded-4 w-100 bg-light-2 px-10 text-14" label="Travelers" name="travelno" type="number" placeholder="1" />
                <InputField value={values.adults} col='' handleChange={handleChange} className="border-light rounded-4 bg-light-2 px-10 text-14" label="Adults" name="adults" type="number" placeholder="1" />
                <InputField value={values.children} col='' handleChange={handleChange} className="border-light rounded-4 bg-light-2 px-10 text-14" label="Children" name="children" type="number" placeholder="1" />
              </div>
              <InputField value={values.destination} col='w-40 d-none' readOnly className="border-light rounded-4 w-100 bg-light-2 px-10 text-14" label="Destination" name="destination" type="text" />
              <InputField value={values.hotel} col='w-100 d-none' readOnly className="border-light rounded-4 w-80 bg-light-2 px-10 text-14" label="Hotel" name="hotel" type="text" />
              <InputField value={values.vacation} col='w-40 d-none' readOnly className="border-light rounded-4 w-100 bg-light-2 px-10 text-14" label="Vacation Type" name="vacation" type="text" />
              <TextArea value={values.message} handleChange={handleChange} className="border-light rounded-4 w-100 bg-light-2 px-10 text-14" label="Message" name="message" type="text" placeholder="Your message here..." />
              <button className="text-white button -dark-2 py-15 px-35 h-40 col-12 rounded-4 bg-blue-1" type="submit" href="/coming_soon">Submit</button>
            </form>

            {status && renderAlert()}

          </div>}
        />}
      </div>
      {/* End col-12 search button_item */}

    </>
  );
};

const renderAlert = () => (
  <div className="rounded-4">
    <p className="text-14 text-green-2 mt-10">*Message Submitted Successfully</p>
  </div>
)

export default dynamic(() => Promise.resolve(HighlightList), { ssr: false });
