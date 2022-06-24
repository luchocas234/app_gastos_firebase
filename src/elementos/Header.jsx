import React from "react";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
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

      <div className="flex w-full justify-start lg:justify-between p-10 ">
        {btnback && (
          <div className="w-full flex flex-col gap-2 lg:flex-row  items-center lg:justify-between ">
            <BtnBack />
            <h1 className="uppercase text-3xl font-thin lg:text-4xl">
              {title}
            </h1>
          </div>
        )}

        {rightbtn && (
          <div className="w-full flex flex-col-reverse gap-4 lg:flex-row  items-center lg:justify-between ">
            <h1 className="uppercase text-3xl font-thin lg:text-4xl">
              {title}
            </h1>
            {iniciobtn && (
              <NavLink to={"/iniciar-sesion"}>
                <button className="btn">Iniciar Sesion</button>
              </NavLink>
            )}
            {twobtn && (
              <div className="flex justify-between items-center gap-2 mb-4 lg:m-0">
                <NavLink to={"/categorias"}>
                  <button className="btn">Categorias</button>
                </NavLink>
                <NavLink to={"/lista"}>
                  <button className="btn">Lista de Gastos</button>
                </NavLink>
                <NavLink to={"/"}>
                  <button className="btn">X</button>
                </NavLink>
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
