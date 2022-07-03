import React from "react";

import Header from "../elementos/Header";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastosDelMesPorCategoria from "../hooks/useObtenerGastosDelMesPorCategoria";
import IconoCategoria from "./IconoCategoria";
import convertirAMoneda from "./../funciones/convertirAMoneda";

export default function GastosPorCategoria() {
  const gastosPorCategoria = useObtenerGastosDelMesPorCategoria();
  console.log(gastosPorCategoria);
  return (
    <>
      <Header
        helmet={"Gastos Por Categoria"}
        btnback
        title={"Gastos por Categoria"}
      />
      <ul className="h-full overflow-auto p-10 list-none">
        {gastosPorCategoria.map((elemento, index) => {
          return (
            <li className="p-5 border-b-2 flex justify-between" key={index}>
              <div className="text-xl flex items-center uppercase">
                <IconoCategoria nombre={elemento.categoria} />
                {elemento.categoria}
              </div>
              <div className=" text-xl flex items-center font-semibold">
                {convertirAMoneda(elemento.cantidad)}
              </div>
            </li>
          );
        })}
      </ul>
      <BarraTotalGastado />
    </>
  );
}
