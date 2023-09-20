import Image from "next/image";
import ProductType from "@/app/types";

export default function CardsDesktop({
  products,
}: {
  products: ProductType[];
}) {
  const arrayProducts = products.filter(
    (product: ProductType) => product.category === "furniture"
  );
  const arrayProductsReduced = arrayProducts.slice(0, 3);

  return (
    <div className="hidden md:flex">
      <ul className=" justify-center grid md:grid-cols-[130px_79px_43px_87px_122px] md:grid-rows-[156px_53px_62px_156px_53px]">
        {arrayProductsReduced.map((product: ProductType, index: number) => {
          let className, anchor: string;

          if (index === 0) {
            className =
              "md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-5 z-2";
            anchor = "Mais Detalhes";
          } else if (index === 1) {
            className =
              "md:col-start-4 md:col-end-6 md:row-start-3 md:row-end-6";
            anchor = "Adicionar à sacola";
          } else {
            className =
              "md:col-start-2 md:col-end-5 md:row-start-1 md:row-end-4";
            anchor = "Comprar em 12x";
          }

          return (
            <li
              key={product.id}
              className={`${className} flex flex-col items-center p-4 gap-y-6 rounded-lg bg-white shadow-[0_32px_32px_0px_rgba(0,0,0,0.25)]`}
            >
              <Image
                src={product.images[0]}
                alt="Imagem Produto"
                width={165}
                height={165}
              />
              <a
                href="/"
                className="border rounded-3xl border-pink-jussi py-3 px-6 text-jussi-p text-pink-jussi whitespace-nowrap hover:bg-pink-jussi hover:text-white duration-500"
              >
                {anchor}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
