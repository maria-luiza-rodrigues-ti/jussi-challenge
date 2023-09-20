"use client";

import Image from "next/image";
import SearchIcon from "@/assets/search.svg";
import { useState } from "react";
import ProductType from "@/app/types";

export default function Search({ getSearchResults }: any) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);

  const fetchData = (value: string) => {
    fetch(`https://dummyjson.com/products/search?q=${query}&limit=3`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.products.filter((product: ProductType) => {
          return (
            value &&
            product &&
            product.title &&
            product.title.toLowerCase().includes(value)
          );
        });
        getSearchResults(results);
      });
  };

  const handleChange = async (value: string) => {
    setQuery(value);
    fetchData(value);
  };

  return (
    <>
      <button
        className="block lg:hidden relative"
        onClick={() => setSearch(!search)}
      >
        <Image src={SearchIcon} alt="Ícone de busca" />
      </button>
      <div
        className={`absolute top-20 lg:top-0 w-full left-0 p-4 lg:flex justify-center lg:relative ${
          search ? "flex" : "hidden"
        }`}
      >
        <form className="w-4/5 lg:w-60 h-10 py-2 px-4 box-border flex flex-row items-center justify-between border-grey-jussi border border-solid rounded-3xl relative bg-white">
          <input
            placeholder="Busca"
            onChange={(e) => handleChange(e.target.value)}
            value={query}
            className="focus:outline-0 placeholder:text-pink-jussi"
          />
          <button>
            <Image src={SearchIcon} alt="Ícone de busca" />
          </button>
        </form>
      </div>
    </>
  );
}
