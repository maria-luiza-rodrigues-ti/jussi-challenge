import Image from "next/image";

import LoginIcon from "@/assets/person-outline.svg";

export default function Login() {
  return (
    <button className="text-jussi-p hover:font-bold duration-500">
      <Image
        src={LoginIcon}
        alt="Ícone Login"
        className="w-6 block lg:hidden cursor-pointer hover:font-bold duration-500"
      />
      <span className="hidden lg:block text-jussi-p">Login</span>
    </button>
  );
}
