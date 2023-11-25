import React from "react";

import studentGirlBg from "@assets/images/student-girl-bg.svg";
import { LoginForm } from "@components/LoginForm";

export function Login() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-white  px-9 py-8">
      <div className="w-full max-w-7xl h-fit rounded-3xl shadow-md flex items-center justify-center">
        {/* Form */}
        <div className="w-full md:w-1/2 h-full bg-white rounded-l-3xl flex flex-col items-center justify-center">
          <LoginForm />
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
