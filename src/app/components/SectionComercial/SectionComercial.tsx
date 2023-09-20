export default function SectionComercial() {
  return (
    <section className="bg-pink-jussi py-[136px] px-6 lg:px-0 flex flex-col items-center">
      <div className="max-w-[676px] mx-auto">
        <h2 className="text-jussi-h2 text-white uppercase text-center max-w-[jussi-content] mb-8">
          Essa loja foi construída usando uma das nossas soluções da plataforma
          VTEX. tenha a sua.
        </h2>
        <p className="text-white text-jussi-p mb-2 text-center">
          Entre em contato
        </p>
        <a
          href="mailto:comercial@jussi.com.br"
          className="block text-white text-jussi-email text-center "
        >
          comercial@jussi.com.br
        </a>
      </div>
    </section>
  );
}
