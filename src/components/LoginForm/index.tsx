import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";

// Assets
// import logo from "@assets/images/logo.png";
import emailIcon from "@assets/icons/email-icon.svg";
import lockIcon from "@assets/icons/lock-icon.svg";
import googleIcon from "@assets/icons/google-icon.svg";
import facebookIcon from "@assets/icons/facebook-icon.svg";

// Hooks
import { useAuth } from "@hooks/useAuth";

type LoginFields = {
  Email: string;
  Senha: string;
};

const defaultValues = {
  Email: "",
  Senha: "",
};

const LoginSchema = yup
  .object({
    Email: yup.string().required(),
    Senha: yup.string().required(),
  })
  .required();

const resolver = yupResolver(LoginSchema);

export function LoginForm() {
  const { authenticate } = useAuth();

  const { register, handleSubmit, reset } = useForm<LoginFields>({
    defaultValues,
    resolver,
  });

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    console.log(data);
    // authenticate(data);
    // reset(defaultValues);
    return <Link to="/admin" />;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-2 py-3 md:w-96 h-full flex flex-col items-center"
    >
      <h2 className="font-bold text-3xl text-gray-900 ">Logo</h2>
      {/* <img src={logo} alt="Logo" className="h-32" /> */}

      <div className="w-full mt-14 flex flex-col items-center">
        <div className="w-full">
          <span className="font-normal text-base text-neutral-600">
            Entre com o e-mail acadêmico
          </span>

          <div className="mt-6 flex flex-col gap-4">
            <div className="w-full h-12 bg-slate-50 flex items-center gap-2 rounded-lg px-2 py-3">
              <img src={emailIcon} />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 outline-none bg-slate-50"
                {...register("Email")}
              />
            </div>
            <div className="w-full h-12 bg-slate-50 flex items-center gap-2 rounded-lg px-2 py-3">
              <img src={lockIcon} />
              <input
                type="password"
                placeholder="Senha"
                className="w-full h-12 outline-none bg-slate-50"
                {...register("Senha")}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 w-full flex items-center justify-center gap-1 border-b border-slate-100">
          <span className="text-base text-neutral-600">
            <b className="font-bold text-zinc-800">Entre</b> com outras
          </span>
        </div>

        <div className="mt-6 w-full flex flex-col items-center justify-center gap-4">
          <button
            type="button"
            className="w-full h-12 flex items-center justify-center gap-1 border border-slate-200 rounded-xl"
          >
            <img src={googleIcon} alt="google icon" />
            <span>
              Entre com o <b>Google</b>
            </span>
          </button>
          <button
            type="button"
            className="w-full h-12 flex items-center justify-center gap-1 border border-slate-200 rounded-xl"
          >
            <img src={facebookIcon} alt="facebook icon" />
            <span>
              Entre com o <b>Facebook</b>
            </span>
          </button>
        </div>

        <button className="mt-8 bg-blue-500 w-32 rounded-2xl px-2 py-3 font-bold text-xs shadow-md text-white">
          <Link to="/admin">Entrar</Link>
        </button>
      </div>

      <div className="mt-5">
        <span>
          Não tem conta?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Cadastre-se aqui
          </Link>
        </span>
      </div>
    </form>
  );
}
