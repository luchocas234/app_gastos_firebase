import React from "react";

import Header from "../elementos/Header";
import { ReactComponent as SvgLogin } from "../imagenes/login.svg";

export default function InicioSesion() {
  return (
    <>
      <Header title={"Inicio Sesion"} rightbtn regisbtn />

      <form className="p-8  h-full flex w-full flex-col justify-around gap-4 ">
        <SvgLogin className=" max-h-[200px] w-full mb-5" />
        <input
          className="b-slate-400  uppercase font-thin pb-8 border-b-2 text-center text-2xl sm:text-4xl"
          type="email"
          name="email"
          placeholder="Correo Electronico"
        />
        <input
          className="b-slate-400 pb-8 border-b-2 uppercase font-thin text-center text-2xl sm:text-4xl"
          type="password"
          name="password"
          placeholder="Contraseña"
        />
      </form>
      <div className="flex justify-center m-10">
        <button className="btn-primary" type="submit">
          Crear Cuenta{" "}
        </button>
      </div>
    </>
  );
}
