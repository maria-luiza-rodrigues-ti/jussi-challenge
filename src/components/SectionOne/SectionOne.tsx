import { Cards } from "./components/Cards";

export function SectionOne() {
  return (
    <section className="bg-jussi-green">
      <div>
        <h1>Criamos lojas que vendem mais.</h1>
        <p>
          A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
          Precisa criar sua loja ou migrar de plataforma?
        </p>
        <a href="">Veja nossas soluções</a>
      </div>
      <div>
        <Cards />
      </div>
    </section>
  );
}
