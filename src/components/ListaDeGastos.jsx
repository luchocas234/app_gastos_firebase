import React, { useContext } from "react";
import { useAuth } from "../contextos/AuthContext";
import Header from "../elementos/Header";
import { AuthContext } from "../contextos/AuthContext";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastos from "../hooks/useObtenerGastos";
import IconoCategoria from "./../components/IconoCategoria";
import convertirAMoneda from "./../funciones/convertirAMoneda";
import { ReactComponent as IconoEditar } from "./../imagenes/editar.svg";
import { ReactComponent as IconoBorrar } from "./../imagenes/borrar.svg";
import { NavLink } from "react-router-dom";

export default function ListaDeGastos() {
  const [gastos] = useObtenerGastos();

  return (
    <>
      <Header title={"Lista de Gastos"} btnback helmet={"Lista de Gastos"} />

      {/* Lista de cada gasto */}

      <ul className=" list-none p-10 h-full overflow-auto  ">
        {gastos.map((gasto) => {
          return (
            <li
              key={gasto.id}
              className=" group relative p-5 border-b-2   border-[#f2f2f2] grid grid-col-2 md:grid-cols-3 gap-3 justify-between"
            >
              <div className="col-span-1 md:col-span-1  uppercase text-[20px] font-[500]  flex items-center">
                <IconoCategoria nombre={gasto.categoria} />
                {gasto.categoria}
              </div>

              <div className="col-span-1 md:col-span-1  flex justify-end md:justify-center items-center  text-xl capitalize ">
                {gasto.descripcion}
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-row-reverse md:flex-row-reverse justify-start md:justify-start gap-2 text-2xl font-bold mt-2 items-center ">
                {convertirAMoneda(gasto.cantidad)}

                <div className="group-hover:opacity-80 opacity-0  transition-all ease-in-out duration-300 mx-2 flex items-center ">
                  <NavLink to={`/editar/${gasto.id}`}>
                    <button>
                      <IconoEditar className="fill-gray-400 hover:scale-105 hover:fill-green-500 mr-4" />
                    </button>
                  </NavLink>
                  <button>
                    <IconoBorrar className="fill-gray-400 hover:scale-105 hover:fill-red-500 " />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
        {gastos.length > 10 && (
          <div className="flex justify-center  m-10">
            <button className="p-6 text-xl hover:bg-gray-200 bg-gray-300 rounded-lg shadow-md">
              {" "}
              Cargar Más
            </button>
          </div>
        )}
        {gastos.length === 0 && (
          <div className="h-full  flex items-center justify-center">
            <p className="text-4xl uppercase font-thin text-gray-400">
              No hay gastos por mostrar
            </p>
          </div>
        )}
      </ul>

      <BarraTotalGastado />
    </>
  );
}
