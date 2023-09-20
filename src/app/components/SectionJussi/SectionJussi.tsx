import Image from "next/image";

import Jussi from "@/assets/image-jussi.png";

export default function SectionJussi() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-6/12 bg-white px-6 py-16 lg:px-0">
        <div className="flex flex-col gap-y-6 w-full lg:mr-[271px] lg:ml-auto lg:max-w-[241px]">
          <h2 className="block font-bold text-jussi-h2 uppercase">
            Olá, somos a Jüssi
          </h2>
          <p className="block">
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
          <a
            href="https://jussi.com.br/services.html"
            target="_blank"
            rel="noopener"
            className="text-base font-medium border rounded-md border-solid border-black py-3 px-6 max-w-max hover:bg-black hover:text-white duration-500"
          >
            Conheça a Jüssi
          </a>
        </div>
      </div>
      <div className="w-full lg:w-6/12 bg-grey-jussi py-16 px-6 lg:px-0">
        <div className="lg:translate-x-[-164px] max-w-[jussi-content] max-h-[520px] ">
          <Image src={Jussi} alt="Escritório Jussi" />
        </div>
      </div>
    </section>
  );
}
