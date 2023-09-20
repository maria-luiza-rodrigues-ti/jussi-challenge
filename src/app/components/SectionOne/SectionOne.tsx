import ProductType from "@/app/types";
import Cards from "./components/Cards";

export default function SectionOne({ products }: { products: ProductType[] }) {
  return (
    <section className="bg-green-jussi">
      <div
        className="max-w-5xl mx-auto py-10 px-6 flex 
        flex-col gap-6 lg:flex-row lg:gap-28 lg:px-0"
      >
        <div className="mx-auto my-0 flex flex-col lg:max-w-[451px] lg:m-0 ">
          <h1 className="  text-[64px] font-medium leading-none uppercase mb-4">
            Criamos lojas que vendem mais.
          </h1>
          <p className="text-jussi-p mb-8">
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <a
            href="https://jussi.com.br/services.html"
            target="_blank"
            rel="noopener"
            className="text-jussi-p max-w-max border rounded-md border-solid border-black py-3 px-6  hover:text-green-jussi hover:bg-black duration-500"
          >
            Veja nossas soluções
          </a>
        </div>
        <Cards products={products} />
      </div>
    </section>
  );
}
