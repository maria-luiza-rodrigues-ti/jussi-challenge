"use client";

import { useState } from "react";
import Image from "next/image";

import Logo from "@/assets/logoJussiVectorGreen.svg";

import MenuMobile from "./components/MenuMobile";
import MenuLinks from "./components/MenuLinks";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

export default function Header() {
  const [products, setProducts] = useState([]);

  return (
    <header className="w-full max-w-[1391px] mx-auto  h-20 px-6 bg-white flex flex-row justify-between items-center">
      <MenuMobile />
      <div className="flex flex-row items-center gap-8">
        <Image src={Logo} alt="Jüssi Logo" />
        <MenuLinks />
      </div>
      <div className="flex flex-row items-center gap-8">
        <div className="lg:relative">
          <Search getSearchResults={setProducts} />
          <SearchResults results={products} />
        </div>
        <Login />
        <Cart />
      </div>
    </header>
  );
}
