
'use client'

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";


const WhyChooseMobile = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/support.svg",
      title: "Support from Start to Finish",
      text: `Questions or need assistance? Our dedicated team is here for you 24/7, ensuring your holiday experiences are smooth and enjoyable from start to finish.`,
      delayAnimation: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/discount.svg",
      title: "Unbeatable Prices",
      text: `Rest assured, you're getting the best deal possible. Our best price guarantee means you can book your all-inclusive holiday knowing you've made a smart choice.`,
      delayAnimation: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/quote-request.svg",
      title: "ATOL Protection",
      text: `Your peace of mind is paramount. With ATOL protection, every aspect of your trip is secure, promising worry-free travel and financial safety so dont worry..`,
      delayAnimation: "300",
    },
    {
      id: 4,
      icon: "/img/featureIcons/booking.svg",
      title: "Flexible Bookings",
      text: `Plan your holiday with confidence. Our flexible booking options allow you to adapt as your plans change, offering peace of mind every step of the way.`,
      delayAnimation: "400",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-tour-type-next",
          prevEl: ".js-tour-type-prev",
        }}
        pagination={{
          el: ".js-tour-type-pag",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {blockContent.map((item) => (
          <SwiperSlide
            key={item.id}
            className="col-lg-3 col-sm-6"
            
            
          >
            
            <div className="featureIcon -type-1 -hover-shadow px-10 py-50 rounded-4 border">
            <div className="d-flex justify-center">
              <Image
                width={50}
                height={30}
                src={item.icon}
                alt="image"
                className="js-lazy"
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              
            </div>
          </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WhyChooseMobile;
