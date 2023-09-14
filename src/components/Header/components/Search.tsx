import Image from "next/image";
import SearchIcon from "@/assets/search.svg";

export function Search() {
  return (
    <div className="w-60 h-10 py-2 px-4 box-border flex flex-row items-center justify-between border-grey-jussi border rounded-3xl ">
      <input
        type="search"
        placeholder="Busca"
        className="placeholder:text-pink-jussi relative after:content-[url('../assets/search.svg')] after:inline-block after:h-6 after:w-6 after:absolute after:z-10"
      />
      <button>
        <Image src={SearchIcon} alt="Ícone de busca" />
      </button>
    </div>
  );
}
