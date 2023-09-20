import Form from "./components/Form";

export default function SectionForm() {
  return (
    <section className="bg-black py-[136px] px-6 lg:px-0 ">
      <div className=" max-w-[676px] mx-auto flex flex-col gap-y-6 items-center">
        <h2 className="text-jussi-h2 text-white uppercase max-w-[jussi-content] text-center">
          receba novidades da nossa área de produtos digitais.
        </h2>
        <Form />
      </div>
    </section>
  );
}
