"use client";

import Image from "next/image";
import ProductType from "@/app/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

export default function SectionShelf({
  products,
}: {
  products: ProductType[];
}) {
  const arrayProducts = products.filter(
    (product: ProductType) => product.category === "laptops"
  );

  const arrayProductsReduced = arrayProducts.slice(0, 4);

  return (
    <section className="py-14 px-6 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-x-1 mb-6">
          <span className="text-jussi-h2 text-green-jussi">&#47;&#47;</span>
          <h2 className="text-jussi-h2 uppercase">Nossas soluções</h2>
        </div>
        <Swiper
          loop
          navigation={true}
          modules={[Navigation]}
          className="product-slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {arrayProductsReduced.map((product: ProductType, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className="border rounded box-border p-4 min-h-[381px] h-full"
              >
                <div className=" h-[153px]">
                  <Image
                    src={product.thumbnail}
                    alt="Imagem do produto"
                    height={100}
                    width={100}
                    className="h-[100px] w-auto"
                  />
                </div>
                <h4 className="text-jussi-p mb-4 line-clamp-1">
                  {product.title}
                </h4>
                <p className="text-jussi-small mb-4 text-pink-jussi line-clamp-1">
                  {product.description}
                </p>
                <div className="mb-4">
                  <p className="text-jussi-small text-dark-grey">• Feature 1</p>
                  <p className="text-jussi-small text-dark-grey">• Feature 2</p>
                  <p className="text-jussi-small text-dark-grey">• Feature 3</p>
                </div>
                <a
                  href="/"
                  className="block box-border py-2.5 px-16 border-2 rounded-md border-green-jussi bg-green-jussi text-jussi whitespace-nowrap text-center hover:bg-transparent hover: duration-500"
                >
                  Ver produto
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
