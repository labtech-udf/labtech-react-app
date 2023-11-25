// import { useAuth } from "@hooks/useAuth";
import React from "react";

import studentGirlBg from "@assets/images/student-girl-bg.svg";
import emailIcon from "@assets/icons/email-icon.svg";
import lockIcon from "@assets/icons/lock-icon.svg";
import googleIcon from "@assets/icons/google-icon.svg";
import facebookIcon from "@assets/icons/facebook-icon.svg";
import { Link } from "react-router-dom";

export function Login() {
  // const { authenticate } = useAuth();
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-white  px-9 py-8">
      <div className="w-full max-w-7xl h-fit rounded-3xl shadow-md flex items-center justify-center">
        {/* Form */}
        <div className="w-full md:w-1/2 h-full bg-white rounded-l-3xl flex flex-col items-center justify-center">
          <form className="w-full px-2 py-3 md:w-96 h-full flex flex-col items-center">
            <h2 className="font-bold text-3xl text-gray-900 ">Logo</h2>

            <div className="w-full mt-14 flex flex-col items-center">
              <div className="w-full">
                <span className="font-normal text-base text-neutral-600">
                  Entre com o e-mail acadêmico
                </span>

                <div className="mt-6 flex flex-col gap-4">
                  <div className="w-full h-12 bg-slate-50 flex items-center gap-2 rounded-lg px-2 py-3">
                    <img src={emailIcon} />
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full h-12 outline-none bg-slate-50"
                    />
                  </div>
                  <div className="w-full h-12 bg-slate-50 flex items-center gap-2 rounded-lg px-2 py-3">
                    <img src={lockIcon} />
                    <input
                      type="text"
                      placeholder="Senha"
                      className="w-full h-12 outline-none bg-slate-50"
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
                <button className="w-full h-12 flex items-center justify-center gap-1 border border-slate-200 rounded-xl">
                  <img src={googleIcon} alt="google icon" />
                  <span>
                    Entre com o <b>Google</b>
                  </span>
                </button>
                <button className="w-full h-12 flex items-center justify-center gap-1 border border-slate-200 rounded-xl">
                  <img src={facebookIcon} alt="facebook icon" />
                  <span>
                    Entre com o <b>Facebook</b>
                  </span>
                </button>
              </div>

              <button
                className="mt-8 bg-blue-500 w-32 rounded-2xl px-2 py-3 font-bold text-xs shadow-md text-white"
                type="submit"
              >
                Entrar
              </button>
            </div>

            <div className="mt-5">
              <span>
                Não tem conta?{" "}
                <Link to="/cadastro" className="text-blue-600 underline">
                  Cadastre-se aqui
                </Link>
              </span>
            </div>
          </form>
        </div>

        {/* Banner */}
        <div className="w-1/2 h-full relative rounded-r-3xl hidden md:block">
          <img
            className="rounded-r-3xl absolute w-full h-full object-cover object-center"
            src={studentGirlBg}
          />
        </div>
      </div>
    </section>
  );
}
