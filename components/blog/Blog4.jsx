'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import blogsData from "../../data/blogs";

const Blog4 = () => {
  const filteredBlogs = blogsData;
  return (
    <Swiper
      spaceBetween={20}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".js-blog-next",
        prevEl: ".js-blog-prev",
      }}
      pagination={{
        el: ".js-blog-pag",
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
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {filteredBlogs.map((item) => (
        <SwiperSlide key={item.id} className="col-lg-3 col-sm-6">
          <Link href={item?.link} className="blogCard -type-1 d-block">
            <div className="blogCard__image">
              <div className="ratio ratio-1:1 rounded-4 rounded-8">
                <Image width={400} height={400} className="img-ratio" src={item.f_img} alt="image" />
              </div>
            </div>
            <div className="mt-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
              <div className="text-light-1 text-15 lh-14 mt-5">{item.date}</div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Blog4;
