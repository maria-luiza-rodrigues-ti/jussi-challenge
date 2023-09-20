export default function Form() {
  return (
    <div className="h-[60px] w-full max-w-[502px] border-b border-green-jussi flex justify-between">
      <input
        type="text"
        placeholder="Digite seu e-mail"
        className="w-10/12 bg-transparent text-white text-jussi-p placeholder:text-jussi-p placeholder:text-white focus:outline-none"
      />
      <input
        type="submit"
        value="Cadastrar"
        className="text-green-jussi text-jussi-p uppercase"
      />
    </div>
  );
}
