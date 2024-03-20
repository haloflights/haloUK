
'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { beach_phuket_city_hotels } from "../../../../../data/city_hotels";

const KaronHotel = () => {
  return (
    <>
      {beach_phuket_city_hotels.filter((item) => item.city === 'karon_beach').map((item) => (
        <div className="col-12" key={item?.id}>
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                  <div className="cardImage__content">
                    <div className="cardImage-slider rounded-4  custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.slideImg?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <Image
                              width={250}
                              height={250}
                              className="rounded-4 col-12 js-lazy"
                              src={slide}
                              alt="image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  {/* End image */}

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md">
                <h3 className="text-18 lh-16 fw-500">
                  <Link href={item?.link}>
                    {item?.title} </Link>
                  <br className="lg:d-none" />
                  <div className="d-inline-block">
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                  </div>
                </h3>

                <div className="row x-gap-10 y-gap-10 items-center pt-5 pb-20">
                  <div className="col-auto">
                    <p className="text-14">{item?.location}</p>
                  </div>

                  {/* <div className="col-auto">
                    <button
                      data-x-click="mapFilter"
                      className="d-block text-14 text-blue-1 underline"
                    >
                      Show on map
                    </button>
                  </div> */}

                  {/* <div className="col-auto">
                    <div className="size-4 rounded-full bg-light-1"></div>
                  </div> */}

                  {/* <div className="col-auto">
                    <p className="text-14">2 km to city center</p>
                  </div> */}
                </div>


                <div className="text-14 text-green-2 lh-15 mt-10">
                  <div className="fw-500">Free cancellation</div>
                  <div className="">
                    You can cancel later, so lock in this great price today.
                  </div>
                </div>

                <div className="row x-gap-10 y-gap-10 pt-20">
                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      Breakfast
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      WiFi
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-md */}

              <div className="col-md-auto text-right md:text-left ">
                <div className="row x-gap-10 y-gap-10 justify-end items-center">
                  {/* First Column - Hidden on Mobile */}
                  <div className="col-auto d-none d-sm-block">
                    <div className="text-14 lh-14 fw-500">{item?.review}</div>
                  </div>

                  {/* Second Column - Hidden on Mobile */}
                  <div className="col-auto d-none d-sm-block">
                    <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                      {item?.ratings}
                    </div>
                  </div>
                </div>



                <div className="row">
                  {/* Pricing Information */}
                  <div className="col-7 col-md-12">
                    <div className="text-22 lh-12 fw-600 d-md-none mt-20">
                      £ {item?.price}
                    </div>
                    <div className="text-22 lh-12 fw-600 mt-60 mb-40 d-none d-sm-block">
                      £ {item?.price}
                    </div>
                  </div>

                  {/* First Column - Hidden on Desktop */}
                  <div className="col-3 d-md-none mt-20">
                    <div className="text-14 lh-20 fw-500">{item?.review}</div>
                  </div>

                  {/* Second Column - Hidden on Desktop */}
                  <div className="col-2 d-md-none mt-10">
                    <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                      {item?.ratings}
                    </div>
                  </div>




                  <Link
                    href={item?.link}
                    className="button -md -dark-1 bg-blue-1 text-white mt-20"
                  >
                    See Deal{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default KaronHotel;
