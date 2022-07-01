import React from "react";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
import BotonCerrarSesion from "../elementos/BotonCerrarSesion";
import BtnBack from "./BtnBack";

export default function Header({
  helmet,
  title,
  twobtn,
  iniciobtn,
  regisbtn,
  btnback,
  rightbtn,
}) {
  return (
    <>
      <Helmet>
        <title>{helmet}</title>
      </Helmet>

      <div className="flex w-full  justify-start lg:justify-between py-10 p-6 lg:p-10  ">
        {btnback && (
          <div className="w-full flex flex-col gap-6 md:flex-row  items-center justify-between ">
            <BtnBack />
            <h1 className="uppercase text-5xl text-center ">{title}</h1>
          </div>
        )}

        {rightbtn && (
          <div className="w-full flex flex-col-reverse md:flex-row items-center gap-6 justify-between ">
            <h1 className="uppercase text-5xl text-center ">{title}</h1>
            {iniciobtn && (
              <NavLink to={"/iniciar-sesion"}>
                <button className="btn">Iniciar Sesion</button>
              </NavLink>
            )}
            {twobtn && (
              <div className="flex justify-between  items-center gap-2 ">
                <NavLink to={"/categorias"}>
                  <button className="btn ">Categorias</button>
                </NavLink>
                <NavLink to={"/lista"}>
                  <button className="btn">Lista de Gastos</button>
                </NavLink>
                <BotonCerrarSesion />
              </div>
            )}
            {regisbtn && (
              <NavLink to={"/crear-cuenta"}>
                <button className="btn">Registrarse</button>
              </NavLink>
            )}
          </div>
        )}
      </div>
    </>
  );
}
