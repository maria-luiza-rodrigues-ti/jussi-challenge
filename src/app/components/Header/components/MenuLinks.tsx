export default function MenuLinks() {
  return (
    <nav className="lg:flex lg:gap-8">
      <a
        href="https://jussi.com.br/services.html"
        target="_blank"
        rel="noopener"
        className="text-jussi-p hidden lg:block cursor-pointer hover:font-bold duration-500"
      >
        Nossas soluções
      </a>
      <a
        href="https://jussi.com.br"
        target="_blank"
        rel="noopener"
        className="text-jussi-p hidden lg:block cursor-pointer hover:font-bold duration-500"
      >
        Conheça a Jüssi
      </a>
    </nav>
  );
}
