import Image from "next/image";

import CartIcon from "@/assets/shopping-cart.svg";

export default function Cart() {
  return (
    <button>
      <Image src={CartIcon} alt="Carrinho" />
    </button>
  );
}
