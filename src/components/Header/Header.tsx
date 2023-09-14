import Image from "next/image";

import Logo from "@/assets/logoJussiVectorGreen.svg";

import { Search } from "./components/Search";
import { Login } from "./components/Login";
import { Cart } from "./components/Cart";

export function Header() {
  return (
    <header className="w-full h-20 px-6 bg-white flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-8">
        <Image src={Logo} alt="Jüssi Logo" />
        <a
          href="https://jussi.com.br/services.html"
          target="_blank"
          rel="noopener"
          className="text-base font-medium text-black"
        >
          Nossas soluções
        </a>
        <a
          href="https://jussi.com.br"
          target="_blank"
          rel="noopener"
          className="text-base font-medium text-black"
        >
          Conheça a Jüssi
        </a>
      </div>
      <div className="flex flex-row items-center gap-8">
        <Search />
        <Login />
        <Cart />
      </div>
    </header>
  );
}
