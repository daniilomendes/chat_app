import React from "react";
import GenderCheckbox from "./GenderCheckbox";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Cadastre-se
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Nome</span>
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Usuário</span>
            </label>
            <input
              type="text"
              placeholder="Digite o nome de usuário"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Senha</span>
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Confirmar senha</span>
            </label>
            <input
              type="password"
              placeholder="confirme sua senha"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            href="/signin"
            className="text-sm text-white  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Já possui uma conta?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
