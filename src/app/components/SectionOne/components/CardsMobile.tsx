"use client";

import Image from "next/image";
import ProductType from "@/app/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

export default function CardsMobile({ products }: { products: ProductType[] }) {
  const arrayProducts = products.filter(
    (product: ProductType) => product.category === "furniture"
  );
  const arrayProductsReduced = arrayProducts.slice(0, 3);

  return (
    <div className="block md:hidden">
      <Swiper
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="justify-center grid gap-6 md:grid-cols-[130px_79px_43px_87px_122px] md:grid-rows-[156px_53px_62px_156px_53px]"
      >
        {arrayProductsReduced.map((product: ProductType, index: number) => {
          let anchor: string;

          if (index === 0) {
            anchor = "Mais Detalhes";
          } else if (index === 1) {
            anchor = "Adicionar à sacola";
          } else {
            anchor = "Comprar em 12x";
          }

          return (
            <SwiperSlide
              key={product.id}
              className="max-w-max flex-col items-center p-4 gap-y-6 rounded-lg bg-white shadow-[0_32px_32px_0px_rgba(0,0,0,0.25)]"
            >
              <Image
                src={product.images[0]}
                alt="Imagem Produto"
                width={165}
                height={100}
              />
              <a
                href="/"
                className="block mx-auto border rounded-3xl border-pink-jussi py-3 px-6 text-jussi-p text-pink-jussi whitespace-nowrap hover:bg-pink-jussi hover:text-white duration-500"
              >
                {anchor}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
