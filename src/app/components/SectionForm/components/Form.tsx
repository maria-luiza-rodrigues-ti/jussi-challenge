"use client";

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [emptyValue, setEmptyValue] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "") {
      setEmptyValue(true);
    }

    localStorage.setItem("Email", email);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center max-w-[502px]">
        <form
          onSubmit={handleSubmit}
          className="flex w-full h-[60px] border-b border-green-jussi"
        >
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-10/12 bg-transparent text-white text-jussi-p placeholder:text-jussi-p placeholder:text-white focus:outline-none"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="submit"
            value="Cadastrar"
            className="text-green-jussi text-jussi-p uppercase"
          />
        </form>
        {emptyValue ? (
          <span className=" text-jussi-small text-red-400">
            O campo precisa ser preenchido
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
