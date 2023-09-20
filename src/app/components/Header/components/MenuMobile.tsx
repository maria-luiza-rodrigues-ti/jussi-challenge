"use client";

import { useState } from "react";

import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/close.svg";

export default function Menu() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="flex lg:hidden relative transition-all ease-in duration-1000">
      <button onClick={() => setNavbar(!navbar)}>
        {navbar ? (
          <Image src={CloseIcon} alt="Ícone menu" className="lg:hidden w-6" />
        ) : (
          <Image src={MenuIcon} alt="Ícone menu" className="lg:hidden w-6" />
        )}
      </button>
      <nav
        className={`absolute bg-white top-[48px] flex flex-col left-[-24px] w-[100vw] p-6 gap-5 transition-all ease-in duration-1000 z-10 ${
          navbar ? "block" : "hidden"
        }`}
      >
        <a
          href="https://jussi.com.br/services.html"
          target="_blank"
          rel="noopener"
          className="block text-jussi-p lg:block cursor-pointer hover:font-bold duration-500"
        >
          Nossas soluções
        </a>
        <a
          href="https://jussi.com.br"
          target="_blank"
          rel="noopener"
          className="text-jussi-p lg:block cursor-pointer hover:font-bold duration-500"
        >
          Conheça a Jüssi
        </a>
      </nav>
    </div>
  );
}
