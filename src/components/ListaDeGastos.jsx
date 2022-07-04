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
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
import { async } from "@firebase/util";
import borrarGasto from "../firebase/borrarGasto";
import toast, { Toaster } from "react-hot-toast";
export default function ListaDeGastos() {
  const [gastos, obtenerMasGastos, hayMasPorCargar] = useObtenerGastos();

  const formatearFecha = (fecha) => {
    if (fecha !== undefined)
      return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {
        locale: es,
      });
  };

  const fechaEsIgual = (gastos, index, gasto) => {
    return (
      index !== 0 &&
      formatearFecha(gastos[index - 1].fecha) === formatearFecha(gasto.fecha)
    );
  };

  return (
    <>
      <Toaster />
      <Header title={"Lista de Gastos"} btnback helmet={"Lista de Gastos"} />
      {/* Lista de cada gasto */}
      <ul className=" list-none p-2 md:px-10 w-full h-full overflow-auto  ">
        {gastos.map((gasto, index) => {
          return (
            <div key={gasto.id}>
              {!fechaEsIgual(gastos, index, gasto) && (
                <div className="bg-purple-600 text-white w-[40%] max-w-[300px] text-center inline-block  py-2 rounded-xl shadow-md ml-5 mt-4 ">
                  {formatearFecha(gasto.fecha)}
                </div>
              )}
              <li
                key={gasto.id}
                className=" group relative p-4 border-b-2   border-[#f2f2f2] grid grid-col-5 md:grid-cols-3 gap-3 justify-between"
              >
                <div className="col-span-5 md:col-span-1  uppercase md:text-2xl font-[500]  flex items-center">
                  <IconoCategoria nombre={gasto.categoria} />
                  {gasto.categoria}
                </div>
                <div className="col-span-4 md:col-span-1 px-2  flex justify-start md:justify-center items-center  md:text-xl capitalize ">
                  {gasto.descripcion}
                </div>
                <div className="col-span-1 md:col-span-1 flex flex-row-reverse md:flex-row-reverse justify-start md:justify-start gap-2 text-xl md:text-2xl font-bold mt-2 items-center ">
                  {convertirAMoneda(gasto.cantidad)}
                  <div className="group-hover:opacity-80  opacity-10  md:opacity-0  transition-all ease-in-out duration-300 mx-2 flex  items-center ">
                    <NavLink to={`/editar/${gasto.id}`}>
                      <button>
                        <IconoEditar className="inline fill-gray-400 hover:scale-105 hover:fill-green-500 mr-4" />
                      </button>
                    </NavLink>
                    <button
                      onClick={() => {
                        borrarGasto(gasto.id);
                        toast.error("Gasto eliminado!");
                      }}
                    >
                      <IconoBorrar className="inline fill-gray-400 hover:scale-105 hover:fill-red-500 " />
                    </button>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
        {hayMasPorCargar && (
          <div className="flex justify-center  m-10">
            <button
              onClick={() => obtenerMasGastos()}
              className="p-6 text-xl hover:bg-gray-200 bg-gray-300 rounded-lg shadow-md"
            >
              Cargar Más
            </button>
          </div>
        )}
        {gastos.length === 0 && (
          <div className="h-full  flex flex-col gap-6 items-center justify-center">
            <p className="text-4xl uppercase text-center font-thin text-gray-400">
              No hay gastos por mostrar
            </p>
            <NavLink to={`/`}>
              <button className="p-5 text-xl hover:bg-gray-200 bg-gray-200 rounded-lg shadow-md">
                Agregar Gasto
              </button>
            </NavLink>
          </div>
        )}
      </ul>

      <BarraTotalGastado />
    </>
  );
}
