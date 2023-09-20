"use client";

import Image from "next/image";
import ProductType from "@/app/types";

export default function SearchResults({ results }: { results: ProductType[] }) {
  return (
    <div className="absolute mt-6 max-h-[300px] w-[400px] rounded-xl right-[75px] bg-white overflow-hidden overflow-y-auto">
      {results.map((result: ProductType) => {
        return (
          <div
            key={result.id}
            className="flex gap-x-4 px-1 py-4 mx-4 mb-4 border-b"
          >
            <Image
              src={result.thumbnail}
              alt="Thumbnail Produto"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-between">
              <h5 className="line-clamp-1 text-jussi-search">{result.title}</h5>
              <div>
                <p className="text-jussi-small line-through text-pink-jussi">
                  R${result.price + result.discountPercentage},00
                </p>
                <p>R${result.price}, 00</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
