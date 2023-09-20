"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

import stores from "../../data/stores.json";

import Brastemp from "@/assets/logo-brastemp.svg";
import CompraCerta from "@/assets/logo-compra-certa.svg";
import Consul from "@/assets/logo-consul.svg";
import TheBar from "@/assets/logo-thebar.svg";

export default function SectionStores() {
  const data = stores.stores;
  const images = [
    { id: 1, image: Brastemp },
    { id: 2, image: CompraCerta },
    { id: 3, image: Consul },
    { id: 4, image: TheBar },
  ];

  const newData = data.map((obj) => {
    const newObj = images.find((item) => item.id === obj.id);
    return { ...obj, ...newObj };
  });

  return (
    <section className="h-40 px-6 lg:px-0 lg:h-20 bg-grey-jussi flex justify-center items-center">
      <div className=" w-full lg:px-0 lg:max-w-[1014px] gap-x-12 lg:flex lg:items-center">
        <h3 className="whitespace-nowrap text-center mb-6 lg:mb-0">
          Nossas principais lojas VTEX
        </h3>
        <span className="hidden lg:block">→</span>
        <Swiper
          loop
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 36,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 48,
            },
          }}
        >
          {newData.map((store: any) => {
            return (
              <SwiperSlide key={store.id}>
                <a href={store.url} target="_blank" rel="noreferrer">
                  <Image
                    src={store.image}
                    alt={store.alt}
                    className="w-full max-h-[38px] h-full"
                  />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
